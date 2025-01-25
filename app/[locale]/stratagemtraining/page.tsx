import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheStratagemsTrainingContent from "@/widgets/pageContents/stratagemsTrainingContent/TheStratagemsTrainingContent";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("StratagemTrainingPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheStratagemsTrainingContent />
    </ThePageContent>
  );
};

export default Page;
