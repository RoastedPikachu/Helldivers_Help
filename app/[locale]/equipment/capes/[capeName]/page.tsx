import React from "react";

import { getTranslations } from "next-intl/server";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { capes } from "@/data/capes";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificCapeContent from "@/widgets/pageContents/TheSpecificCapeContent";

export function generateStaticParams() {
  return capes.map((cape) => ({ capeName: toSlug(cape.devName) }));
}

export async function generateMetadata({ params: { locale, capeName } }: any) {
  const t = await getTranslations("capes");

  return {
    title: `HELLDIVERS 2: ${
      getIntlArray(t("names"))[
        capes.find(
          (cape) => cape.devName.toLowerCase() === fromSlug(capeName as string),
        )!.id - 1
      ]
    }`,
    description: `HELLDIVERS 2: ${
      getIntlArray(t("descriptions"))[
        capes.find(
          (cape) => cape.devName.toLowerCase() === fromSlug(capeName as string),
        )!.id - 1
      ]
    }`,
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificCapeContent />
    </ThePageContent>
  );
};

export default Page;
