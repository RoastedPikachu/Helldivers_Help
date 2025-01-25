import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheShipModulesContent from "@/widgets/pageContents/TheShipModulesContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("ShipModulesPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheShipModulesContent />
    </ThePageContent>
  );
};

export default Page;
