import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import ShipModulesSection from "@/widgets/ShipModulesSection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

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

        <ShipModulesSection />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
