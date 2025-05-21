import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const boosters = await prisma.booster.findMany();
    return NextResponse.json(boosters);
  } catch (error) {
    console.error("Failed to fetch boosters:", error);
    return NextResponse.json(
      { error: "Failed to fetch boosters" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const { iconPath, price, ruTitle, enTitle, ruDescription, enDescription } =
      await req.json();

    if (!iconPath || price === undefined || !ruTitle || !enTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const booster = await prisma.booster.create({
      data: {
        iconPath,
        price: Number(price),
        ruTitle,
        enTitle,
        ruDescription: ruDescription || "",
        enDescription: enDescription || "",
      },
    });

    return NextResponse.json(booster, { status: 201 });
  } catch (error) {
    console.error("Failed to create booster:", error);
    return NextResponse.json(
      { error: "Failed to create booster" },
      { status: 500 },
    );
  }
}
