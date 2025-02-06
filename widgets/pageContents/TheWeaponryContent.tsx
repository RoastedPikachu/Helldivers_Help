"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { weapons } from "@/data/weapons";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Weapon from "@/entities/weapon/Weapon";

const TheWeaponryContent = () => {
  const t = useTranslations("WeaponryPage");

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
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[0]}
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
        title={getIntlArray(t("sectionTitles"))[1]}
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
        title={getIntlArray(t("sectionTitles"))[2]}
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
