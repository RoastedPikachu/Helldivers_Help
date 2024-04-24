import React from "react";

import { enemiesStore } from "@/store/EnemiesStore";

import { toSlug } from "@/utils/generalFunctions";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import EnemyAdditionalInfoContent from "@/widgets/enemyAdditionalInfoContent/EnemyAdditionalInfoContent";

import RunningLine from "@/shared/RunningLine";

import "./EnemyAdditionalInfo.css";

export function generateStaticParams() {
  const enemies = [...enemiesStore.terminids, ...enemiesStore.automatons];

  return enemies.map((enemy) => ({
    fractionName: enemy.fraction === "Терминиды" ? "terminids" : "automatons",
    enemyName: toSlug(enemy?.engTitle),
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
