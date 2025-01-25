import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheMissionsContent from "@/widgets/pageContents/TheMissionsContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("MissionsPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheMissionsContent />
    </ThePageContent>
  );
};

export default Page;
