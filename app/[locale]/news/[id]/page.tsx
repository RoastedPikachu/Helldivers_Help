import React from "react";

import { news } from "@/data/news";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificNewsContent from "@/widgets/pageContents/TheSpecificNewsContent";

export function generateStaticParams() {
  return news.map((newsItem) => ({ id: String(newsItem.id) }));
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificNewsContent />
    </ThePageContent>
  );
};

export default Page;
