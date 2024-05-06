"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { weaponsStore } from "@/store/WeaponsStore";

import { getTargetRotate } from "@/utils/generalFunctions";

import "./WeaponAdditionalInfoModalWindow.css";
import "@/app/modalsSlider.css";

interface WeaponAdditionalInfoModaProps {
  id: number;
  imagePath: string;
  name: string;
  description: string;
  price: number | string;
  damage: number;
  magsCount?: number;
  roundsPerMag?: number;
  totalRounds?: number;
  recoil?: number;
  fireRate?: number;
  totalDamage?: number;
  dps?: number;
  callTime?: number;
  directions?: any[];
  features?: string[];
  fuseTime?: number;
  penetration?: number;
  radius?: number;
}

const WeaponAdditionalInfoModa: React.FC<WeaponAdditionalInfoModaProps> =
  observer(
    ({
      id,
      imagePath,
      name,
      description,
      price,
      damage,
      magsCount,
      roundsPerMag,
      totalRounds,
      recoil,
      fireRate,
      totalDamage,
      dps,
      callTime,
      directions,
      features,
      fuseTime,
      penetration,
      radius,
    }) => {
      const getPriceIcon = () => {
        if (typeof price === "string" || price === 0) {
          return "";
        } else if (price < 200) {
          return (
            <img
              src="/static/Resources/MedalIcon.svg"
              alt=""
              className="currentWeapon_Modal_Top_TextBlock_Characteristic_Price_Image"
            />
          );
        } else {
          return (
            <img
              src="/static/Resources/RequisitesIcon.svg"
              alt=""
              className="currentWeapon_Modal_Top_TextBlock_Characteristic_Price_Image"
            />
          );
        }
      };

      const getSpecificTextFields = () => {
        if (fireRate) {
          return (
            <>
              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  ВМЕСТИМОСТЬ:
                </p>

                {isFinite(roundsPerMag!) ? (
                  <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                    {roundsPerMag}
                  </p>
                ) : (
                  <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                    ∞
                  </p>
                )}
              </div>

              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  ОТДАЧА:
                </p>

                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                  {recoil}
                </p>
              </div>

              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  СКОРОСТРЕЛЬНОСТЬ:
                </p>

                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                  {fireRate}
                </p>
              </div>
            </>
          );
        } else if (directions?.length) {
          return (
            <>
              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  ВРЕМЯ ВЫЗОВА:
                </p>

                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                  <b className="mt-[-5px] font-['Insignia'] font-bold">
                    {callTime}
                  </b>{" "}
                  сек.
                </p>
              </div>
              <div className="mt-[10px] mlarge:mt-0 mlarge:mb-[10px]">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  ОСОБЕННОСТИ:
                </p>

                <span>
                  {features?.map((feature, index) => (
                    <p
                      key={index + 1}
                      className="currentWeapon_Modal_Top_TextBlock_Characteristic_Feature"
                    >
                      {feature}
                    </p>
                  ))}
                </span>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  ВРЕМЯ ВЗВЕДЕНИЯ:
                </p>

                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                  {fuseTime}
                </p>
              </div>

              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  ПРОБИВАЕМОСТЬ:
                </p>

                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                  {penetration}
                </p>
              </div>

              <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                  РАДИУС:
                </p>

                <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                  {radius}
                </p>
              </div>
            </>
          );
        }
      };
      return (
        <Observer>
          {() => (
            <div className="sliderModal">
              <button
                onClick={() => weaponsStore.clearCurrentWeaponInfo()}
                className="sliderModal_CloseButton"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="sliderModal_Modal_CloseButton_Icon"
                />
              </button>

              <div className="currentWeapon_Modal_Top">
                <div
                  className={`currentWeapon_Modal_Top_ImageWrapper ${directions ? "" : "flex justify-center items-center"} ${fuseTime ? "w-[400px] mlarge:w-full" : "w-[640px] mlarge:w-full"}`}
                >
                  <img
                    src={imagePath}
                    alt=""
                    className={`currentWeapon_Modal_Top_ImageWrapper_Image ${dps ? "scale-y-[0.7]" : directions ? "scale-[0.9]" : "scale-[0.7]"}`}
                  />

                  {directions && (
                    <div className="relative flex justify-center items-center w-full h-[calc(100%-292px)] border-t-2 border-[#2cc388]">
                      <div className="relative flex justify-around items-center py-[15px] px-[20px] w-full h-auto">
                        {directions.map((direction) => {
                          return (
                            <img
                              key={direction.id}
                              src="/static/GeneralIcons/ArrowIcon.svg"
                              alt=""
                              className={`w-[35px] mlarge:w-[30px] mmedium:w-[25px] msmall:w-[20px] h-[30px] mlarge:h-[30px] mmedium:h-[25px] msmall:h-[20px] ${getTargetRotate(direction.orientation)}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="currentWeapon_Modal_Top_TextBlock">
                  <h2 className="currentWeapon_Modal_Top_TextBlock_Title">
                    {name}
                  </h2>

                  <div className="currentWeapon_Modal_Top_TextBlock_Characteristic mt-[10px]">
                    <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                      СТОИМОСТЬ:{" "}
                    </p>

                    <div className="currentWeapon_Modal_Top_TextBlock_Characteristic_Price">
                      <p
                        className={`currentWeapon_Modal_Top_TextBlock_Characteristic_Price_Text ${typeof price !== "string" ? "font-['Insignia']" : "mt-[-4px] font-['Exo2']"}`}
                      >
                        {price}
                      </p>

                      {getPriceIcon()}
                    </div>
                  </div>

                  <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                    <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                      УРОН:
                    </p>

                    <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text insigniaNumericText">
                      {damage}
                    </p>
                  </div>

                  {getSpecificTextFields()}
                </div>
              </div>

              <div className="currentWeapon_Modal_Bottom">
                <div className="currentWeapon_Modal_Bottom_Top">
                  <h3 className="currentWeapon_Modal_Bottom_Top_Title">
                    ОПИСАНИЕ:
                  </h3>

                  <p className="currentWeapon_Modal_Bottom_Top_Text">
                    {description}
                  </p>
                </div>

                {fireRate && (
                  <div className="currentWeapon_Modal_Bottom_Bottom">
                    <div className="currentWeapon_Modal_Bottom_Bottom_TextBlock">
                      <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Title">
                        КОЛ-ВО МАГАЗИНОВ:
                      </p>

                      {isFinite(magsCount!) ? (
                        <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                          {magsCount}
                        </p>
                      ) : (
                        <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                          ∞
                        </p>
                      )}
                    </div>

                    <div className="currentWeapon_Modal_Bottom_Bottom_TextBlock">
                      <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Title">
                        ВСЕГО ПАТРОНОВ:
                      </p>

                      {isFinite(totalRounds!) ? (
                        <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                          {totalRounds}
                        </p>
                      ) : (
                        <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                          ∞
                        </p>
                      )}
                    </div>

                    <div className="currentWeapon_Modal_Bottom_Bottom_TextBlock">
                      <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Title">
                        ВСЕГО УРОНА:
                      </p>

                      {isFinite(totalDamage!) ? (
                        <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                          {totalDamage}
                        </p>
                      ) : (
                        <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                          ∞
                        </p>
                      )}
                    </div>

                    <div className="currentWeapon_Modal_Bottom_Bottom_TextBlock">
                      <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Title">
                        УРОН В СЕКУНДУ:
                      </p>

                      <p className="currentWeapon_Modal_Bottom_Bottom_TextBlock_Text">
                        {dps}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Observer>
      );
    },
  );

export default WeaponAdditionalInfoModa;
