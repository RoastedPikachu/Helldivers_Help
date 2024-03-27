"use client";
import React, { useState, useRef } from "react";

import { observer, Observer } from "mobx-react-lite";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import { weaponsStore } from "@/store/WeaponsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Weapon from "@/entities/weapon/Weapon";
import WeaponAdditionalInfoModalWindow from "@/entities/currentWeapon/WeaponAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";
import "./Weaponry.css";

const Page = observer(() => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [swiper, setSwiper] = useState(null as any);

  const getTargetWeaponArray = () => {
    switch (weaponsStore.currentWeaponInfo.weaponType) {
      case 1:
        return weaponsStore.primaryWeapons;
      case 2:
        return weaponsStore.secondaryWeapons;
      case 3:
        return weaponsStore.grenades;
    }
  };

  const handleChangeCurrentSlide = (id: number) => {
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

          <main>
            <h2 className="pageTitle">
              ВООРУЖЕНИЕ <b className="pageTitle_Bold">АДСКОГО ДЕСАНТНИКА</b>
            </h2>

            <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
              Вооружение — это ключ к успеху для любого Адского Десантника. От
              дробовиков до энергетического оружия — все это инструменты,
              которые помогут вам распространять управляемую демократию в
              галактике.
            </p>

            <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
              Когда жуки начнут ползти, а машины — стрелять, не стойте в
              стороне. Возьмите оружие, и покажите врагам Супер-Земли, на что
              способны настоящие Адские Десантники. С демократией на вашей
              стороне и вашими товарищами рядом, вы непобедимы!
            </p>

            <section className="pageSection">
              <div className="pageSection_Block">
                <div
                  className={`pageSection_Block_SliderWrapper ${weaponsStore.currentWeaponInfo.id ? "flex" : "hidden"}`}
                >
                  <div className="pageSection_Block_SliderWrapper_DarkBackground"></div>

                  <Swiper
                    spaceBetween={150}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={false}
                    modules={[Navigation]}
                    navigation={true}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    onSlideChange={handleSlideChange}
                    className="pageSection_Block_SliderWrapper_Slider"
                  >
                    {getTargetWeaponArray()?.map((weapon) => (
                      <SwiperSlide
                        key={weapon.id}
                        className="pageSection_Block_SliderWrapper_Slider_Slide"
                      >
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
                          fuseTime={weapon.fuseTime}
                          penetration={weapon.penetration}
                          radius={weapon.radius}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <h3 className="pageSection_Block_Title">ОСНОВНОЕ</h3>

                <div className="pageSection_Block_PrimaryWeaponWrapper">
                  {weaponsStore.primaryWeapons.map((primaryWeapon) => (
                    <Weapon
                      key={primaryWeapon.id}
                      id={primaryWeapon.id}
                      weaponType={primaryWeapon.weaponType}
                      imagePath={primaryWeapon.imagePath}
                      name={primaryWeapon.name}
                      handleChangeCurrentSlide={handleChangeCurrentSlide}
                    />
                  ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">ВТОРИЧНОЕ</h3>

                <div className="pageSection_Block_SecondaryWeaponWrapper">
                  {weaponsStore.secondaryWeapons.map((secondaryWeapon) => (
                    <Weapon
                      key={secondaryWeapon.id}
                      id={secondaryWeapon.id}
                      weaponType={secondaryWeapon.weaponType}
                      imagePath={secondaryWeapon.imagePath}
                      name={secondaryWeapon.name}
                      handleChangeCurrentSlide={handleChangeCurrentSlide}
                    />
                  ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">ГРАНАТЫ</h3>

                <div className="pageSection_Block_GrenadesWrapper">
                  {weaponsStore.grenades.map((grenade) => (
                    <Weapon
                      key={grenade.id}
                      id={grenade.id}
                      weaponType={grenade.weaponType}
                      imagePath={grenade.imagePath}
                      name={grenade.name}
                      handleChangeCurrentSlide={handleChangeCurrentSlide}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
