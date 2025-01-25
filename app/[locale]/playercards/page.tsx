import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import ThePlayerCardsContent from "@/widgets/pageContents/ThePlayerCardsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("PlayerCardsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <ThePlayerCardsContent />
    </ThePageContent>
  );
};

export default Page;
