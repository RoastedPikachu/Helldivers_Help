import React from "react";

import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { pages } from "@/data/pages/pages";

import TheTopPageBlock from "@/widgets/topPageBlock/TheTopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ManualPage from "@/entities/manualPage/ManualPage";

import "@/styles/mainPage.css";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations("HomePage");

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const Page: React.FC<{ params: { locale: string } }> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <>
      <TheTopPageBlock />

      <TheScrollToUpButton />

      <main>
        <div className="banner">
          <h1 className="banner-title">
            HELLDIVERS
            <b className="banner-title-bold">.HELP</b>
          </h1>

          <p className="banner-description">{t("imageTitleDescription")}</p>
        </div>

        <section className="pagesSection">
          {pages.map((page) => (
            <ManualPage
              key={page.id}
              id={page.id}
              link={page.link}
              image={page.image}
            />
          ))}
        </section>

        <section className="reccomendationsSection">
          <h2 className="reccomendationsSection-title">
            {t("reccomendationTitle")}
          </h2>

          <a
            href="https://t.me/%2BH7cyOUeZWrcwZmY6"
            className="reccomendationsSection-banner"
          >
            <img src="/static/Furrinami.webp" alt="" />
          </a>
        </section>
      </main>

      <TheFooter />

      {/*<div className="flex justify-center items-center gap-x-[30px] w-full h-auto">*/}
      {/*  /!*<Link href="" className="w-[300px] h-[430px]">*!/*/}
      {/*  /!*  <img*!/*/}
      {/*  /!*    src="/static/EnlistBanner.webp"*!/*/}
      {/*  /!*    alt="Ссылка: Как нам помочь?"*!/*/}
      {/*  /!*    className="w-full h-full border-2 border-[--color-theme] rounded-[10px] object-cover cursor-pointer"*!/*/}
      {/*  /!*  />*!/*/}
      {/*  /!*</Link>*!/*/}

      {/*  <div className="w-[calc(100%-640px)] h-[430px]">*/}
      {/*    <h2 className="text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] font-primary font-bold text-center">*/}
      {/*      {t("pageTitle").toUpperCase()}{" "}*/}
      {/*      <b className="text-[--color-theme] font-bold">*/}
      {/*        {t("pageAdditionalTitle").toUpperCase()}*/}
      {/*      </b>*/}
      {/*    </h2>*/}

      {/*    <p className="mt-[20px] mlarge:mt-[10px] w-full mlarge:w-full text-[#ffffff] text-[1.25rem] mlarge:text-[1.125rem] text-justify font-primary font-medium brightness-75">*/}
      {/*      {t("pageDescription")}*/}
      {/*    </p>*/}
      {/*  </div>*/}

      {/*  /!*  <div className="w-[300px] h-[430px] border-x-2 border-[--color-theme] rounded-t-[10px]">*!/*/}
      {/*  /!*    <div className="relative flex justify-center items-center mb-[15px] w-full h-[50px] bg-[--color-theme] border-y-2 border-[--color-theme] rounded-t-[7.5px]">*!/*/}
      {/*  /!*      <h3 className="px-[10px] text-[#111111] text-[1.375rem] text-center font-primary font-semibold">*!/*/}
      {/*  /!*        ОБНОВЛЕНИЯ*!/*/}
      {/*  /!*      </h3>*!/*/}
      {/*  /!*    </div>*!/*/}

      {/*  /!*    <h4 className="text-[--color-white] text-[1.25rem] text-center font-primary font-semibold">*!/*/}
      {/*  /!*      ПАТЧ 01.001.201*!/*/}
      {/*  /!*    </h4>*!/*/}
      {/*  /!*  </div>*!/*/}
      {/*</div>*/}
    </>
  );
};

export default Page;
