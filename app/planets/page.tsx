"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { planetsStore } from "@/store/PlanetsStore";

import { galaxySectors } from "@/data/galaxySectors";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Planet from "@/entities/planetsPage/planet/Planet";
import PlanetAdditionalInfoModalWindow from "@/entities/planetsPage/planetAdditionalInfoModalWindow/PlanetAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";
import "./Planets.css";

const Page = observer(() => {
  const [swiper, setSwiper] = useState(null as any);

  const getTargetPlanetArray = () => {
    return Object.values(planetsStore.planets).filter(
      (planetValue) =>
        planetValue.sector === planetsStore.currentPlanetInfo.sector,
    );
  };

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
            <ThePageTitle title={"глоссарий"} additionalTitle={"планет"} />

            <PageDescription
              description={
                "Глоссарий планет содержит информацию о мирах, вовлеченных в галактический конфликт. Каждая планета имеет свои особенности, проблемы и стратегическое значение. Изучите уникальные характеристики этих небесных тел, чтобы лучше понять динамику текущей борьбы за свободу, процветание и управляемую демократию."
              }
            />

            <section className="pageContentSection">
              <div
                className={`pageContentSection_Block_SliderWrapper ${planetsStore.currentPlanetInfo.id ? "flex" : "hidden"}`}
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
                  className="pageContentSection_Block_SliderWrapper_Slider"
                >
                  {getTargetPlanetArray()?.map((planet) => (
                    <SwiperSlide
                      key={planet.id}
                      className="pageContentSection_Block_SliderWrapper_Slider_Slide"
                    >
                      <PlanetAdditionalInfoModalWindow
                        imagePath={planet.biome?.imagePath}
                        name={planet.name}
                        weatherConditions={planet.weatherConditions}
                        biomeDescription={planet.biome?.description}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {Object.values(galaxySectors).map((value, i) => (
                <div key={i} className="pageContentSection_Block">
                  <h3 className="pageContentSection_Block_Title">{value}</h3>

                  <div className="pageContentSection_Block_PlanetWrapper">
                    {Object.values(planetsStore.planets)
                      .filter((planetValue) => planetValue.sector === value)
                      .map((planet) => (
                        <Planet
                          key={planet.id}
                          id={planet.id}
                          name={planet.name}
                          biome={planet.biome}
                          weatherConditions={planet.weatherConditions}
                          sector={planet.sector}
                          handleChangeCurrentSlide={handleChangeCurrentSlide}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </section>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
