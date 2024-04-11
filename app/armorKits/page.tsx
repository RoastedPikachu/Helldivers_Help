"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { armorStore } from "@/store/ArmorKitsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import ArmorKitsSection from "@/widgets/armorKitsSection/ArmorKitsSection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ArmorKitAdditionalInfoModalWindow from "@/entities/armorKitsPage/armorKitAdditionalInfoModalWindow/ArmorKitAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "./ArmorKits.css";

const Page = observer(() => {
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

            <ModalSlider currentEntityId={armorStore.currentArmorInfo.id}>
              {armorStore.armorKits
                .filter(
                  (armorKit) =>
                    armorKit.obtainingType.typeNumber ===
                    armorStore.currentArmorInfo.obtainingType?.typeNumber,
                )
                .map((armorKit) => (
                  <SwiperSlide
                    key={armorKit.id}
                    className="pageContentSection_Block_SliderWrapper_Slider_Slide"
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
            </ModalSlider>

            <ArmorKitsSection
              title={"ОБУЧЕНИЕ"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 0,
              )}
            />

            <ArmorKitsSection
              title={"БОЕВОЙ ПРОПУСК «АДСКИЕ ДЕСАНТНИКИ, В БОЙ!»"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 1,
              )}
            />

            <ArmorKitsSection
              title={"БОЕВОЙ ПРОПУСК «ЗАКАЛЕННЫЕ ВЕТЕРАНЫ»"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 2,
              )}
            />

            <ArmorKitsSection
              title={"БОЕВОЙ ПРОПУСК «НА ОСТРИЕ»"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 3,
              )}
            />

            <ArmorKitsSection
              title={"СУПЕРМАГАЗИН"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 4,
              )}
            />

            <ArmorKitsSection
              title={"ПРЕДЗАКАЗ"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 5,
              )}
            />

            <ArmorKitsSection
              title={"ИЗДАНИЕ SUPER CITIZEN"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 6,
              )}
            />

            <ArmorKitsSection
              title={"TWITCH DROPS"}
              armorKitsArray={armorStore.armorKits.filter(
                (armorKit) => armorKit.obtainingType.typeNumber === 7,
              )}
            />
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
