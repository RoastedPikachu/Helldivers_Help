"use client";
import React from "react";

import { SwiperSlide } from "swiper/react";

import { Observer, observer } from "mobx-react-lite";

import { planetsStore } from "@/store/PlanetsStore";

import { galaxySectors } from "@/data/galaxySectors";

import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Planet from "@/entities/planetsPage/planet/Planet";
import PlanetAdditionalInfoModalWindow from "@/entities/planetsPage/planetAdditionalInfoModalWindow/PlanetAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";

const ThePlanetsContent = observer(() => {
  const getTargetPlanetArray = () => {
    return Object.values(planetsStore.planets).filter(
      (planetValue) =>
        planetValue.sector.name === planetsStore.currentPlanetInfo.sector,
    );
  };
  return (
    <Observer>
      {() => (
        <main>
          <ThePageTitle title={"глоссарий"} additionalTitle={"планет"} />

          <PageDescription
            description={
              "Глоссарий планет содержит информацию о мирах, вовлеченных в галактический конфликт. Каждая планета имеет свои особенности, проблемы и стратегическое значение. Изучите уникальные характеристики этих небесных тел, чтобы лучше понять динамику текущей борьбы за свободу, процветание и управляемую демократию."
            }
          />

          <ModalSlider
            closeFunction={() => planetsStore.clearCurrentPlanetInfo()}
            currentEntityId={planetsStore.currentPlanetInfo.id}
          >
            {getTargetPlanetArray()?.map((planet) => (
              <SwiperSlide key={planet.id}>
                <PlanetAdditionalInfoModalWindow
                  imagePath={planet.biome?.imagePath}
                  name={planet.name}
                  weatherConditions={planet.weatherConditions}
                  biomeDescription={planet.biome?.description}
                />
              </SwiperSlide>
            ))}
          </ModalSlider>

          {Object.values(galaxySectors).map((value, i) => (
            <EntitySection
              key={i + 1}
              title={value.name}
              gridStyles={"grid-cols-3 mlarge:grid-cols-1"}
            >
              {Object.values(planetsStore.planets)
                .filter((planetValue) => planetValue.sector.name === value.name)
                .map((planet) => (
                  <Planet
                    key={planet.id}
                    id={planet.id}
                    name={planet.name}
                    biome={planet.biome}
                    weatherConditions={planet.weatherConditions}
                    sector={planet.sector.name}
                  />
                ))}
            </EntitySection>
          ))}
        </main>
      )}
    </Observer>
  );
});

export default ThePlanetsContent;
