"use client";
import React from "react";

import Head from "next/head";

import { useTranslations } from "next-intl";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import ThePlayerCardsContent from "@/widgets/pageContents/ThePlayerCardsContent";

const Page = () => {
  const t = useTranslations("PlayerCardsMetadata");

  return (
    <>
      <Head>
        <title>{t("title")}</title>

        <meta name="description" content={t("description")} />
      </Head>

      <ThePageContent>
        <ThePlayerCardsContent />
      </ThePageContent>
    </>
  );
};

export default Page;
