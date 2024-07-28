import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheShipModulesContent from "@/widgets/pageContents/TheShipModulesContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Модули корабля",
  description:
    "Корабль — ваше единственное безопасное место в галактике, помимо Супер-Земли. Это место из которого вы отправляетесь в миссии и куда возвращаетесь, измученные, уставшие, но довольные своими успехами. Ваш корабль, также как и вы нуждается в улучшениях. Да, каждое из этих улучшений является довольно дорогим удовольствием, но эффекты, которые вы получаете взамен стоят того. Вы можете сделать из своих турелей смертоносные огневые единицы, или же увеличивать частоту вызова атакующих стратагем, поливая врагов демократии градом бомб. Главное помнить, что ваш корабль — такой же боевой товарищ, как и другие Адские Десантники!",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheShipModulesContent />
    </ThePageContent>
  );
};

export default Page;
