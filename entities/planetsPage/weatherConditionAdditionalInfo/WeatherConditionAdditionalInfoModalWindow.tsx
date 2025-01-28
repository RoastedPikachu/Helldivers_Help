"use client";
import React from "react";

import "./weatherConditionAdditionalInfoModalWindow.css";

interface WeatherConditionAdditionalInfoProps {
  isVisible: boolean;
  borderStyle: string;
  name: string;
  description: string;
}

const WeatherConditionAdditionalInfoModalWindow: React.FC<
  WeatherConditionAdditionalInfoProps
> = ({ isVisible, borderStyle, name, description }) => {
  return (
    <div
      className={`weatherConditionAdditionalInfoWindow desktop ${isVisible ? "top-[50px] opacity-100 z-30" : "top-[65px] opacity-0 z-[-1] cursor-default"} ${borderStyle}`}
    >
      <h3 className="weatherConditionAdditionalInfoWindow-title">{name}</h3>

      <p className="weatherConditionAdditionalInfoWindow-text">{description}</p>
    </div>
  );
};

export default WeatherConditionAdditionalInfoModalWindow;
