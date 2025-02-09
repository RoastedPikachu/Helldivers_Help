"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./weaponInfoSection.css";

interface WeaponInfoSectionProps {
  currentWeapon: any;
}

const WeaponInfoSection: React.FC<WeaponInfoSectionProps> = ({
  currentWeapon,
}) => {
  const t = useTranslations("weapons");
  const t1 = useTranslations("SpecificWeaponPage");

  return (
    <div className="weaponInfoSection">
      <div className="weaponInfoSection-top">
        <h1>
          {getIntlArray(t("names"))[currentWeapon ? currentWeapon.id - 1 : 0]}
        </h1>

        <div className="weaponInfoSection-top-right">
          <p className="weaponInfoSection-top-right-divider">/</p>

          <p className="weaponInfoSection-top-right-text">
            {currentWeapon
              ? getIntlArray(t("types"))[
                  currentWeapon ? currentWeapon.typeIndex - 1 : 0
                ]
              : "Weapon Type"}
          </p>
        </div>
      </div>

      <div className="weaponInfoSection-mainInfoContainer">
        {currentWeapon && currentWeapon.price !== 0 && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[0]} </h3>

            <div className="flex items-center gap-x-[10px]">
              <p className="blockNumber">
                {currentWeapon ? currentWeapon.price : "Weapon Price"}
              </p>

              {currentWeapon.price < 100 && currentWeapon.price !== 0 ? (
                <img
                  src="/static/Resources/MedalIcon.svg"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              ) : (
                currentWeapon &&
                currentWeapon.price !== 0 && (
                  <img
                    src="/static/Resources/SuperCreditIcon.svg"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                )
              )}
            </div>
          </div>
        )}

        <div className="weaponInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[1]}</h3>

          <p className="blockText">
            {
              getIntlArray(t("descriptions"))[
                currentWeapon ? currentWeapon.id - 1 : 0
              ]
            }
          </p>
        </div>

        <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[2]}</h3>

          <p className="blockNumber">
            {currentWeapon ? currentWeapon.damage : "Weapon damage"}
          </p>
        </div>

        {currentWeapon && currentWeapon.roundsPerMag && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[3]}</h3>

            <p className="blockNumber">{currentWeapon.roundsPerMag}</p>
          </div>
        )}

        {currentWeapon && currentWeapon.fireRate && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[4]}</h3>

            <p className="blockNumber">{currentWeapon.fireRate}</p>
          </div>
        )}

        {currentWeapon && currentWeapon.recoil && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[5]}</h3>

            <p className="blockNumber">{currentWeapon.recoil}</p>
          </div>
        )}

        {currentWeapon && currentWeapon.penetration && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[6]}</h3>

            <p className="blockNumber">{currentWeapon.penetration}</p>
          </div>
        )}

        {currentWeapon && currentWeapon.radius && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[7]}</h3>

            <p className="blockNumber">{currentWeapon.radius}</p>
          </div>
        )}

        {currentWeapon && currentWeapon.fuseTime && (
          <div className="weaponInfoSection-mainInfoContainer-blockWithNumber">
            <h3 className="blockTitle">{getIntlArray(t1("titles"))[8]}</h3>

            <p className="blockNumber">{currentWeapon.fuseTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeaponInfoSection;
