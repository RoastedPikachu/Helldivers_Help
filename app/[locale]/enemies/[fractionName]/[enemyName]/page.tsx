import React from "react";

import { Metadata } from "next";

import { toSlug } from "@/utils/generalFunctions";

import { terminids } from "@/data/enemies/terminids";
import { automatons } from "@/data/enemies/automatons";
import { illuminates } from "@/data/enemies/illuminates";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificEnemyContent from "@/widgets/pageContents/TheSpecificEnemyContent";

import "./EnemyAdditionalInfo.css";

export const metadata: Metadata = {
  title: `HELLDIVERS 2: Противник`,
  description: "",
};

const getEnemyFractionName = (fractionIndex: number) => {
  switch (fractionIndex) {
    case 0:
      return "terminids";
    case 1:
      return "automatons";
    case 2:
      return "illuminates";
  }
};

export function generateStaticParams() {
  const enemies = [...terminids, ...automatons, ...illuminates];

  return enemies.map((enemy: any) => ({
    fractionName: getEnemyFractionName(enemy.fractionIndex),
    enemyName: toSlug(enemy.devName),
  }));
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificEnemyContent />
    </ThePageContent>
  );
};

export default Page;
