import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheStratagemsContent from "@/widgets/pageContents/TheStratagemsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Стратагемы",
  description:
    "Каждый Адский Десантник знает, что на безжалостных полях сражений выживание зависит не только от огневой мощи, но и от стратегии, хитрости и разумного использования стратагем. Эти очень полезные в галактической войны «штучки» утверждают наше господство над инопланетной угрозой и отстаивают ценности свободы и управляемой демократии.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheStratagemsContent />
    </ThePageContent>
  );
};

export default Page;
