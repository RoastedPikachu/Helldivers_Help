"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { armorStore } from "@/store/ArmorKitsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ArmorKit from "@/entities/armorKitsPage/armorKit/ArmorKit";
import ArmorKitAdditionalInfoModalWindow from "@/entities/armorKitsPage/armorKitAdditionalInfoModalWindow/ArmorKitAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";
import "./ArmorKits.css";

const Page = observer(() => {
  const [swiper, setSwiper] = useState(null as any);

  const handleChangeCurrentSlide = (id: number) => {
    swiper.slideTo(id - 1);
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
              title={"комплекты брони"}
              additionalTitle={"адского десантника"}
            />

            <PageDescription
              description={
                "Броня — это ключ к успеху для любого Адского Десантника. От дробовиков до энергетического оружия — все это инструменты, которые помогут вам распространять управляемую демократию в галактике."
              }
            />

            <section className="pageSection">
              <div className="pageSection_Block">
                <div
                  className={`pageSection_Block_SliderWrapper ${armorStore.currentArmorInfo.id ? "flex" : "hidden"}`}
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
                    className="pageSection_Block_SliderWrapper_Slider"
                  >
                    {armorStore.armorKits
                      .filter(
                        (armorKit) =>
                          armorKit.obtainingType.typeNumber ===
                          armorStore.currentArmorInfo.obtainingType?.typeNumber,
                      )
                      .map((armorKit) => (
                        <SwiperSlide
                          key={armorKit.id}
                          className="pageSection_Block_SliderWrapper_Slider_Slide"
                        >
                          <ArmorKitAdditionalInfoModalWindow
                            imagePath={armorKit.imagePath}
                            type={armorKit.type}
                            name={armorKit.name}
                            obtainingMethod={armorKit.obtainingMethod}
                            description={armorKit.description}
                            price={armorKit.price}
                            armorRating={armorKit.armorRating}
                            speed={armorKit.speed}
                            staminaRegen={armorKit.staminaRegen}
                            bonus={armorKit.bonus}
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>

                <h3 className="pageSection_Block_Title">ОБУЧЕНИЕ</h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 0,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">
                  БОЕВОЙ ПРОПУСК «АДСКИЕ ДЕСАНТНИКИ, В БОЙ!»
                </h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 1,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">
                  БОЕВОЙ ПРОПУСК «ЗАКАЛЕННЫЕ ВЕТЕРАНЫ»
                </h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 2,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">
                  БОЕВОЙ ПРОПУСК «НА ОСТРИЕ»
                </h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 3,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">СУПЕРМАГАЗИН</h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 4,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">ПРЕДЗАКАЗ</h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 5,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">
                  SUPER CITIZEN EDITION
                </h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 6,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
                        handleChangeCurrentSlide={handleChangeCurrentSlide}
                      />
                    ))}
                </div>
              </div>

              <div className="pageSection_Block">
                <h3 className="pageSection_Block_Title">TWITCH DROPS</h3>

                <div className="pageSection_Block_ArmorKitsWrapper">
                  {armorStore.armorKits
                    .filter(
                      (armorKit) => armorKit.obtainingType.typeNumber === 7,
                    )
                    .map((armorKit) => (
                      <ArmorKit
                        key={armorKit.id}
                        id={armorKit.id}
                        obtainingType={armorKit.obtainingType}
                        imagePath={armorKit.imagePath}
                        name={armorKit.name}
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
