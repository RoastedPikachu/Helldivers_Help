"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { armorStore } from "@/store/ArmorKitsStore";

import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ArmorKit from "@/entities/armorKitsPage/armorKit/ArmorKit";
import ArmorKitAdditionalInfoModalWindow from "@/entities/armorKitsPage/armorKitAdditionalInfoModalWindow/ArmorKitAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";

const TheArmorKitsContent = observer(() => {
  const getWeaponType = (type: string) => {
    switch (type) {
      case "Легкая броня":
        return "light";
      case "Средняя броня":
        return "medium";
      case "Тяжелая броня":
        return "heavy";
      default:
        return "";
    }
  };
  return (
    <Observer>
      {() => (
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
              getWeaponType(armorStore.currentArmorInfo.type)
            ]?.map((armorKit) => (
              <SwiperSlide key={armorKit.id}>
                <ArmorKitAdditionalInfoModalWindow
                  imagePath={armorKit.imagePath}
                  type={armorKit.type}
                  name={armorKit.name}
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

          <EntitySection
            title={"ЛЕГКАЯ БРОНЯ"}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {armorStore.armorKits.light.map((armorKit) => (
              <ArmorKit
                key={armorKit.id}
                id={armorKit.id}
                imagePath={armorKit.imagePath}
                type={armorKit.type}
                name={armorKit.name}
                bonus={armorKit.bonus}
              />
            ))}
          </EntitySection>

          <EntitySection
            title={"СРЕДНЯЯ БРОНЯ"}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {armorStore.armorKits.medium.map((armorKit) => (
              <ArmorKit
                key={armorKit.id}
                id={armorKit.id}
                imagePath={armorKit.imagePath}
                type={armorKit.type}
                name={armorKit.name}
                bonus={armorKit.bonus}
              />
            ))}
          </EntitySection>

          <EntitySection
            title={"ТЯЖЕЛАЯ БРОНЯ"}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {armorStore.armorKits.heavy.map((armorKit) => (
              <ArmorKit
                key={armorKit.id}
                id={armorKit.id}
                imagePath={armorKit.imagePath}
                type={armorKit.type}
                name={armorKit.name}
                bonus={armorKit.bonus}
              />
            ))}
          </EntitySection>
        </main>
      )}
    </Observer>
  );
});

export default TheArmorKitsContent;
