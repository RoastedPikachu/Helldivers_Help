"use client";
import React from "react";

import "./WeatherConditionAdditionalInfoModalWindow.css";

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
      className={`weatherConditionAdditionalInfoWindow ${isVisible ? "top-[50px] opacity-100 z-30" : "top-[65px] opacity-0 cursor-default"} ${borderStyle}`}
    >
      <h3 className="weatherConditionAdditionalInfoWindow_Title">{name}</h3>

      <p className="weatherConditionAdditionalInfoWindow_Text">{description}</p>
    </div>
  );
};

export default WeatherConditionAdditionalInfoModalWindow;
