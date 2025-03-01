import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWarbondsContent from "@/widgets/pageContents/TheWarbondsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("WarbondsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheWarbondsContent />
    </ThePageContent>
  );
};

export default Page;
