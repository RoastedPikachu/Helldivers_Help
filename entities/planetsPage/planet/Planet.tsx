"use client";
import React, { useState } from "react";

import { planetsStore } from "@/store/PlanetsStore";

import WeatherConditionAdditionalInfoModalWindow from "@/entities/planetsPage/weatherConditionAdditionalInfo/WeatherConditionAdditionalInfoModalWindow";

import "./Planet.css";

interface PlanetProps {
  id: number;
  name: string;
  biome: any;
  weatherConditions: any;
  sector: any;
  handleChangeCurrentSlide: (id: number) => void;
}

const Planet: React.FC<PlanetProps> = ({
  id,
  name,
  biome,
  weatherConditions,
  sector,
  handleChangeCurrentSlide,
}) => {
  const [targetWeatherConditionId, setTargetWeatherConditionId] = useState(0);

  const handleCurrentPlanetInfoChange = () => {
    handleChangeCurrentSlide(id);

    planetsStore.changeCurrentPlanetInfo(id, sector);
  };
  return (
    <div
      onClick={() => handleCurrentPlanetInfoChange()}
      className="planetWidget"
    >
      {biome?.imagePath ? (
        <img src={`${biome.imagePath}`} alt="" className="planetWidget_Image" />
      ) : (
        <img
          src="/static/biomes/BlankImage.png"
          alt=""
          className="planetWidget_Image"
        />
      )}

      <p className="planetWidget_Title">{name}</p>

      <div className="planetWidget_WeatherConditions_Container">
        {weatherConditions.map((weatherCondition: any) => (
          <div
            key={weatherCondition.id}
            className="planetWidget_WeatherConditions_Container_ImageWrapper"
          >
            <img
              src={`${weatherCondition.iconPath}`}
              alt=""
              onMouseEnter={() =>
                setTargetWeatherConditionId(weatherCondition.id)
              }
              onMouseLeave={() => setTargetWeatherConditionId(0)}
              className="planetWidget_WeatherConditions_Container_ImageWrapper_Image"
            />

            <WeatherConditionAdditionalInfoModalWindow
              isVisible={targetWeatherConditionId === weatherCondition.id}
              name={weatherCondition.name}
              description={weatherCondition.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planet;
