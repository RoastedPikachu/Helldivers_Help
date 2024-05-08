import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheAchievementsContent from "@/widgets/pageContents/TheAchievementsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Достижения",
  description:
    "Каждый адский десантник, перед тем, как приступить к обороне управляемой демократии, должен ознакомиться со свободом правил, составленным самым гениальным и демократическим руководством Супер-Земли.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheAchievementsContent />
    </ThePageContent>
  );
};

export default Page;
