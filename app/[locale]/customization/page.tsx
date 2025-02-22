import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheCustomizationContent from "@/widgets/pageContents/TheCustomizationContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("CustomizationPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheCustomizationContent />
    </ThePageContent>
  );
};

export default Page;
