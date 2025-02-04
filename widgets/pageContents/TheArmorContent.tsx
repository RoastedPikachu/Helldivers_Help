"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { observer, Observer } from "mobx-react-lite";

import { getIntlArray } from "@/utils/generalFunctions";

import { armorStore } from "@/store/ArmorKitsStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ArmorKit from "@/entities/armorKit/ArmorKit";

const TheArmorContent = observer(() => {
  const t = useTranslations("ArmorPage");
  return (
    <Observer>
      {() => (
        <main>
          <ThePageTitle
            title={t("pageTitle")}
            additionalTitle={t("pageAdditionalTitle")}
          />

          <PageDescription description={t("pageDescription")} />

          <EntitySection
            title={getIntlArray(t("sectionTitles"))[0]}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {armorStore.armorKits
              .filter((armor) => armor.typeIndex === 0)
              .map((armorKit) => (
                <ArmorKit
                  key={armorKit.id}
                  id={armorKit.id}
                  imagePath={armorKit.imagePath}
                  devName={armorKit.devName}
                  bonus={armorKit.bonus}
                />
              ))}
          </EntitySection>

          <EntitySection
            title={getIntlArray(t("sectionTitles"))[1]}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {armorStore.armorKits
              .filter((armor) => armor.typeIndex === 1)
              .map((armorKit) => (
                <ArmorKit
                  key={armorKit.id}
                  id={armorKit.id}
                  imagePath={armorKit.imagePath}
                  devName={armorKit.devName}
                  bonus={armorKit.bonus}
                />
              ))}
          </EntitySection>

          <EntitySection
            title={getIntlArray(t("sectionTitles"))[2]}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {armorStore.armorKits
              .filter((armor) => armor.typeIndex === 2)
              .map((armorKit) => (
                <ArmorKit
                  key={armorKit.id}
                  id={armorKit.id}
                  imagePath={armorKit.imagePath}
                  devName={armorKit.devName}
                  bonus={armorKit.bonus}
                />
              ))}
          </EntitySection>
        </main>
      )}
    </Observer>
  );
});

export default TheArmorContent;
