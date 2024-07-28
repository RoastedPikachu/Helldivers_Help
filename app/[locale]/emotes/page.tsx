import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheEmotesContent from "@/widgets/pageContents/TheEmotesContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Эмоции и победные позы",
  description:
    "Во время боев любой Адский Десантник накапливает определенную долю впечатлений или переживаний. Их можно легко выплеснуть в эмоциях! А победу и успешное возвращение отпраздновать красивой победной позой. Покажите всем свои мускулы или обнимите любимого товарища, главное сохраняйте рассудок для дальнейшего продолжения распространения демократии по всей галактике.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheEmotesContent />
    </ThePageContent>
  );
};

export default Page;
