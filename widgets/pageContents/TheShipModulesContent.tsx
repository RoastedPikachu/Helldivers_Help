import React from "react";

import { shipModulesStore } from "@/store/ShipModulesStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ShipModule from "@/entities/shipModule/ShipModule";

const TheShipModulesContent = () => {
  return (
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

      <EntitySection gridStyles={"grid-cols-1 mt-[50px] mlarge:mt-[30px]"}>
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
  );
};

export default TheShipModulesContent;
