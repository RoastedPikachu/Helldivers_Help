import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheResourcesContent from "@/widgets/pageContents/TheResourcesContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Ресурсы",
  description:
    "Ресурсы — это топливо для повышения вашей личной эффективности в борьбе за продвижение управляемой демократии, свободы и процветания по всей галактике.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheResourcesContent />
    </ThePageContent>
  );
};

export default Page;
