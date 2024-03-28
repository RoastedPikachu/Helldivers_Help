"use client";
import React, { useState } from "react";

import "./Planet.css";
import WeatherConditionAdditionalInfo from "@/entities/weatherConditionAdditionalInfo/WeatherConditionAdditionalInfo";

interface PlanetProps {
  name: string;
  biome: any;
  weatherConditions: any;
}

const Planet: React.FC<PlanetProps> = ({ name, biome, weatherConditions }) => {
  const [targetWeatherConditionId, setTargetWeatherConditionId] = useState(0);

  return (
    <div className="planetWidget">
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
          <div className="planetWidget_WeatherConditions_Container_ImageWrapper">
            <img
              key={weatherCondition.id}
              src={`${weatherCondition.iconPath}`}
              alt=""
              onMouseEnter={() =>
                setTargetWeatherConditionId(weatherCondition.id)
              }
              onMouseLeave={() => setTargetWeatherConditionId(0)}
              className="planetWidget_WeatherConditions_Container_ImageWrapper_Image"
            />

            <WeatherConditionAdditionalInfo
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
