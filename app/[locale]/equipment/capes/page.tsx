import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheCoatsContent from "@/widgets/pageContents/TheCoatsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("CapesPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheCoatsContent />
    </ThePageContent>
  );
};

export default Page;
