import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheEquipmentContent from "@/widgets/pageContents/TheEquipmentContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("EquipmentPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheEquipmentContent />
    </ThePageContent>
  );
};

export default Page;
