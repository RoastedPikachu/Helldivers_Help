-- CreateTable
CREATE TABLE "Achievement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iconPath" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "ruTitle" TEXT NOT NULL,
    "enTitle" TEXT NOT NULL,
    "ruDescription" TEXT NOT NULL,
    "enDescription" TEXT NOT NULL,
    "ruAccomplishmentWay" TEXT NOT NULL,
    "enAccomplishmentWay" TEXT NOT NULL
);
