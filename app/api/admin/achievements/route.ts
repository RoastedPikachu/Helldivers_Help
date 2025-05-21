import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const achievements = await prisma.achievement.findMany();
    return NextResponse.json(achievements);
  } catch (error) {
    console.error("Failed to fetch achievements:", error);
    return NextResponse.json(
      { error: "Failed to fetch achievements" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const {
      iconPath,
      type,
      isCompleted,
      ruTitle,
      enTitle,
      ruDescription,
      enDescription,
      ruAccomplishmentWay,
      enAccomplishmentWay,
    } = await req.json();

    // Валидация полей
    if (!iconPath || !type || !ruTitle || !enTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const achievement = await prisma.achievement.create({
      data: {
        iconPath,
        type,
        isCompleted: isCompleted || false,
        ruTitle,
        enTitle,
        ruDescription: ruDescription || "",
        enDescription: enDescription || "",
        ruAccomplishmentWay: ruAccomplishmentWay || "",
        enAccomplishmentWay: enAccomplishmentWay || "",
      },
    });

    return NextResponse.json(achievement, { status: 201 });
  } catch (error) {
    console.error("Failed to create achievement:", error);
    return NextResponse.json(
      { error: "Failed to create achievement" },
      { status: 500 },
    );
  }
}
