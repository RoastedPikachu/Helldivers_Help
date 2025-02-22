"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import Link from "next/link";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

const TheCustomizationContent = () => {
  const t = useTranslations("CustomizationPage");

  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <section className="relative grid gap-x-[20px] gap-y-[20px] grid-cols-3 mlarge:grid-cols-1 mt-[30px]">
        <Link href={"/customization/playercards"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EquipmentBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] mlarge:text-[1.75rem] mmedium:text-[1.5rem] font-primary font-bold">
              {getIntlArray(t("links"))[0]}
            </p>

            <img
              src={"/static/PlayerCardsIcon.svg"}
              alt=""
              className="w-[52px] mmedium:w-[47px] msmall:w-[42px] h-[52px] mmedium:h-[47px] msmall:h-[42px]"
            />
          </div>
        </Link>
      </section>
    </main>
  );
};

export default TheCustomizationContent;
