"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import Link from "next/link";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

const TheEnemiesContent = () => {
  const t = useTranslations("EnemiesPage");
  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <section className="relative grid gap-x-[20px] grid-cols-3 mt-[30px]">
        <Link href={"/enemies/terminids"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EnemyBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] font-primary font-bold">
              {getIntlArray(t("links"))[0]}
            </p>

            <img
              src={"/static/TerminidsIcon.svg"}
              alt=""
              className="w-[52px] h-[52px]"
            />
          </div>
        </Link>

        <Link href={"/enemies/automatons"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EnemyBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] font-primary font-bold">
              {getIntlArray(t("links"))[1]}
            </p>

            <img
              src={"/static/AutomatonsIcon.svg"}
              alt=""
              className="w-[52px] h-[52px]"
            />
          </div>
        </Link>

        <Link href={"/enemies/illuminates"}>
          <div className="relative flex justify-between items-center py-[10px] px-[20px] w-auto h-auto bg-[url('/static/EnemyBackground.png')] bg-cover border-2 border-theme rounded-[10px] duration-300 ease-in-out hover:brightness-[1.15]">
            <p className="mt-[-5px] text-white text-[2rem] font-primary font-bold">
              {getIntlArray(t("links"))[2]}
            </p>

            <img
              src={"/static/IlluminatesIcon.svg"}
              alt=""
              className="w-[52px] h-[52px]"
            />
          </div>
        </Link>
      </section>
    </main>
  );
};

export default TheEnemiesContent;
