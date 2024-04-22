"use client";
import React, { useState, useEffect } from "react";

import { planetsStore } from "@/store/PlanetsStore";

import { timeFromNow } from "@/utils/timeFunctions";

import WeatherConditionAdditionalInfoModalWindow from "@/entities/planetsPage/weatherConditionAdditionalInfo/WeatherConditionAdditionalInfoModalWindow";

import "./ActiveCampaign.css";

interface ActiveCampaignProps {
  planetIndex: number;
  fraction: string;
  isDefense: boolean;
  expiresIn: Date;
  percentage: number;
  playersCount: number;
  planetRegenArray: any[];
  impactMultiplier: number;
}

const ActiveCampaign: React.FC<ActiveCampaignProps> = ({
  planetIndex,
  fraction,
  isDefense,
  expiresIn,
  percentage,
  playersCount,
  planetRegenArray,
  impactMultiplier,
}) => {
  const [targetCampaignPlanet, setTargetCampaignPlanet] = useState({} as any);
  const [targetWeatherConditionId, setTargetWeatherConditionId] = useState(0);

  const getEnemyIcon = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "/static/GeneralIcons/TerminidsIcon.svg";
    }
    return "/static/GeneralIcons/AutomatonsIcon.svg";
  };

  const getEnemyColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "#ffc000";
    }
    return "#ff6161";
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

  const getLiberationPerHourPercent = () => {
    const liberationSymbol =
      Number(getHelldiversRegen().toFixed(3)) >
      targetCampaignPlanet.regenPerHour
        ? "+"
        : "";

    return `${liberationSymbol}${(Number(getHelldiversRegen().toFixed(3)) - targetCampaignPlanet.regenPerHour).toFixed(3)}`;
  };

  const getHelldiversRegen = () => {
    return Number(playersCount * impactMultiplier * 0.003 - 0.08);
  };

  const getPlanetRegenPerHourPercent = () => {
    const planetRegenPerHourPercent = isDefense
      ? 4.2
      : +(
          ((planetRegenArray.find((planet) => planet.index === planetIndex)
            ?.regenPerSecond *
            3600) /
            1000000) *
          100
        ).toFixed(1);

    return !isNaN(planetRegenPerHourPercent) ? planetRegenPerHourPercent : NaN;
  };

  useEffect(() => {
    console.log(!isNaN(getPlanetRegenPerHourPercent()));

    if (!isNaN(getPlanetRegenPerHourPercent())) {
      setTargetCampaignPlanet({
        ...Object.values(planetsStore.planets)[planetIndex + 1],
        regenPerHour: getPlanetRegenPerHourPercent(),
      });
    }
  }, []);
  return (
    <div>
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
          <div className="rootActiveCampaignWidget_Center_Status">
            <img
              src={`/static/GeneralIcons/${isDefense ? "DefendIcon.svg" : "AttackIcon.svg"}`}
              alt=""
              className="rootActiveCampaignWidget_Center_Status_Icon"
            />

            <h3 className="rootActiveCampaignWidget_Center_Status_Text">
              {isDefense ? "Оборона" : "Освобождение"}
            </h3>
          </div>

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
                    onMouseEnter={() =>
                      setTargetWeatherConditionId(weatherCondition.id)
                    }
                    onMouseLeave={() => setTargetWeatherConditionId(0)}
                    className="rootActiveCampaignWidget_Center_WeatherConditions_Block_ImageWrapper_Image"
                  />

                  <WeatherConditionAdditionalInfoModalWindow
                    isVisible={targetWeatherConditionId === weatherCondition.id}
                    borderStyle={getEnemyBorderColor()}
                    name={weatherCondition.name}
                    description={weatherCondition.description}
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
            <span className="rootActiveCampaignWidget_Percentage_Wrapper_Left">
              <p className="rootActiveCampaignWidget_Percentage_Wrapper_Left_NumberText">
                {percentage.toFixed(3)}%
              </p>

              <p className="rootActiveCampaignWidget_Percentage_Wrapper_Left_Text">
                {isDefense ? "Защищено" : "Освобождено"}
              </p>
            </span>

            <div className="rootActiveCampaignWidget_Percentage_Wrapper_Right">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`rootActiveCampaignWidget_Percentage_Wrapper_Right_Icon ${
                  Number(getHelldiversRegen().toFixed(3)) >
                  targetCampaignPlanet.regenPerHour
                    ? "rotate-180"
                    : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.2899 33.2453V10H4L18.6087 33.2453H24.2899ZM39.7101 10H60L45.3913 33.2453H39.7101V10ZM28.3478 10H35.6522V37.3962H42.9565L32.4058 54L21.0435 37.3962H28.3478"
                  fill={
                    Number(getHelldiversRegen().toFixed(3)) >
                    targetCampaignPlanet.regenPerHour
                      ? "#46b7f8"
                      : getEnemyColor()
                  }
                />
              </svg>

              <p
                className={`rootActiveCampaignWidget_Percentage_Wrapper_Right_Text ${
                  Number(getHelldiversRegen().toFixed(3)) >
                  targetCampaignPlanet.regenPerHour
                    ? "text-[#46b7f8]"
                    : getEnemyTextColor()
                }`}
              >
                {getLiberationPerHourPercent()}% / ч.
              </p>
            </div>
          </div>
        </div>

        <div className="rootActiveCampaignWidget_Bottom">
          <div className="rootActiveCampaignWidget_Bottom_Wrapper justify-between">
            <div className="rootActiveCampaignWidget_Bottom_Wrapper_Block">
              <img
                src="/static/GeneralIcons/HelldiverIcon.png"
                alt=""
                className="rootActiveCampaignWidget_Bottom_Wrapper_Block_Icon"
              />

              <p className="rootActiveCampaignWidget_Bottom_Wrapper_Block_NumberText text-[#ffe702]">
                {playersCount}
              </p>
            </div>

            <div className="rootActiveCampaignWidget_Bottom_Wrapper_Block">
              <img
                src="/static/GeneralIcons/SuperEarthIcon.png"
                alt=""
                className="rootActiveCampaignWidget_Bottom_Wrapper_Block_Icon"
              />

              <p className="rootActiveCampaignWidget_Bottom_Wrapper_Block_NumberText text-[#46b7f8]">
                {Number(getHelldiversRegen().toFixed(3)) > 0.5
                  ? getHelldiversRegen().toFixed(3)
                  : "< 0.500"}
                %
              </p>
            </div>

            <div className="rootActiveCampaignWidget_Bottom_Wrapper_Block">
              <img
                src={`${getEnemyIcon()}`}
                alt=""
                className="rootActiveCampaignWidget_Bottom_Wrapper_Block_Icon"
              />

              <p
                className={`rootActiveCampaignWidget_Bottom_Wrapper_Block_NumberText ${getEnemyTextColor()}`}
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
