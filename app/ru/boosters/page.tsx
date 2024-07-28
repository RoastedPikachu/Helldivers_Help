import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheBoostersContent from "@/widgets/pageContents/TheBoostersContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Усилители",
  description:
    "Чтобы упростить продвижение демократии и свободы в галактике руководство Супер-Земли с помощью ученых смогло разработать усилители.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheBoostersContent />
    </ThePageContent>
  );
};

export default Page;
