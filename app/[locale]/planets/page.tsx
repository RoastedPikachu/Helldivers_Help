import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import ThePlanetsContent from "@/widgets/pageContents/ThePlanetsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("PlanetsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <ThePlanetsContent />
    </ThePageContent>
  );
};

export default Page;
