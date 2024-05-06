import React from "react";

import { enemiesStore } from "@/store/EnemiesStore";

import { toSlug } from "@/utils/generalFunctions";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import EnemyAdditionalInfoContent from "@/widgets/enemyAdditionalInfoContent/EnemyAdditionalInfoContent";

import RunningLine from "@/shared/runningLine/RunningLine";

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

      <main className="grid mlarge:block grid-cols-3 mlarge:!mt-[20px]">
        <EnemyAdditionalInfoContent />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
