import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheWarContent from "@/widgets/pageContents/TheWarContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Статус Войны. Карта, приказы и активные сражения",
  description:
    "Получайте самую последнюю и актуальную информацию об уже идущих сражениях и главном приказе. Также вы можете окинуть своим взглядом всю карту галактики и решить, какая из вражеских фракций сегодня будет удостоина умереть от вашей руки.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheWarContent />
    </ThePageContent>
  );
};

export default Page;
