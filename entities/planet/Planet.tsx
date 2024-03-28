"use client";
import React from "react";

import "./Planet.css";

interface PlanetProps {
  name: string;
  biome: any;
  weatherConditions: any;
}

const Planet: React.FC<PlanetProps> = ({ name, biome, weatherConditions }) => {
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
        {weatherConditions.map((weatherCondition) => (
          <img
            key={weatherCondition.id}
            src={`${weatherCondition.iconPath}`}
            alt=""
            className="planetWidget_WeatherConditions_Container_Image"
          />
        ))}
      </div>
    </div>
  );
};

export default Planet;
