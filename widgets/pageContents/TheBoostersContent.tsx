"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { boostersStore } from "@/store/BoostersStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Booster from "@/entities/booster/Booster";
import axios from "axios";

const TheBoostersContent = () => {
  const t = useTranslations("BoostersPage");

  const [boosters, setBoosters] = useState([] as any[]);

  const getBoosters = async () => {
    const result = await axios.get("/api/admin/boosters");

    setBoosters(result.data as unknown as any[]);
  };

  useEffect(() => {
    getBoosters();
  }, []);

  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <EntitySection
        title={""}
        gridStyles={"mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {boosters.length
          ? boosters.map((booster) => (
              <Booster
                key={booster.id}
                id={booster.id}
                iconPath={booster.iconPath}
                price={booster.price}
                ruTitle={booster.ruTitle}
                enTitle={booster.enTitle}
                ruDescription={booster.ruDescription}
                enDescription={booster.enDescription}
              />
            ))
          : boostersStore.boosters.map((booster) => (
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
