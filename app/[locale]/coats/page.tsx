import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheCoatsContent from "@/widgets/pageContents/TheCoatsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Плащи",
  description:
    "Плащ является украшением Адского Десантника. Это отличительный знак того, что все они являются героями, а герои не могут не носить плащи. Это такой же важный атрибут для любого Адского Десантника, как шляпа для каждого уважающего себя ковбоя. Поэтому носите плащ с честью и достоинством, чтобы не опозорить своих товарищей, демократию и Супер-Землю.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheCoatsContent />
    </ThePageContent>
  );
};

export default Page;
