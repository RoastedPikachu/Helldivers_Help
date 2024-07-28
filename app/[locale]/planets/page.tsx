import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import ThePlanetsContent from "@/widgets/pageContents/ThePlanetsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Планеты",
  description:
    "Глоссарий планет содержит информацию о мирах, вовлеченных в галактический конфликт. Каждая планета имеет свои особенности, проблемы и стратегическое значение. Изучите уникальные характеристики этих небесных тел, чтобы лучше понять динамику текущей борьбы за свободу, процветание и управляемую демократию.",
};

const Page = () => {
  return (
    <ThePageContent>
      <ThePlanetsContent />
    </ThePageContent>
  );
};

export default Page;
