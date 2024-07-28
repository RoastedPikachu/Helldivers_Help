import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheProgressionContent from "@/widgets/pageContents/TheProgressionContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Прогрессия. Звания, уровни и титулы",
  description:
    "Когда вы отправляетесь в битву, помните, что ваше мужество и преданность будут отмечены. Благодаря вашему усердию и верности делу Супер-Земли, вы получите повышение и почетные звания за ваши героические подвиги в продвижении управляемой демократии.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheProgressionContent />
    </ThePageContent>
  );
};

export default Page;
