import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheNewsContent from "@/widgets/pageContents/newsContent/TheNewsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("NewsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheNewsContent />
    </ThePageContent>
  );
};

export default Page;
