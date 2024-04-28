"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { weaponsStore } from "@/store/WeaponsStore";

import "./WeaponAdditionalInfoModalWindow.css";
import "@/app/modalsSlider.css";

interface WeaponAdditionalInfoModaProps {
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
  fuseTime?: number;
  penetration?: number;
  radius?: number;
}

const WeaponAdditionalInfoModa: React.FC<WeaponAdditionalInfoModaProps> =
  observer(
    ({
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
                <div className="currentWeapon_Modal_Top_ImageWrapper">
                  <img
                    src={imagePath}
                    alt=""
                    className={`currentWeapon_Modal_Top_ImageWrapper_Image ${fireRate ? "" : "scale-[0.6]"}`}
                  />
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

                    <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                      {damage}
                    </p>
                  </div>

                  {fireRate ? (
                    <>
                      <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                          ВМЕСТИМОСТЬ:
                        </p>

                        {isFinite(roundsPerMag!) ? (
                          <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                            {roundsPerMag}
                          </p>
                        ) : (
                          <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                            ∞
                          </p>
                        )}
                      </div>

                      <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                          ОТДАЧА:
                        </p>

                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                          {recoil}
                        </p>
                      </div>

                      <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                          СКОРОСТРЕЛЬНОСТЬ:
                        </p>

                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                          {fireRate}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                          ВРЕМЯ ВЗВЕДЕНИЯ:
                        </p>

                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                          {fuseTime}
                        </p>
                      </div>

                      <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                          ПРОБИВАЕМОСТЬ:
                        </p>

                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                          {penetration}
                        </p>
                      </div>

                      <div className="currentWeapon_Modal_Top_TextBlock_Characteristic">
                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Name">
                          РАДИУС:
                        </p>

                        <p className="currentWeapon_Modal_Top_TextBlock_Characteristic_Text">
                          {radius}
                        </p>
                      </div>
                    </>
                  )}
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
