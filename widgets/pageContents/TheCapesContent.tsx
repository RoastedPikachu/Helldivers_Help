"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { capes } from "@/data/capes";

import EntitySection from "@/widgets/EntitySection";

import Cape from "@/entities/cape/Cape";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

const TheCoatsContent = () => {
  const t = useTranslations("CapesPage");

  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <EntitySection
        title={""}
        gridStyles={"grid-cols-5 mlarge:grid-cols-2 mt-[40px]"}
      >
        {capes.map((coat) => (
          <Cape
            key={coat.id}
            id={coat.id}
            imagePath={coat.imagePath}
            name={coat.name}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheCoatsContent;
