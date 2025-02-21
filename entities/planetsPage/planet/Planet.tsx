"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { planetsStore } from "@/store/PlanetsStore";
import { slidersStore } from "@/store/SlidersStore";

import { Tooltip } from "antd";

import WeatherConditionAdditionalInfoModalWindow from "@/entities/planetsPage/weatherConditionAdditionalInfo/WeatherConditionAdditionalInfoModalWindow";

import "./planet.css";

interface PlanetProps {
  id: number;
  biome: any;
  weatherConditions: any;
  sector: any;
}

const Planet: React.FC<PlanetProps> = ({
  id,
  biome,
  weatherConditions,
  sector,
}) => {
  const t = useTranslations("planets");
  const t1 = useTranslations("weatherConditions");

  const [targetWeatherConditionId, setTargetWeatherConditionId] = useState(0);

  const handleCurrentPlanetInfoChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    planetsStore.changeCurrentPlanetInfo(id, sector);
  };
  return (
    <div
      onClick={() => handleCurrentPlanetInfoChange()}
      className="planetWidget"
    >
      {biome?.imagePath ? (
        <img src={`${biome.imagePath}`} alt="" className="planetWidget-image" />
      ) : (
        <img
          src="/static/Biomes/BlankImage.png"
          alt=""
          className="planetWidget-image"
        />
      )}

      <p className="planetWidget-title">{getIntlArray(t("names"))[id - 1]}</p>

      <div className="planetWidget-weatherConditions-container">
        {weatherConditions.map((weatherCondition: any) => (
          <div
            key={weatherCondition.id}
            className="planetWidget-weatherConditions-container-imageWrapper"
          >
            <Tooltip
              placement="bottom"
              title={
                getIntlArray(t1("names"))[weatherCondition.id - 1] +
                "\n" +
                getIntlArray(t1("descriptions"))[weatherCondition.id - 1]
              }
              arrow={true}
              overlayStyle={{ whiteSpace: "pre-line" }}
              overlayInnerStyle={{ textAlign: "center" }}
            >
              <img
                src={`${weatherCondition.iconPath}`}
                alt=""
                onMouseEnter={() =>
                  setTargetWeatherConditionId(weatherCondition.id)
                }
                onMouseLeave={() => setTargetWeatherConditionId(0)}
                className="planetWidget-weatherConditions-container-imageWrapper-image"
              />
            </Tooltip>

            {/*<WeatherConditionAdditionalInfoModalWindow*/}
            {/*  isVisible={targetWeatherConditionId === weatherCondition.id}*/}
            {/*  borderStyle={"border-theme"}*/}
            {/*  name={weatherCondition.name}*/}
            {/*  description={weatherCondition.description}*/}
            {/*/>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planet;
