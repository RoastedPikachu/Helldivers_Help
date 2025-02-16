"use client";
import React, { useState, useEffect } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { terminids } from "@/data/enemies/terminids";
import { automatons } from "@/data/enemies/automatons";
import { illuminates } from "@/data/enemies/illuminates";

import Link from "next/link";

import EnemyInfoSection from "@/widgets/enemy/enemyInfoSection/EnemyInfoSection";

import "./enemyContent/TheEnemyContent.css";

const TheSpecificEnemyContent = () => {
  const params = useParams();

  const t = useTranslations(params.fractionName);

  const [currentEnemy, setCurrentEnemy] = useState({} as any);

  const getCorrectEnemyArray = () => {
    switch (params.fractionName) {
      case "terminids":
        return terminids;
      case "automatons":
        return automatons;
      case "illuminates":
        return illuminates;
    }
  };

  const getEnemyBackground = () => {
    switch (params.fractionName) {
      case "terminids":
        return "bg-[url('/static/terminids/TerminidsBackground.webp')]";
      case "automatons":
        return "bg-[url('/static/automatons/AutomatonsBackground.webp')]";
      case "illuminates":
        return "bg-[url('/static/illuminates/IlluminatesBackground.webp')]";
    }
  };

  const getPreviousEnemyLink = () => {
    if (Object.entries(currentEnemy).length) {
      const enemyArr = getCorrectEnemyArray()!.filter(
        (enemy) => enemy.typeIndex === currentEnemy.typeIndex,
      );

      let targetIndex: number;

      if (enemyArr.indexOf(currentEnemy) - 1 < 0) {
        targetIndex = enemyArr.length - 1;
      } else {
        targetIndex = enemyArr.indexOf(currentEnemy) - 1;
      }

      return enemyArr.find((enemy, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getNextEnemyLink = () => {
    if (Object.entries(currentEnemy).length) {
      const enemyArr = getCorrectEnemyArray()!.filter(
        (enemy) => enemy.typeIndex === currentEnemy.typeIndex,
      );

      let targetIndex: number;

      if (enemyArr.indexOf(currentEnemy) + 1 === enemyArr.length) {
        targetIndex = 0;
      } else {
        targetIndex = enemyArr.indexOf(currentEnemy) + 1;
      }

      return enemyArr.find((enemy, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getPreviousEnemyName = () => {
    if (Object.entries(currentEnemy).length) {
      const enemyArr = getCorrectEnemyArray()!.filter(
        (enemy) => enemy.typeIndex === currentEnemy.typeIndex,
      );

      let targetIndex: number;

      if (enemyArr.indexOf(currentEnemy) - 1 < 0) {
        targetIndex = enemyArr.length - 1;
      } else {
        targetIndex = enemyArr.indexOf(currentEnemy) - 1;
      }

      return getIntlArray(t("names" as never))[
        enemyArr.find((enemy, index) => index === targetIndex)!.id - 1
      ];
    }

    return "";
  };

  const getNextEnemyName = () => {
    if (Object.entries(currentEnemy).length) {
      const enemyArr = getCorrectEnemyArray()!.filter(
        (enemy) => enemy.typeIndex === currentEnemy.typeIndex,
      );

      let targetIndex: number;

      if (enemyArr.indexOf(currentEnemy) + 1 === enemyArr.length) {
        targetIndex = 0;
      } else {
        targetIndex = enemyArr.indexOf(currentEnemy) + 1;
      }

      return getIntlArray(t("names" as never))[
        enemyArr.find((enemy, index) => index === targetIndex)!.id - 1
      ];
    }

    return "";
  };

  useEffect(() => {
    setCurrentEnemy(
      getCorrectEnemyArray()!.find(
        (enemy) =>
          enemy.devName.toLowerCase() === fromSlug(params.enemyName as string),
      ),
    );
  }, []);
  return (
    <main className="relative h-auto">
      <section className="flex mlarge:block items-start gap-x-[120px]">
        <div className="w-[80%] h-[300px] border-2 border-theme rounded-[12.5px] overflow-hidden mobile">
          <img
            src={currentEnemy ? currentEnemy.imagePath : ""}
            alt={
              getIntlArray(t("names" as never))[
                currentEnemy ? currentEnemy.id - 1 : 0
              ]
            }
            className="w-full h-full"
          />
        </div>

        <EnemyInfoSection currentEnemy={currentEnemy} />

        <div
          className={`w-[400px] h-[380px] ${getEnemyBackground()} bg-cover border-2 border-theme rounded-[12.5px] overflow-hidden desktop`}
        >
          <img
            src={currentEnemy ? currentEnemy.imagePath : ""}
            alt={
              getIntlArray(t("names" as never))[
                currentEnemy ? currentEnemy.id - 1 : 0
              ]
            }
            className="w-full h-full"
          />
        </div>
      </section>

      <div className="col-span-3 flex justify-between items-center mt-[50px] mlarge:mt-[30px] h-[55px]">
        <Link
          href={`/enemies/${params.fractionName}/${toSlug(getPreviousEnemyLink())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px]"
          />

          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold ml-[10px] mlarge:ml-[5px] mlarge:text-right">
            {getPreviousEnemyName()}
          </p>
        </Link>

        <Link
          href={`/enemies/${params.fractionName}/${toSlug(getNextEnemyLink())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold mr-[10px] mlarge:mr-[5px] mlarge:text-left">
            {getNextEnemyName()}
          </p>

          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] rotate-180"
          />
        </Link>
      </div>
    </main>
  );
};

export default TheSpecificEnemyContent;
