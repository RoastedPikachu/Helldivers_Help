"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { armorStore } from "@/store/ArmorKitsStore";

import Link from "next/link";

import ArmorInfoSection from "@/widgets/armor/armorInfoSection/ArmorInfoSection";

const TheSpecificArmorContent = () => {
  const params = useParams();

  const t = useTranslations("armor");

  const [currentArmor, setCurrentArmor] = useState({} as any);

  const getPreviousArmorName = () => {
    if (Object.entries(currentArmor).length) {
      const armorArr = armorStore.armorKits.filter(
        (armor) => armor.typeIndex === currentArmor.typeIndex,
      );

      let targetId: number;

      if (currentArmor.id - 1 < 1) {
        targetId = armorArr.length;
      } else {
        targetId = currentArmor.id - 1;
      }

      return armorArr.find((armor) => armor.id === targetId)!.devName;
    }

    return "";
  };

  const getNextArmorName = () => {
    if (Object.entries(currentArmor).length) {
      const armorArr = armorStore.armorKits.filter(
        (armor) => armor.typeIndex === currentArmor.typeIndex,
      );

      let targetId: number;

      if (currentArmor.id + 1 > armorArr.length) {
        targetId = 1;
      } else {
        targetId = currentArmor.id + 1;
      }

      return armorArr.find((armor) => armor.id === targetId)!.devName;
    }

    return "";
  };

  useEffect(() => {
    setCurrentArmor(
      armorStore.armorKits.find(
        (armor) =>
          armor.devName.toLowerCase() === fromSlug(params.armorName as string),
      ),
    );
  }, []);
  return (
    <main className="relative h-auto">
      <section className="flex mlarge:block items-start gap-x-[120px]">
        <div className="w-[80%] h-[300px] border-2 border-theme rounded-[12.5px] overflow-hidden mobile">
          <img
            src={currentArmor ? currentArmor.imagePath : ""}
            alt={
              getIntlArray(t("names"))[currentArmor ? currentArmor.id - 1 : 0]
            }
            className="w-full h-full"
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
          href={`/equipment/armor/${toSlug(getPreviousArmorName())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px]"
          />

          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold ml-[10px] mlarge:ml-[5px] mlarge:text-right">
            {getPreviousArmorName()}
          </p>
        </Link>

        <Link
          href={`/equipment/armor/${toSlug(getNextArmorName())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold mr-[10px] mlarge:mr-[5px] mlarge:text-left">
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
