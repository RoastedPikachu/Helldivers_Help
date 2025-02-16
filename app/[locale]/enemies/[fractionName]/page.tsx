import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheEnemyFractionContent from "@/widgets/pageContents/TheEnemyFractionContent";

export function generateStaticParams() {
  return [
    { fractionName: "terminids" },
    { fractionName: "automatons" },
    { fractionName: "illuminates" },
  ];
}

export async function generateMetadata({
  params: { locale, fractionName },
}: any) {
  const t = await getTranslations(fractionName);

  return {
    title: `HELLDIVERS 2: ${t("metadataTitle")}`,
    description: `HELLDIVERS 2: ${t("metadataDescription")}`,
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheEnemyFractionContent />
    </ThePageContent>
  );
};

export default Page;
