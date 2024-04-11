"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { weaponsStore } from "@/store/WeaponsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Weapon from "@/entities/weaponryPage/weapon/Weapon";
import WeaponAdditionalInfoModalWindow from "@/entities/weaponryPage/weaponAdditionalInfoModalWindow/WeaponAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "./Weaponry.css";
import WeaponSection from "@/widgets/weaponSection/WeaponSection";

const Page = observer(() => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [swiper, setSwiper] = useState(null as any);

  const getTargetWeaponArray = () => {
    switch (weaponsStore.currentWeaponInfo.weaponType?.typeNumber) {
      case 1:
        return weaponsStore.primaryWeapons;
      case 2:
        return weaponsStore.secondaryWeapons;
      case 3:
        return weaponsStore.grenades;
    }
  };

  const handleCurrentSlideChange = (id: number) => {
    swiper.slideTo(id - 1);
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper?.activeIndex);
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

            <div
              className={`pageContentSection_Block_SliderWrapper ${weaponsStore.currentWeaponInfo.id ? "flex" : "hidden"}`}
            >
              <div className="pageContentSection_Block_SliderWrapper_DarkBackground"></div>

              <Swiper
                spaceBetween={150}
                slidesPerView={1}
                loop={true}
                centeredSlides={false}
                modules={[Navigation]}
                navigation={true}
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={handleSlideChange}
                className="pageContentSection_Block_SliderWrapper_Slider"
              >
                {getTargetWeaponArray()?.map((weapon) => (
                  <SwiperSlide
                    key={weapon.id}
                    className="pageContentSection_Block_SliderWrapper_Slider_Slide"
                  >
                    {"magsCount" in weapon ? (
                      <WeaponAdditionalInfoModalWindow
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
                        dpm={weapon.dpm}
                      />
                    ) : (
                      <WeaponAdditionalInfoModalWindow
                        imagePath={weapon.imagePath}
                        name={weapon.name}
                        description={weapon.description}
                        price={weapon.price}
                        damage={weapon.damage}
                        fuseTime={weapon.fuseTime}
                        penetration={weapon.penetration}
                        radius={weapon.radius}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <WeaponSection title={"ОСНОВНОЕ"} gridStyles={"grid-cols-3"} weaponType={1} handleCurrentSlideChange={handleCurrentSlideChange}/>

            <WeaponSection title={"ВТОРИЧНОЕ"} gridStyles={"grid-cols-3"} weaponType={2} handleCurrentSlideChange={handleCurrentSlideChange}/>

            <WeaponSection title={"ГРАНАТЫ"} gridStyles={"grid-cols-4"} weaponType={3} handleCurrentSlideChange={handleCurrentSlideChange}/>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
