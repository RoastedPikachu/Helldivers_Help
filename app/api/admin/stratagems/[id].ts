import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const stratagem = await prisma.stratagem.findUnique({
      where: { id: Number(params.id) },
      include: {
        keyCodes: true,
        directions: true,
      },
    });

    if (!stratagem) {
      return NextResponse.json(
        { error: "Stratagem not found" },
        { status: 404 },
      );
    }

    const formattedStratagem = {
      ...stratagem,
      keyCodes: stratagem.keyCodes.map((kc: any) => kc.code),
    };

    return NextResponse.json(formattedStratagem);
  } catch (error) {
    console.error("Failed to fetch stratagem:", error);
    return NextResponse.json(
      { error: "Failed to fetch stratagem" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
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
    } = await request.json();

    let updateData: any = {
      iconPath,
      videoPath,
      videoPreviewPath,
      type,
      price,
      obtainingLevel,
      callTime,
      useCount,
      reloadTime,
    };

    if (keyCodes) {
      await prisma.keyCode.deleteMany({
        where: { stratagemId: Number(params.id) },
      });

      updateData.keyCodes = {
        create: keyCodes.map((code: number) => ({ code })),
      };

      await prisma.direction.deleteMany({
        where: { stratagemId: Number(params.id) },
      });

      // const directions = generateDirections(keyCodes);
      // updateData.directions = {
      //   create: directions,
      // };
    }

    const updatedStratagem = await prisma.stratagem.update({
      where: { id: Number(params.id) },
      data: updateData,
      include: {
        keyCodes: true,
        directions: true,
      },
    });

    const formattedStratagem = {
      ...updatedStratagem,
      keyCodes: updatedStratagem.keyCodes.map((kc: any) => kc.code),
    };

    return NextResponse.json(formattedStratagem);
  } catch (error) {
    console.error("Failed to update stratagem:", error);
    return NextResponse.json(
      { error: "Failed to update stratagem" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.keyCode.deleteMany({
      where: { stratagemId: Number(params.id) },
    });

    await prisma.direction.deleteMany({
      where: { stratagemId: Number(params.id) },
    });

    await prisma.stratagem.delete({
      where: { id: Number(params.id) },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Failed to delete stratagem:", error);
    return NextResponse.json(
      { error: "Failed to delete stratagem" },
      { status: 500 },
    );
  }
}
