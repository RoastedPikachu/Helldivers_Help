import React from "react";

import { toSlug } from "@/utils/generalFunctions";

import { weapons } from "@/data/weapons";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheSpecificWeaponContent from "@/widgets/pageContents/TheSpecificWeaponContent";

export function generateStaticParams() {
  return weapons.map((weapon) => ({ weaponName: toSlug(weapon.devName) }));
}

const Page = () => {
  return (
    <ThePageContent>
      <TheSpecificWeaponContent />
    </ThePageContent>
  );
};

export default Page;
