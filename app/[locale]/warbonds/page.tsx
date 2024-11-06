import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWarbondsContent from "@/widgets/pageContents/TheWarbondsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Боевые заслуги",
  description:
    "Вооружение — это ключ к успеху для любого Адского Десантника. От дробовиков до энергетического оружия — все это инструменты, которые помогут вам распространять управляемую демократию в галактике.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheWarbondsContent></TheWarbondsContent>
    </ThePageContent>
  );
};

export default Page;
