import React from "react";

import { toSlug } from "@/utils/generalFunctions";

import { capes } from "@/data/capes";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificCapeContent from "@/widgets/pageContents/TheSpecificCapeContent";

export function generateStaticParams() {
  return capes.map((cape) => ({ capeName: toSlug(cape.devName) }));
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificCapeContent />
    </ThePageContent>
  );
};

export default Page;
