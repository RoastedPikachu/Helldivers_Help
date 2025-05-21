import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const booster = await prisma.booster.findUnique({
      where: { id: Number(params.id) },
    });

    if (!booster) {
      return NextResponse.json({ error: "Booster not found" }, { status: 404 });
    }

    return NextResponse.json(booster);
  } catch (error) {
    console.error("Failed to fetch booster:", error);
    return NextResponse.json(
      { error: "Failed to fetch booster" },
      { status: 500 },
    );
  }
}

// Обновить усилитель
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { iconPath, price, ruTitle, enTitle, ruDescription, enDescription } =
      await request.json();

    const updatedBooster = await prisma.booster.update({
      where: { id: Number(params.id) },
      data: {
        iconPath,
        price: price !== undefined ? Number(price) : undefined,
        ruTitle,
        enTitle,
        ruDescription,
        enDescription,
      },
    });

    return NextResponse.json(updatedBooster);
  } catch (error) {
    console.error("Failed to update booster:", error);
    return NextResponse.json(
      { error: "Failed to update booster" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.booster.delete({
      where: { id: Number(params.id) },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Failed to delete booster:", error);
    return NextResponse.json(
      { error: "Failed to delete booster" },
      { status: 500 },
    );
  }
}
