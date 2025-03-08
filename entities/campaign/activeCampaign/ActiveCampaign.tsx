"use client";
import React, { useState, useEffect } from "react";

import { planets } from "@/data/planets";

import { calculateTimePercentage, timeFromNow } from "@/utils/timeFunctions";

import WeatherConditionAdditionalInfoModalWindow from "@/entities/planetsPage/weatherConditionAdditionalInfo/WeatherConditionAdditionalInfoModalWindow";

import "./ActiveCampaign.css";
import { useParams } from "next/navigation";
import { getIntlArray } from "@/utils/generalFunctions";
import { useTranslations } from "next-intl";

interface ActiveCampaignProps {
  campaign: any;
  event: any;
  totalPlayers: number;
  planetRegenArray: any[];
  impactMultiplier: number;
}

const ActiveCampaign: React.FC<ActiveCampaignProps> = ({
  campaign,
  event,
  totalPlayers,
  planetRegenArray,
  impactMultiplier,
}) => {
  const params = useParams();

  const t = useTranslations("planets");
  const t1 = useTranslations("sectors");
  const t2 = useTranslations("WarPage");

  const [targetPlanet, setTargetPlanet] = useState({} as any);
  const [targetWeatherConditionId, setTargetWeatherConditionId] = useState(0);

  const [regenPerHour, setRegenPerHour] = useState(0);

  const getStatusIcon = () => {
    if (campaign?.faction.toLowerCase() === "illuminates") {
      return "/static/GeneralIcons/InvasionIcon.png";
    } else if (campaign?.defense) {
      return "/static/GeneralIcons/DefendIcon.svg";
    }

    return "/static/GeneralIcons/AttackIcon.svg";
  };

  const getStatusText = () => {
    if (params.locale === "ru") {
      if (campaign?.faction.toLowerCase() === "illuminates") {
        return "ВТОРЖЕНИЕ";
      } else if (campaign?.defense) {
        return "ОБОРОНА";
      }

      return "ОСВОБОЖДЕНИЕ";
    } else {
      if (campaign?.faction.toLowerCase() === "illuminates") {
        return "INVASION";
      } else if (campaign?.defense) {
        return "DEFENSE";
      }

      return "LIBERATION";
    }
  };

  const getBottomStatusText = () => {
    if (params.locale === "ru") {
      if (campaign?.faction.toLowerCase() === "illuminates") {
        return "ОГРАЖДЕНО";
      } else if (campaign?.defense) {
        return "ЗАЩИЩЕНО";
      }

      return "ОСВОБОЖДЕНО";
    } else {
      if (campaign?.faction.toLowerCase() === "illuminates") {
        return "PROTECTED";
      } else if (campaign?.defense) {
        return "DEFENDED";
      }

      return "LIBERATED";
    }
  };

  const getFractionIcon = () => {
    if (campaign?.faction.toLowerCase() == "terminids") {
      return "/static/GeneralIcons/TerminidsIcon.svg";
    } else if (campaign?.faction.toLowerCase() == "illuminates") {
      return "/static/GeneralIcons/SuperEarthIcon.svg";
    }
    return "/static/GeneralIcons/AutomatonsIcon.svg";
  };

  const getTargetPlanet = () => {
    setTargetPlanet(
      planets.find(
        (item) => item.devName.toLowerCase() === campaign.name.toLowerCase(),
      ),
    );
  };

  const getFractionColor = () => {
    if (campaign?.faction.toLowerCase() == "terminids") {
      return "#ffc000";
    } else if (campaign?.faction.toLowerCase() == "illuminates") {
      return "#6bb7ea";
    }
    return "#ff6161";
  };

  const getEnemyBorderColor = () => {
    if (campaign?.faction.toLowerCase() == "terminids") {
      return "border-[#ffc000]";
    }
    return "border-[#ff6161]";
  };

  const getFractionTextColor = () => {
    if (campaign?.faction.toLowerCase() == "terminids") {
      return "text-[#ffc000]";
    } else if (campaign?.faction.toLowerCase() == "illuminates") {
      return "text-[#6bb7ea]";
    }
    return "text-[#ff6161]";
  };

  const getFractionBgColor = () => {
    if (campaign?.faction.toLowerCase() == "terminids") {
      return "bg-[#ffc000]";
    } else if (campaign?.faction.toLowerCase() == "illuminates") {
      return "bg-[#ac47fe]";
    }
    return "bg-[#ff6161]";
  };

  const getFractionBorderColor = () => {
    if (campaign?.faction.toLowerCase() == "terminids") {
      return "border-[#ffc000]";
    } else if (campaign?.faction.toLowerCase() == "illuminates") {
      return "border-[#ac47fe]";
    }
    return "border-[#ff6161]";
  };

  const getLiberationWidth = () => {
    return calculateTimePercentage(
      campaign.expireDateTime,
      event?.expireTime,
      event?.startTime,
    );
  };

  const getLiberationPerHourPercent = () => {
    const liberationSymbol =
      Number(getHelldiversRegen().toFixed(3)) > regenPerHour ? "+" : "";

    if (Number(getHelldiversRegen().toFixed(3)) - regenPerHour < 0) {
      const result = 0;

      return result.toFixed(3);
    }

    return `${liberationSymbol}${(Number(getHelldiversRegen().toFixed(3)) - regenPerHour).toFixed(3)}`;
  };

  const getHelldiversRegen = () => {
    return Number(campaign.players * impactMultiplier * 0.003 - 0.08);
  };

  const getPlanetRegenPerHourPercent = () => {
    const planetRegenPerHourPercent = +(
      ((planetRegenArray.find((planet) => planet.index === campaign.planetIndex)
        ?.regenPerSecond *
        3600) /
        1000000) *
      100
    ).toFixed(1);

    return !isNaN(planetRegenPerHourPercent) ? planetRegenPerHourPercent : NaN;
  };

  const getSpecificRegenPerHourString = () => {
    const percent = isNaN(regenPerHour)
      ? 0
      : regenPerHour % 1 === 0
        ? `${regenPerHour}.0`
        : regenPerHour;

    return Number(percent).toFixed(2);
  };

  const getTimeLeft = () => {
    const seconds = Math.floor(campaign.expireDateTime / 1000);

    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);

    return `${hours} ч ${minutes} мин`;
  };

  useEffect(() => {
    getTargetPlanet();
    if (!isNaN(getPlanetRegenPerHourPercent())) {
      setRegenPerHour(getPlanetRegenPerHourPercent());
    }
  }, []);
  return (
    <div className="activeCampaign">
      <div className="activeCampaign-top">
        <div className="activeCampaign-top-status">
          <img
            src={getStatusIcon()}
            alt=""
            className="activeCampaign-top-status-icon"
          />

          <p className="activeCampaign-top-status-text">{getStatusText()}</p>
        </div>

        {(campaign.defense ||
          campaign?.faction.toLowerCase() === "illuminates") && (
          <div className="activeCampaign-top-timeLeft">
            <p className="activeCampaign-top-timeLeft-data">
              {timeFromNow(campaign.expireDateTime)}
            </p>
          </div>
        )}
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
                {getIntlArray(t("names"))[targetPlanet.id - 1]?.toUpperCase()}
              </h4>

              <p
                className={`activeCampaign-header-textBlock-planetSector ${getFractionTextColor()}`}
              >
                {params &&
                  params.locale === "ru" &&
                  getIntlArray(t2("texts"))[0]}{" "}
                {getIntlArray(t1("data"))[
                  targetPlanet.sector?.id - 1
                ]?.toUpperCase()}{" "}
                {params &&
                  params.locale === "en" &&
                  getIntlArray(t2("texts"))[0]}
              </p>
            </div>
          </div>

          <div className="activeCampaign-biome">
            {campaign?.faction.toLowerCase() === "illuminates" && (
              <div className="activeCampaign-biome-invasionBlock">
                <img
                  src="/static/GeneralIcons/IlluminatesIcon.svg"
                  alt=""
                  className="w-[12px] h-[12px]"
                />

                <p className="activeCampaign-biome-invasionBlock-text">
                  {getIntlArray(t2("texts"))[2]}
                </p>
              </div>
            )}

            <img
              src={
                Object.entries(targetPlanet).length
                  ? targetPlanet.biome.imagePath
                  : ""
              }
              alt=""
              className="activeCampaign-biome-image"
            />
          </div>
        </div>

        <div className="bottomInnerWrapper">
          <div className="activeCampaign-progressionScale">
            <div
              className={`activeCampaign-progressionScale-content ${getFractionBorderColor()} ${
                campaign.defense ||
                campaign?.faction.toLowerCase() === "illuminates"
                  ? "grid gap-y-[3px]"
                  : "flex"
              }`}
            >
              {campaign.percentage > 0 && (
                <div
                  style={{ width: `${campaign.percentage}%` }}
                  className="activeCampaign-progressionScale-content-liberated"
                />
              )}

              <div
                style={{
                  width: `${
                    campaign.defense ||
                    campaign?.faction.toLowerCase() === "illuminates"
                      ? getLiberationWidth()
                      : 100 - campaign.percentage
                  }%`,
                }}
                className={`activeCampaign-progressionScale-content-leftToLiberate ${getFractionBgColor()}`}
              />
            </div>
          </div>

          <div className="activeCampaign-currentStatus">
            <p
              className={`activeCampaign-currentStatus-percentage ${campaign.percentage === 0 ? "w-full text-[#969593] text-center font-bold" : "text-white text-left font-medium"}`}
            >
              {campaign.percentage === 0
                ? getIntlArray(t2("texts"))[1]
                : `${campaign.percentage.toFixed(4)}% ${getBottomStatusText()}`}
            </p>
          </div>

          <div className="activeCampaign-statistics">
            <div className="activeCampaign-statistics-helldiversCount">
              <p className="activeCampaign-statistics-helldiversCount-percentageOfTotal">
                {((campaign.players / totalPlayers) * 100).toFixed(0)}%
              </p>

              <img
                src="/static/GeneralIcons/HelldiverIcon.svg"
                alt=""
                className="activeCampaign-statistics-helldiversCount-icon"
              />

              <p className="activeCampaign-statistics-helldiversCount-number">
                {campaign.players}
              </p>
            </div>

            {(campaign.defense ||
              campaign?.faction.toLowerCase() === "illuminates") && (
              <div className="activeCampaign-statistics-superEarthPercentage">
                <div className="my-[15%] w-[2px] h-[70%] bg-[#333333]" />

                <p className="ml-[20px] text-white text-[0.75rem] text-center font-primary font-medium">
                  {getIntlArray(t2("texts"))[3]}
                </p>
              </div>
            )}

            {!(
              campaign.defense ||
              campaign?.faction.toLowerCase() === "illuminates"
            ) && (
              <>
                <div className="activeCampaign-statistics-superEarthPercentage">
                  <div className="my-[15%] w-[2px] h-[70%] bg-[#333333]" />

                  <img
                    src="/static/GeneralIcons/SuperEarthIcon.svg"
                    alt=""
                    className={`activeCampaign-statistics-superEarthPercentage-icon ${Number(getLiberationPerHourPercent()) === 0 ? "brightness-50" : ""}`}
                  />

                  <p
                    className={`activeCampaign-statistics-superEarthPercentage-number ${Number(getLiberationPerHourPercent()) === 0 ? "brightness-50" : ""}`}
                  >
                    {getLiberationPerHourPercent()}%
                  </p>

                  <div className="ml-[18px] my-[15%] w-[2px] h-[70%] bg-[#333333]" />
                </div>

                <div
                  className={`activeCampaign-statistics-enemyPercentage ${Number(getSpecificRegenPerHourString()) === 0 ? "brightness-50" : ""}`}
                >
                  <img
                    src={getFractionIcon()}
                    alt=""
                    className="activeCampaign-statistics-enemyPercentage-icon"
                  />

                  <p
                    className={`activeCampaign-statistics-enemyPercentage-number ${getFractionTextColor()}`}
                  >
                    {getSpecificRegenPerHourString()}%
                  </p>
                </div>
              </>
            )}
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
