"use client";
import React from "react";

import { weaponsStore } from "@/store/WeaponsStore";

import "./Weapon.css";

interface WeaponProps {
  id: number;
  weaponType: number;
  imagePath: string;
  name: string;
}

const Weapon: React.FC<WeaponProps> = ({ id, weaponType, imagePath, name }) => {
  const getCurrentWeapon = () => {
    switch (weaponType) {
      case 1:
        return weaponsStore.primaryWeapons.find(
          (primaryWeapon) => primaryWeapon.id === id,
        );
      case 2:
        return weaponsStore.secondaryWeapons.find(
          (secondaryWeapon) => secondaryWeapon.id === id,
        );
      case 3:
        return weaponsStore.grenades.find((grenade) => grenade.id === id);
    }
  };

  return (
    <div
      onClick={() => weaponsStore.changeCurrentWeapon(getCurrentWeapon()!)}
      className="weaponWidget"
    >
      <img
        src={imagePath}
        alt=""
        className={`${weaponType !== 3 ? "w-[400px] h-[160px]" : "w-[200px] h-[150px] scale-[0.9]"}`}
      />

      <p className="weaponWidget_Text">{name}</p>
    </div>
  );
};

export default Weapon;
