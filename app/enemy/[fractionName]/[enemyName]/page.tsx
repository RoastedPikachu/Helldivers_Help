import React from "react";

import { Metadata } from "next";

import { enemiesStore } from "@/store/EnemiesStore";

import { toSlug } from "@/utils/generalFunctions";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheEnemyContent from "@/widgets/pageContents/TheEnemyContent";

import "./EnemyAdditionalInfo.css";

export const metadata: Metadata = {
  title: `HELLDIVERS 2: Противник`,
  description: "",
};

export function generateStaticParams() {
  const enemies = [...enemiesStore.terminids, ...enemiesStore.automatons];

  return enemies.map((enemy) => ({
    fractionName: enemy.fraction === "Терминиды" ? "terminids" : "automatons",
    enemyName: toSlug(enemy?.engTitle),
  }));
}

const Page: React.FC<{ params: any }> = ({ params }) => {
  return (
    <ThePageContent>
      <TheEnemyContent />
    </ThePageContent>
  );
};

export default Page;
