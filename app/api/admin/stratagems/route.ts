import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateDirections(keyCodes: number[]) {
  const orientationMap: Record<number, number> = {
    87: 1, // W - Up
    83: 2, // S - Down
    65: 3, // A - Left
    68: 4, // D - Right
  };

  return keyCodes.map((code, index) => ({
    orientation: orientationMap[code] || 0,
    isPressed: false,
  }));
}

export async function GET() {
  try {
    const stratagems = await prisma.stratagem.findMany({
      include: {
        keyCodes: true,
        directions: true,
      },
    });

    const formattedStratagems = stratagems.map((stratagem: any) => ({
      ...stratagem,
      keyCodes: stratagem.keyCodes.map((kc: any) => kc.code),
    }));

    return NextResponse.json(formattedStratagems);
  } catch (error) {
    console.error("Failed to fetch stratagems:", error);
    return NextResponse.json(
      { error: "Failed to fetch stratagems" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const {
      iconPath,
      videoPath,
      videoPreviewPath,
      type,
      price,
      obtainingLevel,
      callTime,
      useCount,
      reloadTime,
      keyCodes,
    } = await req.json();

    if (
      !iconPath ||
      !videoPath ||
      !videoPreviewPath ||
      !type ||
      price === undefined ||
      obtainingLevel === undefined ||
      callTime === undefined ||
      useCount === undefined ||
      reloadTime === undefined ||
      !keyCodes?.length
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const directions = generateDirections(keyCodes);

    const stratagem = await prisma.stratagem.create({
      data: {
        iconPath,
        videoPath,
        videoPreviewPath,
        type,
        price,
        obtainingLevel,
        callTime,
        useCount,
        reloadTime,
        keyCodes: {
          create: keyCodes.map((code: any) => ({ code })),
        },
        directions: {
          create: directions,
        },
      },
      include: {
        keyCodes: true,
        directions: true,
      },
    });

    const formattedStratagem = {
      ...stratagem,
      keyCodes: stratagem.keyCodes.map((kc: any) => kc.code),
    };

    return NextResponse.json(formattedStratagem, { status: 201 });
  } catch (error) {
    console.error("Failed to create stratagem:", error);
    return NextResponse.json(
      { error: "Failed to create stratagem" },
      { status: 500 },
    );
  }
}
