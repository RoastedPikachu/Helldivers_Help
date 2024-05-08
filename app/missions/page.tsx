import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheMissionsContent from "@/widgets/pageContents/TheMissionsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Миссии",
  description:
    "Миссии — это то, выполнением чего занимается каждый Адский Десантник. Это сама цель их существования, ведь выполнение миссии — помощь людям, дополнительные ресурсы для Супер-Земли и продвижение демократии в галактике.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheMissionsContent />
    </ThePageContent>
  );
};

export default Page;
