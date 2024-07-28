import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheCodeContent from "@/widgets/pageContents/TheCodeContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Кодекс",
  description:
    "Для поощрения каждого десантника руководство Супер-Земли разработало список достижений, за выполнение которых вы будете получать почет и уважение от каждого жителя свободной и демократической галактики.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheCodeContent />
    </ThePageContent>
  );
};

export default Page;
