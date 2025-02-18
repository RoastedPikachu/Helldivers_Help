import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./armorInfoSection.css";

interface ArmorInfoSectionProps {
  currentArmor: any;
}

const ArmorInfoSection: React.FC<ArmorInfoSectionProps> = ({
  currentArmor,
}) => {
  const t = useTranslations("armor");
  const t1 = useTranslations("SpecificArmorPage");
  const t2 = useTranslations("armorBonuses");

  return (
    <div className="armorInfoSection">
      <div className="armorInfoSection-top">
        <h1>
          {getIntlArray(t("names"))[currentArmor ? currentArmor.id - 1 : 0]}
        </h1>

        <div className="armorInfoSection-top-right">
          <p className="armorInfoSection-top-right-divider">/</p>

          <p className="armorInfoSection-top-right-text">
            {currentArmor
              ? getIntlArray(t("types"))[
                  currentArmor ? currentArmor.typeIndex : 0
                ]
              : "Armor Type"}
          </p>
        </div>
      </div>

      <div className="armorInfoSection-mainInfoContainer">
        {currentArmor && currentArmor.price !== 0 && (
          <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[0]} </h3>

            <div className="flex items-center gap-x-[10px]">
              <p className="blockNumber">
                {currentArmor ? currentArmor.price : "Armor Price"}
              </p>

              {currentArmor.price < 150 && currentArmor.price !== 0 ? (
                <img
                  src="/static/Resources/MedalIcon.svg"
                  alt=""
                  className="w-[30px] mmedium:w-[25px] msmall:w-[20px] h-[30px] mmedium:h-[25px] msmall:h-[20px]"
                />
              ) : (
                currentArmor &&
                currentArmor.price !== 0 && (
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

        <div className="armorInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[1]}</h3>

          <p className="blockText">
            {
              getIntlArray(t("descriptions"))[
                currentArmor ? currentArmor.id - 1 : 0
              ]
            }
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[2]}</h3>

          <div className="relative flex mlarge:block items-center gap-x-[20px]">
            <div className="flex items-center gap-x-[10px] mlarge:mt-[5px] mlarge:mb-[10px]">
              <img
                src={currentArmor ? currentArmor.bonus?.icon : ""}
                alt={
                  currentArmor
                    ? getIntlArray(t2("names"))[currentArmor.bonus?.id - 1]
                    : "Armor effect"
                }
                className="w-[110px] mlarge:w-[40px] h-[110px] mlarge:h-[40px]"
              />

              <p className="blockWhiteText mobile">
                {currentArmor
                  ? getIntlArray(t2("names"))[currentArmor.bonus?.id - 1]
                  : "Armor effect"}
              </p>
            </div>

            <div>
              <p className="blockWhiteText desktop">
                {currentArmor
                  ? getIntlArray(t2("names"))[currentArmor.bonus?.id - 1]
                  : "Armor effect"}
              </p>

              <p className="blockText">
                {currentArmor
                  ? getIntlArray(t2("descriptions"))[currentArmor.bonus?.id - 1]
                  : "Armor effect description"}
              </p>
            </div>
          </div>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[3]}</h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.armorRating : "Armor rating"}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[4]}</h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.speed : "Armor speed"}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[5]}</h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.staminaRegen : "Armor stamina regen"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArmorInfoSection;
