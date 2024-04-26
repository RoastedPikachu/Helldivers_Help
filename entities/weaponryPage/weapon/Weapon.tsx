"use client";
import React from "react";

import { weaponsStore } from "@/store/WeaponsStore";

import { WeaponType } from "@/utils/dataInterfaces";

import "./Weapon.css";
import modalSlider from "@/widgets/modalSlider/ModalSlider";
import { slidersStore } from "@/store/SlidersStore";

interface WeaponProps {
  id: number;
  weaponType: WeaponType;
  imagePath: string;
  name: string;
}

const Weapon: React.FC<WeaponProps> = ({ id, weaponType, imagePath, name }) => {
  const handleCurrentWeaponInfoChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    weaponsStore.changeCurrentWeaponInfo(id, weaponType);
  };
  return (
    <div onClick={handleCurrentWeaponInfoChange} className="weaponWidget">
      <img
        src={imagePath}
        alt=""
        className={`${weaponType.typeNumber !== 4 ? "w-[400px] h-[160px]" : "w-[200px] h-[150px] scale-[0.9]"}`}
      />

      <p className="weaponWidget_Text">{name}</p>
    </div>
  );
};

export default Weapon;
