"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { armorStore } from "@/store/ArmorKitsStore";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import EntitySection from "@/widgets/EntitySection";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ArmorKit from "@/entities/armorKitsPage/armorKit/ArmorKit";
import ArmorKitAdditionalInfoModalWindow from "@/entities/armorKitsPage/armorKitAdditionalInfoModalWindow/ArmorKitAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";
import { weaponsStore } from "@/store/WeaponsStore";

const Page = observer(() => {
  return (
    <Observer>
      {() => (
        <>
          <TopPageBlock />

          <TheScrollToUpButton />

          <main>
            <ThePageTitle
              title={"комплекты брони"}
              additionalTitle={"адского десантника"}
            />

            <PageDescription
              description={
                "Броня для Адского Десантника в игре Helldivers 2 играет критически важную роль в обеспечении выживаемости и эффективности на поле боя. Она защищает от дальнобойных лазеров автоматонов, от когтей и жвал терминидов, также комплект брони предоставляет определенные бонусы, способствующие выполнению задания."
              }
            />

            <ModalSlider
              closeFunction={() => armorStore.clearCurrentArmorInfo()}
              currentEntityId={armorStore.currentArmorInfo.id}
            >
              {armorStore.armorKits[
                armorStore.currentArmorInfo.obtainingType?.name
              ]?.map((armorKit) => (
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
              {armorStore.armorKits.tutorial.map((armorKit) => (
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
              {armorStore.armorKits.helldiversMobilize.map((armorKit) => (
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
              {armorStore.armorKits.steeledVeterans.map((armorKit) => (
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
              {armorStore.armorKits.cuttingEdge.map((armorKit) => (
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
              {armorStore.armorKits.democraticDetonation.map((armorKit) => (
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
              {armorStore.armorKits.superstore.map((armorKit) => (
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
              {armorStore.armorKits.preOrder.map((armorKit) => (
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
              {armorStore.armorKits.superCitizen.map((armorKit) => (
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
              {armorStore.armorKits.twitchDrops.map((armorKit) => (
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
