-- CreateTable
CREATE TABLE "Booster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iconPath" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "ruTitle" TEXT NOT NULL,
    "enTitle" TEXT NOT NULL,
    "ruDescription" TEXT NOT NULL,
    "enDescription" TEXT NOT NULL
);
