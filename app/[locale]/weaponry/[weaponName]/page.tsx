import React from "react";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { weapons } from "@/data/weapons";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificWeaponContent from "@/widgets/pageContents/TheSpecificWeaponContent";
import { getTranslations } from "next-intl/server";
import { armorKits } from "@/data/armor";

export function generateStaticParams() {
  return weapons.map((weapon) => ({ weaponName: toSlug(weapon.devName) }));
}

export async function generateMetadata({
  params: { locale, weaponName },
}: any) {
  const t = await getTranslations("weapons");

  return {
    title: `HELLDIVERS 2: ${
      getIntlArray(t("names"))[
        weapons.find(
          (weapon) =>
            weapon.devName.toLowerCase() === fromSlug(weaponName as string),
        )!.id - 1
      ]
    }`,
    description: `HELLDIVERS 2: ${
      getIntlArray(t("descriptions"))[
        weapons.find(
          (weapon) =>
            weapon.devName.toLowerCase() === fromSlug(weaponName as string),
        )!.id - 1
      ]
    }`,
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificWeaponContent />
    </ThePageContent>
  );
};

export default Page;
