import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheBoostersContent from "@/widgets/pageContents/TheBoostersContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("BoostersPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheBoostersContent />
    </ThePageContent>
  );
};

export default Page;
