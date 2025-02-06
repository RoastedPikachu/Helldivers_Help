"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray, toSlug } from "@/utils/generalFunctions";

import Link from "next/link";

import "./weapon.css";

interface WeaponProps {
  id: number;
  typeIndex: number;
  imagePath: string;
  devName: string;
}

const Weapon: React.FC<WeaponProps> = ({
  id,
  typeIndex,
  imagePath,
  devName,
}) => {
  const t = useTranslations("weapons");

  const getTargetSupportWeaponImageScale = (id: number) => {
    switch (id) {
      case 1:
        return "mt-[-10px] scale-y-[1.4]";
      case 2:
        return "scale-y-[1.2]";
      case 3:
        return "scale-y-[1.2]";
      case 6:
        return "mt-[-10px]";
      case 8:
        return "scale-[0.9]";
      case 9:
        return "scale-[1.2]";
      case 10:
        return "scale-y-[1.1]";
      case 12:
        return "scale-[0.9]";
      case 13:
        return "scale-[0.9]";
      case 14:
        return "scale-[0.8]";
      case 15:
        return "scale-[0.9]";
    }
  };
  return (
    <Link href={`/weaponry/${toSlug(devName)}`}>
      <div className="weaponWidget">
        <div
          className={`weaponWidgetCard ${typeIndex === 3 ? "w-full h-[200px] mlarge:h-[160px] mmedium:h-[140px] msmall:h-[120px] scale-[0.9] bg-center" : "w-full h-[200px] mmedium:h-[180px] msmall:h-[160px] bg-[center_top_-20px] mlarge:bg-[center_top_-5px] mmedium:bg-center"}`}
        >
          <img
            src={imagePath}
            alt=""
            style={{ transform: "" }}
            className={`w-full h-full ${typeIndex === 4 ? getTargetSupportWeaponImageScale(id) : ""}`}
          />
        </div>

        <p className="weaponWidget-text">{getIntlArray(t("names"))[id - 1]}</p>
      </div>
    </Link>
  );
};

export default Weapon;
