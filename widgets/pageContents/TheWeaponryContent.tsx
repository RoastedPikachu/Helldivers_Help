"use client";
import React from "react";

import { weapons } from "@/data/weapons";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Weapon from "@/entities/weapon/Weapon";

const TheWeaponryContent = () => {
  const getSpecificWeaponArray = (weaponType: number) => {
    switch (weaponType) {
      case 1:
        return weapons.filter((weapon) => weapon.typeIndex === 1);
      case 2:
        return weapons.filter((weapon) => weapon.typeIndex === 2);
      case 3:
        return weapons.filter((weapon) => weapon.typeIndex === 3);
    }
  };
  return (
    <main>
      <ThePageTitle
        title={"вооружение"}
        additionalTitle={"адского десантника"}
      />

      <PageDescription
        description={
          "Вооружение — это ключ к успеху для любого Адского Десантника. От дробовиков до энергетического оружия — все это инструменты, которые помогут вам распространять управляемую демократию в галактике."
        }
      />

      <PageDescription
        description={
          "Когда жуки начнут ползти, а машины — стрелять, не стойте в стороне. Возьмите оружие, и покажите врагам Супер-Земли, на что способны настоящие Адские Десантники. С демократией на вашей стороне и вашими товарищами рядом, вы непобедимы!"
        }
      />

      <EntitySection
        title={"ОСНОВНОЕ"}
        gridStyles={"grid-cols-3 mlarge:grid-cols-1"}
      >
        {getSpecificWeaponArray(1)?.map((primaryWeapon) => (
          <Weapon
            key={primaryWeapon.id}
            id={primaryWeapon.id}
            typeIndex={primaryWeapon.typeIndex}
            imagePath={primaryWeapon.imagePath}
            devName={primaryWeapon.devName}
          />
        ))}
      </EntitySection>

      <EntitySection
        title={"ВТОРИЧНОЕ"}
        gridStyles={"grid-cols-3 mlarge:grid-cols-1"}
      >
        {getSpecificWeaponArray(2)?.map((primaryWeapon) => (
          <Weapon
            key={primaryWeapon.id}
            id={primaryWeapon.id}
            typeIndex={primaryWeapon.typeIndex}
            imagePath={primaryWeapon.imagePath}
            devName={primaryWeapon.devName}
          />
        ))}
      </EntitySection>

      {/*<EntitySection*/}
      {/*  title={"ВСПОМОГАТЕЛЬНОЕ"}*/}
      {/*  gridStyles={"grid-cols-3 mlarge:grid-cols-1"}*/}
      {/*>*/}
      {/*  {getSpecificWeaponArray(3)?.map((primaryWeapon) => (*/}
      {/*    <Weapon*/}
      {/*      key={primaryWeapon.id}*/}
      {/*      id={primaryWeapon.id}*/}
      {/*      weaponType={primaryWeapon.weaponType}*/}
      {/*      imagePath={primaryWeapon.imagePath}*/}
      {/*      name={primaryWeapon.name}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</EntitySection>*/}

      <EntitySection
        title={"ГРАНАТЫ"}
        gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
      >
        {getSpecificWeaponArray(3)?.map((primaryWeapon) => (
          <Weapon
            key={primaryWeapon.id}
            id={primaryWeapon.id}
            typeIndex={primaryWeapon.typeIndex}
            imagePath={primaryWeapon.imagePath}
            devName={primaryWeapon.devName}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheWeaponryContent;
