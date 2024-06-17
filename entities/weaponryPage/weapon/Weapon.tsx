"use client";
import React from "react";

import { slidersStore } from "@/store/SlidersStore";
import { weaponsStore } from "@/store/WeaponsStore";

import { WeaponType } from "@/utils/dataInterfaces";

import ObtainingTypeTag from "@/entities/obtainingTypeTag/ObtainingTypeTag";

import "./Weapon.css";

interface WeaponProps {
  id: number;
  weaponType: WeaponType;
  imagePath: string;
  name: string;
  obtainingTypeIcon: string;
}

const Weapon: React.FC<WeaponProps> = ({
  id,
  weaponType,
  imagePath,
  name,
  obtainingTypeIcon,
}) => {
  const handleCurrentWeaponInfoChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    weaponsStore.changeCurrentWeaponInfo(id, weaponType);
  };

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
    <div onClick={handleCurrentWeaponInfoChange} className="weaponWidget">
      <ObtainingTypeTag image={obtainingTypeIcon} />

      <img
        src={imagePath}
        alt=""
        style={{ transform: "" }}
        className={`${weaponType.typeNumber !== 4 ? "w-[400px] mlarge:w-[350px] mmedium:w-[300px] msmall:w-[250px] h-[160px] mlarge:h-[150px] mmedium:h-[140px] msmall:h-[120px]" : "w-[200px] mlarge:w-[175px] mmedium:w-[150px] msmall:w-[125px] h-[150px] mlarge:h-[140px] mmedium:h-[120px] msmall:h-[100px] scale-[0.9]"} ${weaponType.typeNumber === 3 ? getTargetSupportWeaponImageScale(id) : ""}`}
      />

      <p className="weaponWidget_Text">{name}</p>
    </div>
  );
};

export default Weapon;
