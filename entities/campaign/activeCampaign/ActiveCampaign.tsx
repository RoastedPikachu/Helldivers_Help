"use client";
import React, { useState, useEffect } from "react";

import { planets } from "@/data/planets";

import { timeFromNow } from "@/utils/timeFunctions";

import WeatherConditionAdditionalInfoModalWindow from "@/entities/planetsPage/weatherConditionAdditionalInfo/WeatherConditionAdditionalInfoModalWindow";

import "./ActiveCampaign.css";

interface ActiveCampaignProps {
  planetName: string;
  fraction: string;
  isDefense: boolean;
  expiresIn: Date;
  percentage: number;
  playersCount: number;
  planetRegenArray: any[];
  impactMultiplier: number;
}

const ActiveCampaign: React.FC<ActiveCampaignProps> = ({
  planetName,
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

  const [regenPerHour, setRegenPerHour] = useState(0);

  const getFractionIcon = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "/static/GeneralIcons/TerminidsIcon.svg";
    } else if (fraction.toLowerCase() == "illuminates") {
      return "/static/GeneralIcons/SuperEarthIcon.svg";
    }
    return "/static/GeneralIcons/AutomatonsIcon.svg";
  };

  const getFractionColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "#ffc000";
    } else if (fraction.toLowerCase() == "illuminates") {
      return "#6bb7ea";
    }
    return "#ff6161";
  };

  const getEnemyBorderColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "border-[#ffc000]";
    }
    return "border-[#ff6161]";
  };

  const getFractionTextColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "text-[#ffc000]";
    } else if (fraction.toLowerCase() == "illuminates") {
      return "text-[#6bb7ea]";
    }
    return "text-[#ff6161]";
  };

  const getFractionBgColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "bg-[#ffc000]";
    } else if (fraction.toLowerCase() == "illuminates") {
      return "bg-[#ac47fe]";
    }
    return "bg-[#ff6161]";
  };

  const getFractionBorderColor = () => {
    if (fraction.toLowerCase() == "terminids") {
      return "border-[#ffc000]";
    } else if (fraction.toLowerCase() == "illuminates") {
      return "border-[#ac47fe]";
    }
    return "border-[#ff6161]";
  };

  const getLiberationWidth = (isEnemy: boolean) => {
    if (isEnemy) {
      if (isDefense) {
        const expiresInPartsArray = timeFromNow(expiresIn).split(":");

        if (!isNaN(regenPerHour)) {
          return (
            ((24 * 60 -
              (Number(expiresInPartsArray[0]) * 60 +
                Number(expiresInPartsArray[1]))) /
              60) *
            regenPerHour
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
      Number(getHelldiversRegen().toFixed(3)) > regenPerHour ? "+" : "";

    return `${liberationSymbol}${(Number(getHelldiversRegen().toFixed(3)) - regenPerHour).toFixed(3)}`;
  };

  const getHelldiversRegen = () => {
    return Number(playersCount * impactMultiplier * 0.003 - 0.08);
  };

  // const getPlanetRegenPerHourPercent = () => {
  //   const planetRegenPerHourPercent = isDefense
  //     ? 4.2
  //     : +(
  //         ((planetRegenArray.find((planet) => planet.index === planetIndex)
  //           ?.regenPerSecond *
  //           3600) /
  //           1000000) *
  //         100
  //       ).toFixed(1);
  //
  //   return !isNaN(planetRegenPerHourPercent) ? planetRegenPerHourPercent : NaN;
  // };

  const getSpecificRegenPerHourString = () => {
    const percent = isNaN(regenPerHour)
      ? 0
      : regenPerHour % 1 === 0
        ? `${regenPerHour}.0`
        : regenPerHour;

    const symbol = isDefense || percent == 0 ? "" : "- ";

    return symbol + percent;
  };

  useEffect(() => {
    console.log(planetName);
    // setTargetCampaignPlanet(planets[planetIndex + 1]);

    // if (!isNaN(getPlanetRegenPerHourPercent())) {
    //   setRegenPerHour(getPlanetRegenPerHourPercent());
    // }
  }, []);
  return (
    <div className="activeCampaign">
      <div className="activeCampaign-timeLeft">
        <p className="activeCampaign-timeLeft-data">1h 46m</p>
      </div>

      <div className="innerWrapper">
        <div className="topInnerWrapper">
          <div className="activeCampaign-header">
            <img
              src={getFractionIcon()}
              alt=""
              className="activeCampaign-header-icon"
            />

            <div className="activeCampaign-header-textBlock">
              <h4
                className={`activeCampaign-header-textBlock-planetName ${getFractionTextColor()}`}
              >
                BASHYR
              </h4>

              <p
                className={`activeCampaign-header-textBlock-planetSector ${getFractionTextColor()}`}
              >
                GALLUX SECTOR
              </p>
            </div>
          </div>

          <div className="activeCampaign-biome">
            <div className="activeCampaign-biome-invasionBlock">
              <img
                src="/static/GeneralIcons/IlluminatesIcon.svg"
                alt=""
                className="w-[12px] h-[12px]"
              />

              <p className="activeCampaign-biome-invasionBlock-text">
                ОБНАРУЖЕНО ВТОРЖЕНИЕ
              </p>
            </div>

            <img
              src="/static/Biomes/SwampImage.webp"
              alt=""
              className="activeCampaign-biome-image"
            />
          </div>
        </div>

        <div className="bottomInnerWrapper">
          <div className="activeCampaign-progressionScale">
            <div
              className={`activeCampaign-progressionScale-content ${getFractionBorderColor()}`}
            >
              <div
                style={{ width: `30%` }}
                className="activeCampaign-progressionScale-content-liberated"
              />

              <div
                style={{ width: `70%` }}
                className={`activeCampaign-progressionScale-content-leftToLiberate ${getFractionBgColor()}`}
              />
            </div>
          </div>

          <div className="activeCampaign-currentStatus">
            <p className="activeCampaign-currentStatus-percentage">
              40.8505% PROTECTED
            </p>
          </div>

          <div className="activeCampaign-statistics">
            <div className="activeCampaign-statistics-helldiversCount">
              <img
                src="/static/GeneralIcons/HelldiverIcon.svg"
                alt=""
                className="activeCampaign-statistics-helldiversCount-icon"
              />

              <p className="activeCampaign-statistics-helldiversCount-number">
                3,242
              </p>
            </div>

            <div className="activeCampaign-statistics-superEarthPercentage">
              <div className="my-[15%] w-[1px] h-[70%] bg-[#333333]" />

              <img
                src="/static/GeneralIcons/SuperEarthIcon.svg"
                alt=""
                className="activeCampaign-statistics-superEarthPercentage-icon"
              />

              <p className="activeCampaign-statistics-superEarthPercentage-number">
                2.966%
              </p>

              <div className="ml-[18px] my-[15%] w-[1px] h-[70%] bg-[#333333]" />
            </div>

            <div className="activeCampaign-statistics-enemyPercentage">
              <img
                src={getFractionIcon()}
                alt=""
                className="activeCampaign-statistics-enemyPercentage-icon"
              />

              <p
                className={`activeCampaign-statistics-enemyPercentage-number ${getFractionTextColor()}`}
              >
                1.50%
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*<div className={`rootActiveCampaignWidget ${getEnemyBorderColor()}`}>*/}
      {/*  <div className="rootActiveCampaignWidget-top">*/}
      {/*    <div className="rootActiveCampaignWidget-top-left">*/}
      {/*      <img*/}
      {/*        src={`${getEnemyIcon()}`}*/}
      {/*        alt=""*/}
      {/*        className="rootActiveCampaignWidget-top-left-icon"*/}
      {/*      />*/}

      {/*      <h4*/}
      {/*        className={`rootActiveCampaignWidget-top-left-title ${getEnemyTextColor()}`}*/}
      {/*      >*/}
      {/*        {targetCampaignPlanet.name?.toUpperCase()}*/}
      {/*      </h4>*/}
      {/*    </div>*/}

      {/*    {expiresIn && (*/}
      {/*      <p*/}
      {/*        className={`rootActiveCampaignWidget-top-timeLeft ${getEnemyTextColor()}`}*/}
      {/*      >*/}
      {/*        {timeFromNow(expiresIn)}*/}
      {/*      </p>*/}
      {/*    )}*/}
      {/*  </div>*/}

      {/*  <div className="rootActiveCampaignWidget-center">*/}
      {/*    <div className="rootActiveCampaignWidget-center_Status">*/}
      {/*      <img*/}
      {/*        src={`/static/GeneralIcons/${isDefense ? "DefendIcon.svg" : "AttackIcon.svg"}`}*/}
      {/*        alt=""*/}
      {/*        className="rootActiveCampaignWidget_Center_Status_Icon"*/}
      {/*      />*/}

      {/*      <h3 className="rootActiveCampaignWidget_Center_Status_Text">*/}
      {/*        {isDefense ? "Оборона" : "Освобождение"}*/}
      {/*      </h3>*/}
      {/*    </div>*/}

      {/*    <img*/}
      {/*      src={`${targetCampaignPlanet.biome?.imagePath}`}*/}
      {/*      alt=""*/}
      {/*      className="rootActiveCampaignWidget_Center_Image"*/}
      {/*    />*/}

      {/*    <div className="rootActiveCampaignWidget_Center_WeatherConditions_Block">*/}
      {/*      {targetCampaignPlanet.weatherConditions?.map(*/}
      {/*        (weatherCondition: any) => (*/}
      {/*          <div*/}
      {/*            key={weatherCondition.id}*/}
      {/*            className="rootActiveCampaignWidget_Center_WeatherConditions_Block_ImageWrapper"*/}
      {/*          >*/}
      {/*            <img*/}
      {/*              src={`${weatherCondition.iconPath}`}*/}
      {/*              alt=""*/}
      {/*              onMouseEnter={() =>*/}
      {/*                setTargetWeatherConditionId(weatherCondition.id)*/}
      {/*              }*/}
      {/*              onMouseLeave={() => setTargetWeatherConditionId(0)}*/}
      {/*              className="rootActiveCampaignWidget_Center_WeatherConditions_Block_ImageWrapper_Image"*/}
      {/*            />*/}

      {/*            <WeatherConditionAdditionalInfoModalWindow*/}
      {/*              isVisible={targetWeatherConditionId === weatherCondition.id}*/}
      {/*              borderStyle={getEnemyBorderColor()}*/}
      {/*              name={weatherCondition.name}*/}
      {/*              description={weatherCondition.description}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        ),*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="rootActiveCampaignWidget_Liberation">*/}
      {/*    <div*/}
      {/*      className={`rootActiveCampaignWidget_Liberation_Wrapper ${isDefense ? "" : "flex"} ${getEnemyBorderColor()}`}*/}
      {/*    >*/}
      {/*      {!isDefense ? (*/}
      {/*        <>*/}
      {/*          <div*/}
      {/*            style={{ width: `${getLiberationWidth(false)}%` }}*/}
      {/*            className="rootActiveCampaignWidget_Liberation_Wrapper_Left"*/}
      {/*          ></div>*/}

      {/*          <div*/}
      {/*            style={{ width: `${getLiberationWidth(true)}%` }}*/}
      {/*            className={`rootActiveCampaignWidget_Liberation_Wrapper_Right ${getEnemyBgColor()}`}*/}
      {/*          ></div>*/}
      {/*        </>*/}
      {/*      ) : (*/}
      {/*        <>*/}
      {/*          <div*/}
      {/*            style={{ width: `${getLiberationWidth(false)}%` }}*/}
      {/*            className="w-full h-[14px] mlarge:h-[11.5px] mmedium:h-[10.25px] msmall:h-[9px] bg-[#3db8fe]"*/}
      {/*          ></div>*/}
      {/*          <div*/}
      {/*            style={{ width: `${getLiberationWidth(true)}%` }}*/}
      {/*            className={`w-full h-[14px] mlarge:h-[11.5px] mmedium:h-[10.25px] msmall:h-[9px] ${getEnemyBgColor()}`}*/}
      {/*          ></div>*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="rootActiveCampaignWidget_Percentage">*/}
      {/*    <div className="rootActiveCampaignWidget_Percentage_Wrapper">*/}
      {/*      <span className="rootActiveCampaignWidget_Percentage_Wrapper_Left">*/}
      {/*        <p className="rootActiveCampaignWidget_Percentage_Wrapper_Left_NumberText">*/}
      {/*          {percentage.toFixed(3)}%*/}
      {/*        </p>*/}

      {/*        <p className="rootActiveCampaignWidget_Percentage_Wrapper_Left_Text">*/}
      {/*          {isDefense ? "Защищено" : "Освобождено"}*/}
      {/*        </p>*/}
      {/*      </span>*/}

      {/*      <div className="rootActiveCampaignWidget_Percentage_Wrapper_Right">*/}
      {/*        <svg*/}
      {/*          width="64"*/}
      {/*          height="64"*/}
      {/*          viewBox="0 0 64 64"*/}
      {/*          fill="none"*/}
      {/*          xmlns="http://www.w3.org/2000/svg"*/}
      {/*          className={`rootActiveCampaignWidget_Percentage_Wrapper_Right_Icon ${*/}
      {/*            Number(getHelldiversRegen().toFixed(3)) > regenPerHour*/}
      {/*              ? "rotate-180"*/}
      {/*              : ""*/}
      {/*          }`}*/}
      {/*        >*/}
      {/*          <path*/}
      {/*            fillRule="evenodd"*/}
      {/*            clipRule="evenodd"*/}
      {/*            d="M24.2899 33.2453V10H4L18.6087 33.2453H24.2899ZM39.7101 10H60L45.3913 33.2453H39.7101V10ZM28.3478 10H35.6522V37.3962H42.9565L32.4058 54L21.0435 37.3962H28.3478"*/}
      {/*            fill={*/}
      {/*              Number(getHelldiversRegen().toFixed(3)) > regenPerHour*/}
      {/*                ? "#46b7f8"*/}
      {/*                : getEnemyColor()*/}
      {/*            }*/}
      {/*          />*/}
      {/*        </svg>*/}

      {/*        <p*/}
      {/*          className={`rootActiveCampaignWidget_Percentage_Wrapper_Right_Text ${*/}
      {/*            Number(getHelldiversRegen().toFixed(3)) > regenPerHour*/}
      {/*              ? "text-[#46b7f8]"*/}
      {/*              : getEnemyTextColor()*/}
      {/*          }`}*/}
      {/*        >*/}
      {/*          {getLiberationPerHourPercent()}% / ч.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="rootActiveCampaignWidget_Bottom">*/}
      {/*    <div className="rootActiveCampaignWidget_Bottom_Wrapper justify-between">*/}
      {/*      <div className="rootActiveCampaignWidget_Bottom_Wrapper_Block">*/}
      {/*        <img*/}
      {/*          src="/static/GeneralIcons/HelldiverIcon.svg"*/}
      {/*          alt=""*/}
      {/*          className="rootActiveCampaignWidget_Bottom_Wrapper_Block_Icon"*/}
      {/*        />*/}

      {/*        <p className="rootActiveCampaignWidget_Bottom_Wrapper_Block_NumberText text-[#ffe702]">*/}
      {/*          {playersCount.toLocaleString("ru")}*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="rootActiveCampaignWidget_Bottom_Wrapper_Block">*/}
      {/*        <img*/}
      {/*          src="/static/GeneralIcons/SuperEarthIcon.png"*/}
      {/*          alt=""*/}
      {/*          className="rootActiveCampaignWidget_Bottom_Wrapper_Block_Icon"*/}
      {/*        />*/}

      {/*        <p className="rootActiveCampaignWidget_Bottom_Wrapper_Block_NumberText text-[#46b7f8]">*/}
      {/*          {Number(getHelldiversRegen().toFixed(3)) > 0.5*/}
      {/*            ? getHelldiversRegen().toFixed(3)*/}
      {/*            : "< 0.500"}*/}
      {/*          %*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="rootActiveCampaignWidget_Bottom_Wrapper_Block">*/}
      {/*        <img*/}
      {/*          src={`${getEnemyIcon()}`}*/}
      {/*          alt=""*/}
      {/*          className="rootActiveCampaignWidget_Bottom_Wrapper_Block_Icon"*/}
      {/*        />*/}

      {/*        <p*/}
      {/*          className={`rootActiveCampaignWidget_Bottom_Wrapper_Block_NumberText ${getEnemyTextColor()}`}*/}
      {/*        >*/}
      {/*          {getSpecificRegenPerHourString()}%*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ActiveCampaign;
