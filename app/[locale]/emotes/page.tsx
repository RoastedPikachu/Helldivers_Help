import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheEmotesContent from "@/widgets/pageContents/TheEmotesContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("EmotesPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheEmotesContent />
    </ThePageContent>
  );
};

export default Page;
