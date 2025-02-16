import React from "react";

import { getTranslations } from "next-intl/server";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { terminids } from "@/data/enemies/terminids";
import { automatons } from "@/data/enemies/automatons";
import { illuminates } from "@/data/enemies/illuminates";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificEnemyContent from "@/widgets/pageContents/TheSpecificEnemyContent";

import "./EnemyAdditionalInfo.css";

const getCorrectEnemyArray = (fractionName: string) => {
  switch (fractionName) {
    case "terminids":
      return terminids;
    case "automatons":
      return automatons;
    case "illuminates":
      return illuminates;
  }
};

export async function generateMetadata({
  params: { locale, fractionName, enemyName },
}: any) {
  const t = await getTranslations(fractionName);

  return {
    title: `HELLDIVERS 2: ${
      getIntlArray(t("names"))[
        getCorrectEnemyArray(fractionName)!.find(
          (enemy) =>
            enemy.devName.toLowerCase() === fromSlug(enemyName as string),
        ).id - 1
      ]
    }`,
    description: `HELLDIVERS 2: ${
      getIntlArray(t("descriptions"))[
        getCorrectEnemyArray(fractionName)!.find(
          (enemy) =>
            enemy.devName.toLowerCase() === fromSlug(enemyName as string),
        ).id - 1
      ]
    }`,
  };
}

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
