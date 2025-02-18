"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./capeInfoSection.css";

interface CapeInfoSectionProps {
  currentCape: any;
}

const CapeInfoSection: React.FC<CapeInfoSectionProps> = ({ currentCape }) => {
  const t = useTranslations("capes");
  const t1 = useTranslations("SpecificCapePage");

  return (
    <div className="capeInfoSection">
      <div className="capeInfoSection-top">
        <h1>
          {getIntlArray(t("names"))[currentCape ? currentCape.id - 1 : 0]}
        </h1>
      </div>

      <div className="capeInfoSection-mainInfoContainer">
        {currentCape && currentCape.price !== 0 && (
          <div className="capeInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[0]} </h3>

            <div className="flex items-center gap-x-[10px]">
              <p className="blockNumber">
                {currentCape ? currentCape.price : "Armor Price"}
              </p>

              {currentCape.price < 50 && currentCape.price !== 0 ? (
                <img
                  src="/static/Resources/MedalIcon.svg"
                  alt=""
                  className="w-[30px] mmedium:w-[25px] msmall:w-[20px] h-[30px] mmedium:h-[25px] msmall:h-[20px]"
                />
              ) : (
                currentCape &&
                currentCape.price !== 0 && (
                  <img
                    src="/static/Resources/SuperCreditIcon.svg"
                    alt=""
                    className="w-[30px] mmedium:w-[25px] msmall:w-[20px] h-[30px] mmedium:h-[25px] msmall:h-[20px]"
                  />
                )
              )}
            </div>
          </div>
        )}

        <div className="capeInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[1]}</h3>

          <p className="blockText">
            {
              getIntlArray(t("descriptions"))[
                currentCape ? currentCape.id - 1 : 0
              ]
            }
          </p>
        </div>

        <div className="capeInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[2]}</h3>

          <p className="blockNumber">
            {currentCape ? currentCape.armorRating : "Cape rating"}
          </p>
        </div>

        <div className="capeInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[3]}</h3>

          <p className="blockNumber">
            {currentCape ? currentCape.speed : "Cape speed"}
          </p>
        </div>

        <div className="capeInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[4]}</h3>

          <p className="blockNumber">
            {currentCape ? currentCape.staminaRegen : "Cape stamina regen"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapeInfoSection;
