import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheAchievementsContent from "@/widgets/pageContents/TheAchievementsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("AchievementsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheAchievementsContent />
    </ThePageContent>
  );
};

export default Page;
