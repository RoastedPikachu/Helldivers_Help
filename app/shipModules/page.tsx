"use client";
import React from "react";

import { shipModulesStore } from "@/store/ShipModulesStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import EntitySection from "@/widgets/EntitySection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ShipModule from "@/entities/shipModule/ShipModule";

import "swiper/css";
import "swiper/css/navigation";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <TheScrollToUpButton />

      <main>
        <ThePageTitle title={"модули"} additionalTitle={"корабля"} />

        <PageDescription
          description={
            "Корабль — ваше единственное безопасное место в галактике, помимо Супер-Земли. Это место из которого вы отправляетесь в миссии и куда возвращаетесь, измученные, уставшие, но довольные своими успехами."
          }
        />

        <PageDescription
          description={
            "Ваш корабль, также как и вы нуждается в улучшениях. Да, каждое из этих улучшений является довольно дорогим удовольствием, но эффекты, которые вы получаете взамен стоят того. Вы можете сделать из своих турелей смертоносные огневые единицы, или же увеличивать частоту вызова атакующих стратагем, поливая врагов демократии градом бомб. Главное помнить, что ваш корабль — такой же боевой товарищ, как и другие Адские Десантники!"
          }
        />

        <EntitySection gridStyles={"grid-cols-1"}>
          {shipModulesStore.shipModules.map((shipModule) => (
            <ShipModule
              key={shipModule.id}
              title={shipModule.title}
              levelImages={shipModule.levelImages}
              improvementTitles={shipModule.improvementTitles}
              improvementDescriptions={shipModule.improvementDescriptions}
              improvementEffects={shipModule.improvementEffects}
              improvementPrices={shipModule.improvementPrices}
              improvementAffectedStratagems={
                shipModule.improvementAffectedStratagems
              }
            />
          ))}
        </EntitySection>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
