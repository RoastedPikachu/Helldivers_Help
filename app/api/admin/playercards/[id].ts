import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const playerCards = await prisma.playerCard.findMany();
    return NextResponse.json(playerCards);
  } catch (error) {
    console.error("Failed to fetch player cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch player cards" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const { image, price, ruTitle, enTitle } = await req.json();

    if (!image || price === undefined || !ruTitle || !enTitle) {
      return NextResponse.json(
        { error: "Missing required fields: image, price, ruTitle, enTitle" },
        { status: 400 },
      );
    }

    const playerCard = await prisma.playerCard.create({
      data: {
        image,
        price: Number(price),
        ruTitle,
        enTitle,
      },
    });

    return NextResponse.json(playerCard, { status: 201 });
  } catch (error) {
    console.error("Failed to create player card:", error);
    return NextResponse.json(
      { error: "Failed to create player card" },
      { status: 500 },
    );
  }
}
