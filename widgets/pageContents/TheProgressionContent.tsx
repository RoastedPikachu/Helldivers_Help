import React from "react";

import { useTranslations } from "next-intl";

import { ranks } from "@/data/ranks";

import LevelsSection from "@/widgets/levelsSection/LevelsSection";
import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Rank from "@/entities/rank/Rank";

const TheProgressionContent = () => {
  const t = useTranslations("ProgressionPage");

  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <LevelsSection />

      <EntitySection title={t("firstSectionTitle")} gridStyles={"grid-cols-1"}>
        {ranks.map((rank) => (
          <Rank
            key={rank.id}
            id={rank.id}
            iconPath={rank.iconPath}
            fromLevel={rank.fromLevel}
            xpCount={rank.xpCount}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheProgressionContent;
