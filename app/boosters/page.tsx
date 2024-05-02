"use client";
import React from "react";

import { boostersStore } from "@/store/BoostersStore";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";
import EntitySection from "@/widgets/EntitySection";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Booster from "@/entities/booster/Booster";

const Page = () => {
  return (
    <>
      <TopPageBlock />

      <TheScrollToUpButton />

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

        <EntitySection
          title={"БОЕВОЙ ПРОПУСК «АДСКИЕ ДЕСАНТНИКИ, В БОЙ!»"}
          gridStyles={"grid-cols-2"}
        >
          {boostersStore.boosters.helldiversMobilize.map((booster) => (
            <Booster
              key={booster.id}
              iconPath={booster.iconPath}
              title={booster.title}
              effect={booster.effect}
              price={booster.price}
            />
          ))}
        </EntitySection>

        <EntitySection
          title={"БОЕВОЙ ПРОПУСК «ЗАКАЛЕННЫЕ ВЕТЕРАНЫ»"}
          gridStyles={"grid-cols-2"}
        >
          {boostersStore.boosters.steeledVeterans.map((booster) => (
            <Booster
              key={booster.id}
              iconPath={booster.iconPath}
              title={booster.title}
              effect={booster.effect}
              price={booster.price}
            />
          ))}
        </EntitySection>

        <EntitySection
          title={"БОЕВОЙ ПРОПУСК «НА ОСТРИЕ»"}
          gridStyles={"grid-cols-2"}
        >
          {boostersStore.boosters.cuttingEdge.map((booster) => (
            <Booster
              key={booster.id}
              iconPath={booster.iconPath}
              title={booster.title}
              effect={booster.effect}
              price={booster.price}
            />
          ))}
        </EntitySection>

        <EntitySection
          title={"БОЕВОЙ ПРОПУСК «ДЕМОКРАТИЧЕСКИЙ ПОДРЫВ»"}
          gridStyles={"grid-cols-2"}
        >
          {boostersStore.boosters.democraticDetonation.map((booster) => (
            <Booster
              key={booster.id}
              iconPath={booster.iconPath}
              title={booster.title}
              effect={booster.effect}
              price={booster.price}
            />
          ))}
        </EntitySection>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
