import React from "react";

import { Grenade, PrimaryOrSecondaryWeapon } from "@/utils/storeInterfaces";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import Weapon from "@/entities/weaponryPage/weapon/Weapon";

import "./WeaponSection.css";

interface WeaponSectionProps {
  title: string;
  gridStyles: string;
  weaponArray: PrimaryOrSecondaryWeapon[] | Grenade[];
}

const WeaponSection: React.FC<WeaponSectionProps> = ({
  title,
  gridStyles,
  weaponArray,
}) => {
  return (
    <section>
      <SectionTitle text={title} />

      <div className={`weaponCardsWrapper ${gridStyles}`}>
        {weaponArray.map((primaryWeapon) => (
          <Weapon
            key={primaryWeapon.id}
            id={primaryWeapon.id}
            weaponType={primaryWeapon.weaponType}
            imagePath={primaryWeapon.imagePath}
            name={primaryWeapon.name}
          />
        ))}
      </div>
    </section>
  );
};

export default WeaponSection;
