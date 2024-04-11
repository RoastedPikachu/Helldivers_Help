import React from "react";

import { weaponsStore } from "@/store/WeaponsStore";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import Weapon from "@/entities/weaponryPage/weapon/Weapon";

import "./WeaponSection.css";

interface WeaponSectionProps {
  title: string;
  gridStyles: string;
  weaponType: number;
  handleCurrentSlideChange: (id: number) => void;
}

const WeaponSection: React.FC<WeaponSectionProps> = ({
  title,
  gridStyles,
  weaponType,
  handleCurrentSlideChange,
}) => {
  const getTargetWeaponsArray = () => {
    switch (weaponType) {
      case 1:
        return weaponsStore.primaryWeapons;
      case 2:
        return weaponsStore.secondaryWeapons;
      case 3:
        return weaponsStore.grenades;
    }
  };
  return (
    <section>
      <SectionTitle text={title} />

      <div className={`weaponCardsWrapper ${gridStyles}`}>
        {getTargetWeaponsArray().map((primaryWeapon) => (
          <Weapon
            key={primaryWeapon.id}
            id={primaryWeapon.id}
            weaponType={primaryWeapon.weaponType}
            imagePath={primaryWeapon.imagePath}
            name={primaryWeapon.name}
            handleCurrentSlideChange={handleCurrentSlideChange}
          />
        ))}
      </div>
    </section>
  );
};

export default WeaponSection;
