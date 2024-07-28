import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWeaponryContent from "@/widgets/pageContents/TheWeaponryContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Вооружение",
  description:
    "Вооружение — это ключ к успеху для любого Адского Десантника. От дробовиков до энергетического оружия — все это инструменты, которые помогут вам распространять управляемую демократию в галактике.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheWeaponryContent />
    </ThePageContent>
  );
};

export default Page;
