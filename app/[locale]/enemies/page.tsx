import React from "react";

import { getTranslations } from "next-intl/server";

import ThePageContent from "@/widgets/pageContents/ThePageContent";

import TheBreadcrumbs from "@/shared/breadcrumbs/TheBreadcrumbs";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("EnemiesPage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page = () => {
  return (
    <ThePageContent>
      <TheBreadcrumbs />
    </ThePageContent>
  );
};

export default Page;
