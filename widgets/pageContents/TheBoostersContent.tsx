"use client";
import React from "react";

import { boostersStore } from "@/store/BoostersStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Booster from "@/entities/booster/Booster";

const TheBoostersContent = () => {
  return (
    <main>
      <ThePageTitle title={"усилители"} additionalTitle={""} />

      <PageDescription
        description={
          "Чтобы упростить продвижение демократии и свободы в галактике руководство Супер-Земли с помощью ученых смогло разработать усилители."
        }
      />

      <PageDescription
        description={
          "Усилители - мощное средство, которое дает различные бонусы во время выполнения задания всей вашей команде Адских Десантников. Выбирайте их мудро и советуйтесь со своими боевыми товарищами, чтобы у противников демократии не осталось и шанса!"
        }
      />

      <EntitySection title={""} gridStyles={"grid-cols-2 mlarge:grid-cols-1"}>
        {boostersStore.boosters.map((booster) => (
          <Booster
            key={booster.id}
            iconPath={booster.iconPath}
            title={booster.title}
            effect={booster.effect}
            price={booster.price}
            obtainingTypeIcon={booster.obtainingTypeIcon}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheBoostersContent;
