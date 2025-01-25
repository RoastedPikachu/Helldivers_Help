import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWeaponryContent from "@/widgets/pageContents/TheWeaponryContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("WeaponryPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheWeaponryContent />
    </ThePageContent>
  );
};

export default Page;
