import React from "react";

import { enemiesStore } from "@/store/EnemiesStore";

import { toSlug } from "@/utils/generalFunctions";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import EnemyAdditionalInfoContent from "@/widgets/enemyAdditionalInfoContent/EnemyAdditionalInfoContent";

import RunningLine from "@/shared/RunningLine";

import "./EnemyAdditionalInfo.css";

export function generateStaticParams() {
  const enemies = [...enemiesStore.terminids, ...enemiesStore.automatons];

  const fixedEnemies = enemies.map((enemy) => ({
    fraction: enemy.fraction,
    title: toSlug(enemy.title),
  }));

  return fixedEnemies.map((enemy) => ({
    fractionName: enemy.fraction === "Терминиды" ? "terminids" : "automatons",
    enemyName: encodeURIComponent(enemy.title),
  }));
}

const Page: React.FC<{ params: any }> = ({ params }) => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="grid grid-cols-3">
        <EnemyAdditionalInfoContent />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
