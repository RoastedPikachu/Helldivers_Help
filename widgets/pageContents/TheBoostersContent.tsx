"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { boostersStore } from "@/store/BoostersStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Booster from "@/entities/booster/Booster";

const TheBoostersContent = () => {
  const t = useTranslations("BoostersPage");

  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <EntitySection
        title={""}
        gridStyles={"mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {boostersStore.boosters.map((booster) => (
          <Booster
            key={booster.id}
            id={booster.id}
            iconPath={booster.iconPath}
            price={booster.price}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheBoostersContent;
