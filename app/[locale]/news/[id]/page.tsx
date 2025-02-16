import React from "react";

import { getTranslations } from "next-intl/server";

import { getIntlArray } from "@/utils/generalFunctions";

import { news } from "@/data/news";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificNewsContent from "@/widgets/pageContents/TheSpecificNewsContent";

export function generateStaticParams() {
  return news.map((newsItem) => ({ id: String(newsItem.id) }));
}

export async function generateMetadata({ params: { locale, id } }: any) {
  const t = await getTranslations("news");

  return {
    title: `HELLDIVERS 2: ${getIntlArray(t("titles"))[Number(id) - 1]}`,
    description: `HELLDIVERS 2: ${getIntlArray(t("texts"))[Number(id) - 1]}`,
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificNewsContent />
    </ThePageContent>
  );
};

export default Page;
