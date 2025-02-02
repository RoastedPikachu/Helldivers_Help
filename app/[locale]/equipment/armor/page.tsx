import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheArmorContent from "@/widgets/pageContents/TheArmorContent";

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
      <TheArmorContent />
    </ThePageContent>
  );
};

export default Page;
