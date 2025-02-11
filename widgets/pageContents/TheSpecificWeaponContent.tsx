"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { weapons } from "@/data/weapons";

import Link from "next/link";

import WeaponInfoSection from "@/widgets/weapon/WeaponInfoSection";
import weapon from "@/entities/weapon/Weapon";

const TheSpecificWeaponContent = () => {
  const params = useParams();

  const t = useTranslations("weapons");

  const [currentWeapon, setCurrentWeapon] = useState({} as any);

  const getPreviousWeaponName = () => {
    if (Object.entries(currentWeapon).length) {
      const weaponArr = weapons.filter(
        (weapon) => weapon.typeIndex === currentWeapon.typeIndex,
      );

      let targetIndex: number;

      if (weaponArr.indexOf(currentWeapon) === 0) {
        targetIndex = weaponArr.length - 1;
      } else {
        targetIndex = weaponArr.indexOf(currentWeapon) - 1;
      }

      return weaponArr.find((weapon, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getNextWeaponName = () => {
    if (Object.entries(currentWeapon).length) {
      const weaponArr = weapons.filter(
        (weapon) => weapon.typeIndex === currentWeapon.typeIndex,
      );

      let targetIndex: number;

      if (weaponArr.indexOf(currentWeapon) + 1 === weaponArr.length) {
        targetIndex = 0;
      } else {
        targetIndex = weaponArr.indexOf(currentWeapon) + 1;
      }

      return weaponArr.find((weapon, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  useEffect(() => {
    setCurrentWeapon(
      weapons.find(
        (weapon) =>
          weapon.devName.toLowerCase() ===
          fromSlug(params.weaponName as string),
      ),
    );
  }, []);
  return (
    <main className="relative h-auto">
      <section className="flex mlarge:block items-start gap-x-[120px]">
        <div className="w-[80%] h-[300px] border-2 border-theme rounded-[12.5px] overflow-hidden mobile">
          <img
            src={currentWeapon ? currentWeapon.imagePath : ""}
            alt={
              getIntlArray(t("names"))[currentWeapon ? currentWeapon.id - 1 : 0]
            }
            className="w-full h-full"
          />
        </div>

        <WeaponInfoSection currentWeapon={currentWeapon} />

        <div className="w-[500px] h-[240px] bg-[url('/static/WeaponBackground.png')] bg-cover bg-[center_top_-10px] border-2 border-theme rounded-[12.5px] overflow-hidden desktop">
          <img
            src={currentWeapon ? currentWeapon.imagePath : ""}
            alt={
              getIntlArray(t("names"))[currentWeapon ? currentWeapon.id - 1 : 0]
            }
            className="w-full h-full"
          />
        </div>
      </section>

      <div className="col-span-3 flex justify-between items-center mt-[50px] mlarge:mt-[30px] h-[55px]">
        <Link
          href={`/weaponry/${toSlug(getPreviousWeaponName())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px]"
          />

          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold ml-[10px] mlarge:ml-[5px] mlarge:text-right">
            {getPreviousWeaponName()}
          </p>
        </Link>

        <Link
          href={`/weaponry/${toSlug(getNextWeaponName())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold mr-[10px] mlarge:mr-[5px] mlarge:text-left">
            {getNextWeaponName()}
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

export default TheSpecificWeaponContent;
