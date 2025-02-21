"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { galaxySectors } from "@/data/galaxySectors";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Planet from "@/entities/planetsPage/planet/Planet";
import PlanetAdditionalInfoModalWindow from "@/entities/planetsPage/planetAdditionalInfoModalWindow/PlanetAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";
import { planets } from "@/data/planets";

const ThePlanetsContent = () => {
  const t = useTranslations("PlanetsPage");
  const t1 = useTranslations("sectors");

  // const getTargetPlanetArray = () => {
  //   return Object.values(planetsStore.planets).filter(
  //     (planetValue) =>
  //       planetValue.sector.name === planetsStore.currentPlanetInfo.sector,
  //   );
  // };
  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      {/*<ModalSlider*/}
      {/*  closeFunction={() => planetsStore.clearCurrentPlanetInfo()}*/}
      {/*  currentEntityId={planetsStore.currentPlanetInfo.id}*/}
      {/*>*/}
      {/*  {getTargetPlanetArray()?.map((planet) => (*/}
      {/*    <SwiperSlide key={planet.id}>*/}
      {/*      <PlanetAdditionalInfoModalWindow*/}
      {/*        imagePath={planet.biome?.imagePath}*/}
      {/*        weatherConditions={planet.weatherConditions}*/}
      {/*        biomeDescription={planet.biome?.description}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*  ))}*/}
      {/*</ModalSlider>*/}

      {Object.values(galaxySectors).map((value: any, i) => (
        <EntitySection
          key={i + 1}
          title={getIntlArray(t1("data"))[i]}
          gridStyles={"grid-cols-3 mlarge:grid-cols-1"}
        >
          {planets
            .filter(
              (planetValue) => planetValue.sector.devName === value.devName,
            )
            .map((planet) => (
              <Planet
                key={planet.id}
                id={planet.id}
                biome={planet.biome}
                weatherConditions={planet.weatherConditions}
                sector={planet.sector.name}
              />
            ))}
        </EntitySection>
      ))}
    </main>
  );
};

export default ThePlanetsContent;
