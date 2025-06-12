-- CreateTable
CREATE TABLE "Stratagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iconPath" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL,
    "videoPreviewPath" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "obtainingLevel" INTEGER NOT NULL,
    "callTime" INTEGER NOT NULL,
    "useCount" INTEGER NOT NULL,
    "reloadTime" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "KeyCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" INTEGER NOT NULL,
    "stratagemId" INTEGER NOT NULL,
    CONSTRAINT "KeyCode_stratagemId_fkey" FOREIGN KEY ("stratagemId") REFERENCES "Stratagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Direction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orientation" INTEGER NOT NULL,
    "isPressed" BOOLEAN NOT NULL DEFAULT false,
    "stratagemId" INTEGER NOT NULL,
    CONSTRAINT "Direction_stratagemId_fkey" FOREIGN KEY ("stratagemId") REFERENCES "Stratagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
