import React from "react";

import { getTranslations } from "next-intl/server";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { armorKits } from "@/data/armor";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificArmorContent from "@/widgets/pageContents/TheSpecificArmorContent";

export function generateStaticParams() {
  return armorKits.map((armor) => ({ armorName: toSlug(armor.devName) }));
}

export async function generateMetadata({ params: { locale, armorName } }: any) {
  const t = await getTranslations("armor");

  return {
    title: `HELLDIVERS 2: ${
      getIntlArray(t("names"))[
        armorKits.find(
          (armor) =>
            armor.devName.toLowerCase() === fromSlug(armorName as string),
        )!.id - 1
      ]
    }`,
    description: `HELLDIVERS 2: ${
      getIntlArray(t("descriptions"))[
        armorKits.find(
          (armor) =>
            armor.devName.toLowerCase() === fromSlug(armorName as string),
        )!.id - 1
      ]
    }`,
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificArmorContent />
    </ThePageContent>
  );
};

export default Page;
