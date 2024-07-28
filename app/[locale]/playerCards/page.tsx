import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import ThePlayerCardsContent from "@/widgets/pageContents/ThePlayerCardsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Карточки игрока",
  description:
    "Каждый Адский десантник может добавить себе оттенок индивидуальности выбрав себе одну из уникальных карточек игрока. Они будут лучше акцентировать внимание на вашей броне и выделять вас среди ваших боевых товарищей.",
};

const Page = () => {
  return (
    <ThePageContent>
      <ThePlayerCardsContent />
    </ThePageContent>
  );
};

export default Page;
