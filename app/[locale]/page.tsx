import React from "react";

import Head from "next/head";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { pages } from "@/data/pages/pages";

import TheTopPageBlock from "@/widgets/topPageBlock/TheTopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ManualPage from "@/entities/manualPage/ManualPage";

const Page: React.FC<{ params: { locale: string } }> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <>
      <Head>
        <title>{t("metadataTitle")}</title>

        <meta name="description" content={t("metadataDescription")} />
      </Head>

      <TheTopPageBlock />

      <TheScrollToUpButton />

      <main>
        <div className="relative mb-[40px] mlarge:mb-[30px] mmedium:mb-[20px] py-[20px] mlarge:py-[10px] px-[30px] mlarge:px-[15px] w-full h-[400px] mlarge:h-[300px] mmedium:h-[250px] msmall:h-[200px] bg-[url('/static/HelldiversBackgroundImage.png')] mlarge:bg-[url('/static/HelldiversMobileBackgroundImage.png')] bg-no-repeat bg-cover border-2 border-[--theme-color] rounded-[10px]">
          <h1 className="text-[#ffffff] text-[3rem] mlarge:text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem] font-['Insignia'] font-bold brightness-125">
            HELLDIVERS
            <b className="text-[--theme-color] font-bold">.HELP</b>
          </h1>

          <p className="w-[35%] mlarge:w-[80%] mmedium:w-[90%] text-[#ffffff] text-[2rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-semibold brightness-125">
            {t("imageTitleDescription")}
          </p>
        </div>

        <ThePageTitle
          title={t("pageTitle")}
          additionalTitle={t("pageAdditionalTitle")}
        />

        <PageDescription description={t("pageDescription")} />

        <section className="relative mlarge:hidden grid grid-cols-4 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto z-[20]">
          {pages.map((page) => (
            <ManualPage key={page.id} id={page.id} link={page.link} />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;