import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheStratagemsTrainingContent from "@/widgets/pageContents/stratagemsTrainingContent/TheStratagemsTrainingContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Тренировка стратагем",
  description:
    "Улучшайте свой навык быстрого ввода стратагем в постоянных тренировках, чтобы как можно эффективнее продвигать управляемую демократию в галактике и стремительнее убивать ненавистных врагов Супер-Земли.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheStratagemsTrainingContent />
    </ThePageContent>
  );
};

export default Page;
