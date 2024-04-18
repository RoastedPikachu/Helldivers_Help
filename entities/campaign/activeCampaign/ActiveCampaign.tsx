"use client";
import React, { useState, useEffect } from "react";

import { planetsStore } from "@/store/PlanetsStore";

import { timeFromNow } from "@/utils/timeFunctions";

import "./ActiveCampaign.css";

interface ActiveCampaignProps {
  planetIndex: number;
  fraction: string;
  percentage: number;
  playersCount: number;
  planetRegenArray: any[];
  isDefense: boolean;
  expiresIn: Date;
}

const ActiveCampaign: React.FC<ActiveCampaignProps> = ({
  planetIndex,
  fraction,
  percentage,
  playersCount,
  planetRegenArray,
  isDefense,
  expiresIn,
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

  const getEnemyTextColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "text-[#ffc000]";
    }
    return "text-[#ff6161]";
  };

  const getEnemyBgColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "bg-[#ffc000]";
    }
    return "bg-[#ff6161]";
  };

  const getLiberationWidth = (isEnemy: boolean) => {
    if (isEnemy) {
      if (isDefense) {
        const expiresInPartsArray = timeFromNow(expiresIn).split(":");

        if (!isNaN(targetCampaignPlanet.regenPerHour)) {
          return (
            ((24 * 60 -
              (Number(expiresInPartsArray[0]) * 60 +
                Number(expiresInPartsArray[1]))) /
              60) *
            targetCampaignPlanet.regenPerHour
          );
        }
      } else {
        return 100 - percentage;
      }
    }

    return percentage;
  };

  useEffect(() => {
    const regenPerHour = isDefense
      ? 4.2
      : +(
          ((planetRegenArray.find((planet) => planet.index === planetIndex)
            ?.regenPerSecond *
            3600) /
            1000000) *
          100
        ).toFixed(1);

    setTargetCampaignPlanet({
      ...Object.values(planetsStore.planets)[planetIndex + 1],
      regenPerHour: regenPerHour,
    });
  }, []);
  return (
    <div>
      <h3 className="widgetStatus">{isDefense ? "Оборона" : "Освобождение"}</h3>

      <div className={`rootActiveCampaignWidget ${getEnemyBorderColor()}`}>
        <div className="rootActiveCampaignWidget_Top">
          <div className="rootActiveCampaignWidget_Top_Left">
            <img
              src={`${getEnemyIcon()}`}
              alt=""
              className="rootActiveCampaignWidget_Top_Left_Icon"
            />

            <h4
              className={`rootActiveCampaignWidget_Top_Left_Title ${getEnemyTextColor()}`}
            >
              {targetCampaignPlanet.name?.toUpperCase()}
            </h4>
          </div>

          {expiresIn && (
            <p
              className={`rootActiveCampaignWidget_Top_TimeLeft ${getEnemyTextColor()}`}
            >
              {timeFromNow(expiresIn)}
            </p>
          )}
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
            className={`rootActiveCampaignWidget_Liberation_Wrapper ${isDefense ? "" : "flex"} ${getEnemyBorderColor()}`}
          >
            {!isDefense ? (
              <>
                <div
                  style={{ width: `${getLiberationWidth(false)}%` }}
                  className="rootActiveCampaignWidget_Liberation_Wrapper_Left"
                ></div>

                <div
                  style={{ width: `${getLiberationWidth(true)}%` }}
                  className={`rootActiveCampaignWidget_Liberation_Wrapper_Right ${getEnemyBgColor()}`}
                ></div>
              </>
            ) : (
              <>
                <div
                  style={{ width: `${getLiberationWidth(false)}%` }}
                  className="w-full h-[14px] bg-[#3db8fe]"
                ></div>
                <div
                  style={{ width: `${getLiberationWidth(true)}%` }}
                  className={`w-full h-[14px] ${getEnemyBgColor()}`}
                ></div>
              </>
            )}
          </div>
        </div>

        <div className="rootActiveCampaignWidget_Percentage">
          <div className="rootActiveCampaignWidget_Percentage_Wrapper">
            <p className="rootActiveCampaignWidget_Percentage_Wrapper_NumberText">
              {percentage.toFixed(3)}%
            </p>

            <p className="rootActiveCampaignWidget_Percentage_Wrapper_Text">
              {isDefense ? "Защищено" : "Освобождено"}
            </p>
          </div>
        </div>

        <div className="rootActiveCampaignWidget_Bottom">
          <div className="rootActiveCampaignWidget_Bottom_Wrapper justify-between">
            <div className="flex items-center">
              <img
                src="/static/GeneralIcons/HelldiverIcon.png"
                alt=""
                className="rootActiveCampaignWidget_Bottom_Wrapper_Icon"
              />

              <p className="rootActiveCampaignWidget_Bottom_Wrapper_NumberText text-[#ffe702]">
                {playersCount}
              </p>
            </div>

            <div className="flex items-center">
              <img
                src={`${getEnemyIcon()}`}
                alt=""
                className="rootActiveCampaignWidget_Bottom_Wrapper_Icon"
              />

              <p
                className={`rootActiveCampaignWidget_Bottom_Wrapper_NumberText ${getEnemyTextColor()}`}
              >
                {isDefense ? "" : "- "}
                {isNaN(targetCampaignPlanet.regenPerHour)
                  ? 0
                  : targetCampaignPlanet.regenPerHour % 1 === 0
                    ? `${targetCampaignPlanet.regenPerHour}.0`
                    : targetCampaignPlanet.regenPerHour}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;
