"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { weaponsStore } from "@/store/WeaponsStore";

import "./CurrentWeapon.css";

const CurrentWeapon = observer(() => {
  return (
    <Observer>
      {() => (
        <div className="currentWeapon_Window">
          <div className="currentWeapon_Window_DarkBg"></div>

          <div className="currentWeapon_Window_Modal">
            <button
              onClick={() => weaponsStore.clearCurrentWeapon()}
              className="currentWeapon_Window_Modal_CloseButton"
            >
              <img
                src="/static/generalIcons/CloseIcon.svg"
                alt=""
                className="currentWeapon_Window_Modal_CloseButton_Image"
              />
            </button>

            <div className="currentWeapon_Window_Modal_Top">
              <div className="currentWeapon_Window_Modal_Top_ImageWrapper">
                <img
                  src={weaponsStore.currentWeapon.imagePath}
                  alt=""
                  className={`currentWeapon_Window_Modal_Top_ImageWrapper_Image ${weaponsStore.currentWeapon.fireRate ? "" : "scale-[0.6]"}`}
                />
              </div>

              <div className="currentWeapon_Window_Modal_Top_TextBlock">
                <h2 className="currentWeapon_Window_Modal_Top_TextBlock_Title">
                  {weaponsStore.currentWeapon.name}
                </h2>

                <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic mt-[10px]">
                  <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                    СТОИМОСТЬ:{" "}
                  </p>

                  <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Price">
                    <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Price_Text">
                      {weaponsStore.currentWeapon.price}
                    </p>

                    <img
                      src="/static/resources/MedalIcon.svg"
                      alt=""
                      className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Price_Image"
                    />
                  </div>
                </div>

                <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                  <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                    УРОН:
                  </p>

                  <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                    {weaponsStore.currentWeapon.damage}
                  </p>
                </div>

                {weaponsStore.currentWeapon.fireRate ? (
                  <>
                    <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                        ВМЕСТИМОСТЬ:
                      </p>

                      {isFinite(weaponsStore.currentWeapon.roundsPerMag) ? (
                        <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                          {weaponsStore.currentWeapon.roundsPerMag}
                        </p>
                      ) : (
                        <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                          ∞
                        </p>
                      )}
                    </div>

                    <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                        ОТДАЧА:
                      </p>

                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                        {weaponsStore.currentWeapon.recoil}
                      </p>
                    </div>

                    <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                        СКОРОСТРЕЛЬНОСТЬ:
                      </p>

                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                        {weaponsStore.currentWeapon.fireRate}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                        ВРЕМЯ ВЗВЕДЕНИЯ:
                      </p>

                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                        {weaponsStore.currentWeapon.fuseTime}
                      </p>
                    </div>

                    <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                        ПРОБИВАЕМОСТЬ:
                      </p>

                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                        {weaponsStore.currentWeapon.penetration}
                      </p>
                    </div>

                    <div className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic">
                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Name">
                        РАДИУС:
                      </p>

                      <p className="currentWeapon_Window_Modal_Top_TextBlock_Characteristic_Text">
                        {weaponsStore.currentWeapon.radius}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="currentWeapon_Window_Modal_Bottom">
              <div className="currentWeapon_Window_Modal_Bottom_Top">
                <h3 className="currentWeapon_Window_Modal_Bottom_Top_Title">
                  ОПИСАНИЕ:
                </h3>

                <p className="currentWeapon_Window_Modal_Bottom_Top_Text">
                  {weaponsStore.currentWeapon.description}
                </p>
              </div>

              {weaponsStore.currentWeapon.fireRate && (
                <div className="currentWeapon_Window_Modal_Bottom_Bottom">
                  <div className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Title">
                      КОЛ-ВО МАГАЗИНОВ:
                    </p>

                    {isFinite(weaponsStore.currentWeapon.magsCount) ? (
                      <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                        {weaponsStore.currentWeapon.magsCount}
                      </p>
                    ) : (
                      <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                        ∞
                      </p>
                    )}
                  </div>

                  <div className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Title">
                      ВСЕГО ПАТРОНОВ:
                    </p>

                    {isFinite(weaponsStore.currentWeapon.totalRounds) ? (
                      <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                        {weaponsStore.currentWeapon.totalRounds}
                      </p>
                    ) : (
                      <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                        ∞
                      </p>
                    )}
                  </div>

                  <div className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Title">
                      ВСЕГО УРОНА:
                    </p>

                    {isFinite(weaponsStore.currentWeapon.totalDamage) ? (
                      <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                        {weaponsStore.currentWeapon.totalDamage}
                      </p>
                    ) : (
                      <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                        ∞
                      </p>
                    )}
                  </div>

                  <div className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Title">
                      УРОН В МИНУТУ:
                    </p>

                    <p className="currentWeapon_Window_Modal_Bottom_Bottom_TextBlock_Text">
                      {weaponsStore.currentWeapon.dpm}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
});

export default CurrentWeapon;
