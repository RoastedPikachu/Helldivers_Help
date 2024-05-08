import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheStratagemsTrainingContent from "@/widgets/pageContents/TheStratagemsTrainingContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Тренировка стратагем",
  description: "",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheStratagemsTrainingContent />
    </ThePageContent>
  );
};

export default Page;
