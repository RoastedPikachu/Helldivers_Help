import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheStratagemsContent from "@/widgets/pageContents/TheStratagemsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("StratagemsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheStratagemsContent />
    </ThePageContent>
  );
};

export default Page;
