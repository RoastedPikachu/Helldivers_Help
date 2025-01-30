"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { shipModulesStore } from "@/store/ShipModulesStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ShipModule from "@/entities/shipModule/ShipModule";

const TheShipModulesContent = () => {
  const t = useTranslations("ShipModulesPage");

  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <EntitySection gridStyles={"grid-cols-1 mt-[50px] mlarge:mt-[30px]"}>
        {shipModulesStore.shipModules.map((shipModule) => (
          <ShipModule
            key={shipModule.id}
            id={shipModule.id}
            levelImages={shipModule.levelImages}
            improvementPrices={shipModule.improvementPrices}
            improvementAffectedStratagems={
              shipModule.improvementAffectedStratagems
            }
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheShipModulesContent;
