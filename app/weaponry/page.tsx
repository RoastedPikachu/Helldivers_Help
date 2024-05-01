"use client";
import React, { useEffect } from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { weaponsStore } from "@/store/WeaponsStore";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import WeaponAdditionalInfoModalWindow from "@/entities/weaponryPage/weaponAdditionalInfoModalWindow/WeaponAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "./WeaponryPage.css";
import EntitySection from "@/widgets/EntitySection";
import Weapon from "@/entities/weaponryPage/weapon/Weapon";
import axios from "axios";
import { stratagemStore } from "@/store/StratagemStore";

const Page = observer(() => {
  const getTargetWeaponProps = (weapon: any) => {
    switch (weaponsStore.currentWeaponInfo.weaponType?.typeNumber!) {
      case 1:
      case 2:
        return (
          <WeaponAdditionalInfoModalWindow
            id={weapon.id}
            imagePath={weapon.imagePath}
            name={weapon.name}
            description={weapon.description}
            price={weapon.price}
            damage={weapon.damage}
            magsCount={weapon.magsCount}
            roundsPerMag={weapon.roundsPerMag}
            totalRounds={weapon.totalRounds}
            recoil={weapon.recoil}
            fireRate={weapon.fireRate}
            totalDamage={weapon.totalDamage}
            dps={weapon.dps}
          />
        );
      case 3:
        return (
          <WeaponAdditionalInfoModalWindow
            id={weapon.id}
            imagePath={weapon.imagePath}
            name={weapon.name}
            description={weapon.description}
            price={weapon.price}
            damage={weapon.damage}
            magsCount={weapon.magsCount}
            roundsPerMag={weapon.roundsPerMag}
            totalRounds={weapon.totalRounds}
            callTime={weapon.callTime}
            directions={weapon.directions}
            features={weapon.features}
          />
        );
      case 4:
        return (
          <WeaponAdditionalInfoModalWindow
            id={weapon.id}
            imagePath={weapon.imagePath}
            name={weapon.name}
            description={weapon.description}
            price={weapon.price}
            damage={weapon.damage}
            fuseTime={weapon.fuseTime}
            penetration={weapon.penetration}
            radius={weapon.radius}
          />
        );
    }
  };

  const getSpecificWeaponArray = (weaponType: number) => {
    switch (weaponType) {
      case 1:
        return weaponsStore.primaryWeapons;
      case 2:
        return weaponsStore.secondaryWeapons;
      case 3:
        return weaponsStore.supportWeapons;
      case 4:
        return weaponsStore.grenades;
    }
  };

  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <TheScrollToUpButton />

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

            <ModalSlider currentEntityId={weaponsStore.currentWeaponInfo.id}>
              {getSpecificWeaponArray(
                weaponsStore.currentWeaponInfo.weaponType?.typeNumber!,
              )?.map((weapon) => (
                <SwiperSlide key={weapon.id}>
                  {getTargetWeaponProps(weapon)}
                </SwiperSlide>
              ))}
            </ModalSlider>

            <EntitySection title={"ОСНОВНОЕ"} gridStyles={"grid-cols-3"}>
              {getSpecificWeaponArray(1)?.map((primaryWeapon) => (
                <Weapon
                  key={primaryWeapon.id}
                  id={primaryWeapon.id}
                  weaponType={primaryWeapon.weaponType}
                  imagePath={primaryWeapon.imagePath}
                  name={primaryWeapon.name}
                />
              ))}
            </EntitySection>

            <EntitySection title={"ВТОРИЧНОЕ"} gridStyles={"grid-cols-3"}>
              {getSpecificWeaponArray(2)?.map((primaryWeapon) => (
                <Weapon
                  key={primaryWeapon.id}
                  id={primaryWeapon.id}
                  weaponType={primaryWeapon.weaponType}
                  imagePath={primaryWeapon.imagePath}
                  name={primaryWeapon.name}
                />
              ))}
            </EntitySection>

            <EntitySection title={"ВСПОМОГАТЕЛЬНОЕ"} gridStyles={"grid-cols-3"}>
              {getSpecificWeaponArray(3)?.map((primaryWeapon) => (
                <Weapon
                  key={primaryWeapon.id}
                  id={primaryWeapon.id}
                  weaponType={primaryWeapon.weaponType}
                  imagePath={primaryWeapon.imagePath}
                  name={primaryWeapon.name}
                />
              ))}
            </EntitySection>

            <EntitySection title={"ГРАНАТЫ"} gridStyles={"grid-cols-4"}>
              {getSpecificWeaponArray(4)?.map((primaryWeapon) => (
                <Weapon
                  key={primaryWeapon.id}
                  id={primaryWeapon.id}
                  weaponType={primaryWeapon.weaponType}
                  imagePath={primaryWeapon.imagePath}
                  name={primaryWeapon.name}
                />
              ))}
            </EntitySection>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
