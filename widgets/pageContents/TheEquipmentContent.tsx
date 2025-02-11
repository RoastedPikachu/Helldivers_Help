"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import Link from "next/link";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

const TheEquipmentContent = () => {
  const t = useTranslations("EquipmentPage");

  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <section className="relative grid gap-x-[20px] grid-cols-4 mt-[30px]">
        <Link href={"/equipment/armor"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EquipmentBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] font-primary font-bold">
              {getIntlArray(t("links"))[0]}
            </p>

            <img
              src={"/static/ArmorIcon.svg"}
              alt=""
              className="w-[52px] h-[52px]"
            />
          </div>
        </Link>

        <Link href={"/equipment/boosters"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EquipmentBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] font-primary font-bold">
              {getIntlArray(t("links"))[1]}
            </p>

            <img
              src={"/static/BoosterIcon.png"}
              alt=""
              className="w-[52px] h-[52px]"
            />
          </div>
        </Link>

        <Link href={"/equipment/capes"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EquipmentBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] font-primary font-bold">
              {getIntlArray(t("links"))[2]}
            </p>

            <img
              src={"/static/CapeIcon.svg"}
              alt=""
              className="w-[52px] h-[52px]"
            />
          </div>
        </Link>
      </section>
    </main>
  );
};

export default TheEquipmentContent;
