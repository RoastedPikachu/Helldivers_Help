"use client";
import React, { useState, useEffect } from "react";

import { planetsStore } from "@/store/PlanetsStore";

import "./ActiveCampaign.css";

interface ActiveCampaignProps {
  planetIndex: number;
  fraction: string;
  percentage: number;
  playersCount: number;
  isDefense: boolean;
}

const ActiveCampaign: React.FC<ActiveCampaignProps> = ({
  planetIndex,
  fraction,
  percentage,
  playersCount,
  isDefense,
}) => {
  const [targetCampaignPlanet, setTargetCampaignPlanet] = useState({} as any);

  const getEnemyIcon = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "/static/GeneralIcons/TerminidsIcon.svg";
    }
    return "/static/GeneralIcons/AutomatonsIcon.svg";
  };

  const getEnemyBorderColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "border-[#ffc000]";
    }
    return "border-[#ff6161]";
  };

  const getEnemyBgColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "bg-[#ffc000]";
    }
    return "bg-[#ff6161]";
  };

  const getLiberationWidth = (isEnemy: boolean) => {
    if (isEnemy) {
      return 100 - percentage;
    }
    return percentage;
  };

  useEffect(() => {
    setTargetCampaignPlanet(
      Object.values(planetsStore.planets)[planetIndex + 1],
    );
  }, []);
  return (
    <div className="rootActiveCampaignWidget">
      <div className="rootActiveCampaignWidget_Top">
        <img
          src={`${getEnemyIcon()}`}
          alt=""
          className="rootActiveCampaignWidget_Top_Icon"
        />

        <h4 className="rootActiveCampaignWidget_Top_Title">
          {targetCampaignPlanet.name?.toUpperCase()}
        </h4>
      </div>

      <div className="rootActiveCampaignWidget_Center">
        <img
          src={`${targetCampaignPlanet.biome?.imagePath}`}
          alt=""
          className="rootActiveCampaignWidget_Center_Image"
        />

        <div className="rootActiveCampaignWidget_Center_WeatherConditions_Block">
          {targetCampaignPlanet.weatherConditions?.map(
            (weatherCondition: any) => (
              <div
                key={weatherCondition.id}
                className="rootActiveCampaignWidget_Center_WeatherConditions_Block_ImageWrapper"
              >
                <img
                  src={`${weatherCondition.iconPath}`}
                  alt=""
                  className="rootActiveCampaignWidget_Center_WeatherConditions_Block_ImageWrapper_Image"
                />
              </div>
            ),
          )}
        </div>
      </div>

      <div className="rootActiveCampaignWidget_Liberation">
        <div
          className={`rootActiveCampaignWidget_Liberation_Wrapper ${getEnemyBorderColor()}`}
        >
          <div
            style={{ width: `${getLiberationWidth(false)}%` }}
            className="rootActiveCampaignWidget_Liberation_Wrapper_Left"
          ></div>

          <div
            style={{ width: `${getLiberationWidth(true)}%` }}
            className={`rootActiveCampaignWidget_Liberation_Wrapper_Right ${getEnemyBgColor()}`}
          ></div>
        </div>
      </div>

      <div className="rootActiveCampaignWidget_Bottom">
        <div className="rootActiveCampaignWidget_Bottom_Wrapper">
          <img
            src="/static/GeneralIcons/HelldiverIcon.png"
            alt=""
            className="rootActiveCampaignWidget_Bottom_Wrapper_Icon"
          />

          <p className="rootActiveCampaignWidget_Bottom_Wrapper_NumberText">
            {playersCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;
