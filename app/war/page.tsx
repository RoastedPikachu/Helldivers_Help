import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWarContent from "@/widgets/pageContents/TheWarContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Статус Войны. Карта, приказы и активные сражения",
  description: "",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheWarContent />
    </ThePageContent>
  );
};

export default Page;
