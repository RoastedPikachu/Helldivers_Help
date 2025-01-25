import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheProgressionContent from "@/widgets/pageContents/TheProgressionContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("ProgressionPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheProgressionContent />
    </ThePageContent>
  );
};

export default Page;
