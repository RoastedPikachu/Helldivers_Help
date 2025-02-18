"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { armorKits } from "@/data/armor";

import Link from "next/link";

import ArmorInfoSection from "@/widgets/armor/armorInfoSection/ArmorInfoSection";
import { capes } from "@/data/capes";

const TheSpecificArmorContent = () => {
  const params = useParams();

  const t = useTranslations("armor");

  const [currentArmor, setCurrentArmor] = useState({} as any);

  const getPreviousArmorLink = () => {
    if (Object.entries(currentArmor).length) {
      const armorArr = armorKits.filter(
        (armor) => armor.typeIndex === currentArmor.typeIndex,
      );

      let targetIndex: number;

      if (armorArr.indexOf(currentArmor) - 1 < 0) {
        targetIndex = armorArr.length - 1;
      } else {
        targetIndex = armorArr.indexOf(currentArmor) - 1;
      }

      return armorArr.find((armor, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getNextArmorLink = () => {
    if (Object.entries(currentArmor).length) {
      const armorArr = armorKits.filter(
        (armor) => armor.typeIndex === currentArmor.typeIndex,
      );

      let targetIndex: number;

      if (armorArr.indexOf(currentArmor) + 1 === armorArr.length) {
        targetIndex = 0;
      } else {
        targetIndex = armorArr.indexOf(currentArmor) + 1;
      }

      return armorArr.find((armor, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getPreviousArmorName = () => {
    if (Object.entries(currentArmor).length) {
      const armorArr = armorKits.filter(
        (armor) => armor.typeIndex === currentArmor.typeIndex,
      );

      let targetIndex: number;

      if (armorArr.indexOf(currentArmor) - 1 < 0) {
        targetIndex = armorArr.length - 1;
      } else {
        targetIndex = armorArr.indexOf(currentArmor) - 1;
      }

      return getIntlArray(t("names" as never))[
        armorArr.find((armor, index) => index === targetIndex)!.id - 1
      ];
    }

    return "";
  };

  const getNextArmorName = () => {
    if (Object.entries(currentArmor).length) {
      const armorArr = armorKits.filter(
        (armor) => armor.typeIndex === currentArmor.typeIndex,
      );

      let targetIndex: number;

      if (armorArr.indexOf(currentArmor) + 1 === armorArr.length) {
        targetIndex = 0;
      } else {
        targetIndex = armorArr.indexOf(currentArmor) + 1;
      }

      return getIntlArray(t("names" as never))[
        armorArr.find((armor, index) => index === targetIndex)!.id - 1
      ];
    }

    return "";
  };

  useEffect(() => {
    setCurrentArmor(
      armorKits.find(
        (armor) =>
          armor.devName.toLowerCase() === fromSlug(params.armorName as string),
      ),
    );
  }, []);
  return (
    <main className="relative h-auto mainWithBreadcrumb">
      <section className="flex mlarge:block items-start gap-x-[120px]">
        <div className="w-full h-[calc((100vw/0.53)/2)] border-2 border-theme rounded-[12.5px] overflow-hidden mobile">
          <img
            src={currentArmor ? currentArmor.imagePath : ""}
            alt={
              getIntlArray(t("names"))[currentArmor ? currentArmor.id - 1 : 0]
            }
            className="w-full h-[calc((100vw-10%)/0.53)]"
          />
        </div>

        <ArmorInfoSection currentArmor={currentArmor} />

        <div className="w-[360px] h-[620px] border-2 border-theme rounded-[12.5px] overflow-hidden desktop">
          <img
            src={currentArmor ? currentArmor.imagePath : ""}
            alt={
              getIntlArray(t("names"))[currentArmor ? currentArmor.id - 1 : 0]
            }
            className="w-full h-full"
          />
        </div>
      </section>

      <div className="col-span-3 flex justify-between items-center mt-[50px] mlarge:mt-[30px] h-[55px]">
        <Link
          href={`/equipment/armor/${toSlug(getPreviousArmorLink())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[47.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px]"
          />

          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.825rem] font-primary font-semibold ml-[10px] mlarge:ml-[5px] mlarge:text-right">
            {getPreviousArmorName()}
          </p>
        </Link>

        <Link
          href={`/equipment/armor/${toSlug(getNextArmorLink())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[47.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.825rem] font-primary font-semibold mr-[10px] mlarge:mr-[5px] mlarge:text-left">
            {getNextArmorName()}
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

export default TheSpecificArmorContent;
