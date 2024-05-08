import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheEnemyFractionContent from "@/widgets/pageContents/TheEnemyFractionContent";

export function generateStaticParams() {
  return [{ fractionName: "terminids" }, { fractionName: "automatons" }];
}

export const metadata: Metadata = {
  title: `HELLDIVERS 2: Фракции`,
  description: "",
};

const Page: React.FC<{ params: any }> = ({ params }) => {
  return (
    <ThePageContent>
      <TheEnemyFractionContent searchbarParams={params} />
    </ThePageContent>
  );
};

export default Page;
