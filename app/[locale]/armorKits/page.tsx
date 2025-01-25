import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheArmorKitsContent from "@/widgets/pageContents/TheArmorKitsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("ArmorPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheArmorKitsContent />
    </ThePageContent>
  );
};

export default Page;
