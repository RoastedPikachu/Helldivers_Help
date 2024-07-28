import React from "react";

import { Metadata } from "next";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheArmorKitsContent from "@/widgets/pageContents/TheArmorKitsContent";

export const metadata: Metadata = {
  title: "HELLDIVERS 2: Броня",
  description:
    "Броня для Адского Десантника в игре Helldivers 2 играет критически важную роль в обеспечении выживаемости и эффективности на поле боя. Она защищает от дальнобойных лазеров автоматонов, от когтей и жвал терминидов, также комплект брони предоставляет определенные бонусы, способствующие выполнению задания.",
};

const Page = () => {
  return (
    <ThePageContent>
      <TheArmorKitsContent />
    </ThePageContent>
  );
};

export default Page;
