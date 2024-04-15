"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { armorStore } from "@/store/ArmorKitsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import EntitySection from "@/widgets/EntitySection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ArmorKit from "@/entities/armorKitsPage/armorKit/ArmorKit";
import ArmorKitAdditionalInfoModalWindow from "@/entities/armorKitsPage/armorKitAdditionalInfoModalWindow/ArmorKitAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";

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
                  <SwiperSlide key={armorKit.id}>
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

            <EntitySection title={"ОБУЧЕНИЕ"} gridStyles={"grid-cols-5"}>
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 0)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection
              title={"БОЕВОЙ ПРОПУСК «АДСКИЕ ДЕСАНТНИКИ, В БОЙ!»"}
              gridStyles={"grid-cols-5"}
            >
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 1)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection
              title={"БОЕВОЙ ПРОПУСК «ЗАКАЛЕННЫЕ ВЕТЕРАНЫ»"}
              gridStyles={"grid-cols-5"}
            >
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 2)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection
              title={"БОЕВОЙ ПРОПУСК «НА ОСТРИЕ»"}
              gridStyles={"grid-cols-5"}
            >
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 3)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection
              title={"БОЕВОЙ ПРОПУСК «ДЕМОКРАТИЧЕСКИЙ ПОДРЫВ»"}
              gridStyles={"grid-cols-5"}
            >
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 4)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection title={"СУПЕРМАГАЗИН"} gridStyles={"grid-cols-5"}>
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 5)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection title={"ПРЕДЗАКАЗ"} gridStyles={"grid-cols-5"}>
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 6)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection
              title={"ИЗДАНИЕ SUPER CITIZEN"}
              gridStyles={"grid-cols-5"}
            >
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 7)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
                  />
                ))}
            </EntitySection>

            <EntitySection title={"TWITCH DROPS"} gridStyles={"grid-cols-5"}>
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 8)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    id={armorKit.id}
                    obtainingType={armorKit.obtainingType}
                    imagePath={armorKit.imagePath}
                    name={armorKit.name}
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
