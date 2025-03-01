import React from "react";

import { getTranslations } from "next-intl/server";

import { fromSlug, getIntlArray } from "@/utils/generalFunctions";

import { warbonds } from "@/data/warbonds";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWarbondContent from "@/widgets/pageContents/warbondContent/TheWarbondContent";

export function generateStaticParams() {
  return warbonds.map((warbond) => ({ warbondName: warbond.title }));
}

export async function generateMetadata({
  params: { locale, warbondName },
}: any) {
  const t = await getTranslations("data");

  return {
    title: `HELLDIVERS 2: ${
      getIntlArray(t("warbonds"))[
        warbonds.find(
          (warbond) => warbond.title === fromSlug(warbondName as string),
        )!.id - 1
      ]
    }`,
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheWarbondContent />
    </ThePageContent>
  );
};

export default Page;
