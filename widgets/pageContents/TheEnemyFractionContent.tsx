"use client";
import React from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fractions } from "@/data/fractions";
import { terminids } from "@/data/enemies/terminids";
import { automatons } from "@/data/enemies/automatons";
import { illuminates } from "@/data/enemies/illuminates";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Enemy from "@/entities/enemiesPage/enemy/Enemy";

import "@/app/pageSections.css";

const TheEnemyFractionContent = () => {
  const params = useParams();

  const t = useTranslations(params.fractionName);

  const getEnemyArray = () => {
    switch (params.fractionName) {
      case "terminids":
        return terminids.map((enemy) => (
          <Enemy
            key={enemy.id}
            id={enemy.id}
            imagePath={enemy.imagePath}
            fraction={fractions["2"]}
            devName={enemy.devName}
          />
        ));
      case "automatons":
        return automatons.map((enemy) => (
          <Enemy
            key={enemy.id}
            id={enemy.id}
            imagePath={enemy.imagePath}
            fraction={fractions["2"]}
            devName={enemy.devName}
          />
        ));
      case "illuminates":
        return illuminates.map((enemy) => (
          <Enemy
            key={enemy.id}
            id={enemy.id}
            imagePath={enemy.imagePath}
            fraction={fractions["3"]}
            devName={enemy.devName}
          />
        ));
    }
  };
  return (
    <main>
      <ThePageTitle title={t("pageTitle" as never)} additionalTitle={""} />

      <PageDescription description={t("pageDescription" as never)} />

      <PageDescription description={t("pageAdditionalDescription" as never)} />

      <section className="pageGridSection grid-cols-4 mlarge:grid-cols-1 mt-[50px] mlarge:mt-[30px]">
        {getEnemyArray()}
      </section>
    </main>
  );
};

export default TheEnemyFractionContent;
