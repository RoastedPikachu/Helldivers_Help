import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheResourcesContent from "@/widgets/pageContents/TheResourcesContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("ResourcesPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheResourcesContent />
    </ThePageContent>
  );
};

export default Page;
