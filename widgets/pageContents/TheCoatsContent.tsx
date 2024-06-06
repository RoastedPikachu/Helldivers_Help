"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { coatsStore } from "@/store/CoatsStore";

import LegendSection from "@/widgets/legendSection/LegendSection";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Coat from "@/entities/coatsPage/coat/Coat";
import CoatAdditionalInfoModalWindow from "@/entities/coatsPage/coatAdditionalInfoModalWindow/CoatAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";

const TheCoatsContent = observer(() => {
  return (
    <Observer>
      {() => (
        <main>
          <ThePageTitle
            title={"плащи"}
            additionalTitle={"адского десантника"}
          />

          <PageDescription
            description={
              "Плащ является украшением Адского Десантника. Это отличительный знак того, что все они являются героями, а герои не могут не носить плащи. Это такой же важный атрибут для любого Адского Десантника, как шляпа для каждого уважающего себя ковбоя. Поэтому носите плащ с честью и достоинством, чтобы не опозорить своих товарищей, демократию и Супер-Землю."
            }
          />

          <LegendSection />

          <ModalSlider
            closeFunction={() => coatsStore.clearCurrentCoatInfo()}
            currentEntityId={coatsStore.currentCoatInfo.id}
          >
            {coatsStore.coats.map((coat) => (
              <SwiperSlide key={coat.id}>
                <CoatAdditionalInfoModalWindow
                  imagePath={coat.imagePath}
                  name={coat.name}
                  description={coat.description}
                  price={coat.price}
                  armorRating={coat.armorRating}
                  speed={coat.speed}
                  staminaRegen={coat.staminaRegen}
                />
              </SwiperSlide>
            ))}
          </ModalSlider>

          <EntitySection
            title={""}
            gridStyles={"grid-cols-5 mlarge:grid-cols-2"}
          >
            {coatsStore.coats.map((coat) => (
              <Coat
                key={coat.id}
                id={coat.id}
                imagePath={coat.imagePath}
                name={coat.name}
                warbondIcon={coat.warbondIcon}
              />
            ))}
          </EntitySection>
        </main>
      )}
    </Observer>
  );
});

export default TheCoatsContent;
