"use client";
import React from "react";

import { weaponsStore } from "@/store/WeaponsStore";

import { WeaponType } from "@/utils/dataInterfaces";

import "./Weapon.css";

interface WeaponProps {
  id: number;
  weaponType: WeaponType;
  imagePath: string;
  name: string;
  handleChangeCurrentSlide: (id: number) => void;
}

const Weapon: React.FC<WeaponProps> = ({
  id,
  weaponType,
  imagePath,
  name,
  handleChangeCurrentSlide,
}) => {
  const handleCurrentWeaponInfoChange = () => {
    handleChangeCurrentSlide(id);

    weaponsStore.changeCurrentWeaponInfo(id, weaponType);
  };
  return (
    <div onClick={handleCurrentWeaponInfoChange} className="weaponWidget">
      <img
        src={imagePath}
        alt=""
        className={`${weaponType.typeNumber !== 3 ? "w-[400px] h-[160px]" : "w-[200px] h-[150px] scale-[0.9]"}`}
      />

      <p className="weaponWidget_Text">{name}</p>
    </div>
  );
};

export default Weapon;
