import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      return getAchievement(req, res, Number(id));
    case "PUT":
      return updateAchievement(req, res, Number(id));
    case "DELETE":
      return deleteAchievement(req, res, Number(id));
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getAchievement(
  req: NextApiRequest,
  res: NextApiResponse,
  id: number,
) {
  try {
    const achievement = await prisma.achievement.findUnique({
      where: { id },
    });

    if (!achievement) {
      return res.status(404).json({ error: "Achievement not found" });
    }

    res.status(200).json(achievement);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch achievement" });
  }
}

async function updateAchievement(
  req: NextApiRequest,
  res: NextApiResponse,
  id: number,
) {
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
    } = req.body;

    const updatedAchievement = await prisma.achievement.update({
      where: { id },
      data: {
        iconPath,
        type,
        isCompleted,
        ruTitle,
        enTitle,
        ruDescription,
        enDescription,
        ruAccomplishmentWay,
        enAccomplishmentWay,
      },
    });

    res.status(200).json(updatedAchievement);
  } catch (error) {
    res.status(500).json({ error: "Failed to update achievement" });
  }
}

async function deleteAchievement(
  req: NextApiRequest,
  res: NextApiResponse,
  id: number,
) {
  try {
    await prisma.achievement.delete({
      where: { id },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete achievement" });
  }
}
