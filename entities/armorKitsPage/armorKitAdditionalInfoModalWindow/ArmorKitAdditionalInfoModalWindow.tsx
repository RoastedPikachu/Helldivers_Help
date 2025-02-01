"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { observer, Observer } from "mobx-react-lite";

import { Bonus } from "@/utils/dataInterfaces";
import { getIntlArray } from "@/utils/generalFunctions";

import { armorStore } from "@/store/ArmorKitsStore";
import { mobileStore } from "@/store/MobileStore";

import "./armorKitAdditionalInfoModalWindow.css";

interface ArmorKitAdditionalInfoModalWindowProps {
  id: number;
  imagePath: string;
  type: string;
  obtainingMethodIndex: number;
  price: number;
  armorRating: number;
  speed: number;
  staminaRegen: number;
  bonus: Bonus;
}

const ArmorKitAdditionalInfoModalWindow: React.FC<ArmorKitAdditionalInfoModalWindowProps> =
  observer(
    ({
      id,
      imagePath,
      type,
      obtainingMethodIndex,
      price,
      armorRating,
      speed,
      staminaRegen,
      bonus,
    }) => {
      const t = useTranslations("armor");

      const getCorrectObtainingMethod = () => {
        switch (obtainingMethodIndex) {
          case 0:
            return getIntlArray(t("obtainingMethods"))[0];
          case 1:
            return getIntlArray(t("obtainingMethods"))[1];
          case 2:
            return getIntlArray(t("obtainingMethods"))[2];
          case 3:
            return getIntlArray(t("obtainingMethods"))[3];
          case 4:
            return getIntlArray(t("obtainingMethods"))[4];
          case 5:
            return getIntlArray(t("obtainingMethods"))[5];
          case 6:
            return getIntlArray(t("obtainingMethods"))[6];
          case 7:
            return getIntlArray(t("obtainingMethods"))[7];
          case 8:
            return getIntlArray(t("obtainingMethods"))[8];
          case 9:
            return getIntlArray(t("obtainingMethods"))[9];
          case 10:
            return getIntlArray(t("obtainingMethods"))[10];
          case 11:
            return getIntlArray(t("obtainingMethods"))[11];
          case 12:
            return getIntlArray(t("obtainingMethods"))[12];
          case 13:
            return getIntlArray(t("obtainingMethods"))[13];
          case 14:
            return getIntlArray(t("obtainingMethods"))[14];
          case 15:
            return getIntlArray(t("obtainingMethods"))[15];
          case 16:
            return getIntlArray(t("obtainingMethods"))[16];
          case 17:
            return getIntlArray(t("obtainingMethods"))[17];
        }
      };
      return (
        <Observer>
          {() => (
            <div className="sliderModal">
              <button
                onClick={() => armorStore.clearCurrentArmorInfo()}
                className="sliderModal_CloseButton !top-[15px] !right-[15px]"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="sliderModal_CloseButton_Icon"
                />
              </button>

              <div className="currentArmor_Modal_Top">
                <div className="currentArmor_Modal_Top_ImageWrapper">
                  <img
                    src={imagePath}
                    alt=""
                    className={`currentArmor_Modal_Top_ImageWrapper_Image`}
                  />
                </div>

                <div className="currentArmor_Modal_Top_TextBlock">
                  <h2 className="currentArmor_Modal_Top_TextBlock_Title">
                    {getIntlArray(t("names"))[id - 1]}
                  </h2>

                  <p className="text-[#ffffff] text-[1.25rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-['Exo2'] font-semibold brightness-75">
                    {type}
                  </p>

                  <div className="currentArmor_Modal_Top_TextBlock_Characteristic mt-[20px] mlarge:!mt-[10px]">
                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Name">
                      СТОИМОСТЬ:{" "}
                    </p>

                    <div className="currentArmor_Modal_Top_TextBlock_Characteristic_Price">
                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Price_Text">
                        {price}
                      </p>

                      {price < 200 && price !== 0 ? (
                        <img
                          src="/static/Resources/MedalIcon.svg"
                          alt=""
                          className="currentArmor_Modal_Top_TextBlock_Characteristic_Price_Image"
                        />
                      ) : (
                        price !== 0 && (
                          <img
                            src="/static/Resources/SuperCreditIcon.svg"
                            alt=""
                            className="currentArmor_Modal_Top_TextBlock_Characteristic_Price_Image"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {!mobileStore.isMobileDevice && (
                    <div className="mt-[10px] mlarge:mt-[10px]">
                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Name">
                        ЭФФЕКТ:
                      </p>

                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Value">
                        {bonus.name}
                      </p>

                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Description">
                        {bonus.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="currentArmor_Modal_Bottom">
                {mobileStore.isMobileDevice && (
                  <div className="mt-[10px]">
                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Name">
                      ЭФФЕКТ:
                    </p>

                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Value">
                      {bonus.name}
                    </p>

                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Description">
                      {bonus.description}
                    </p>
                  </div>
                )}

                <div className="currentArmor_Modal_Bottom_Top">
                  <h3 className="currentArmor_Modal_Bottom_Top_Title">
                    ОПИСАНИЕ:
                  </h3>

                  <p className="currentArmor_Modal_Bottom_Top_Text">
                    {getIntlArray(t("descriptions"))[id - 1]}
                  </p>
                </div>

                <div className="currentArmor_Modal_Bottom_Bottom">
                  <div className="currentArmor_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Title">
                      РЕЙТИНГ БРОНИ:
                    </p>

                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Text">
                      {armorRating}
                    </p>
                  </div>

                  <div className="currentArmor_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Title">
                      СКОРОСТЬ:
                    </p>

                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Text">
                      {speed}
                    </p>
                  </div>

                  <div className="currentArmor_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Title">
                      ВОССТАНОВЛЕНИЕ ВЫНОСЛИВОСТИ:
                    </p>

                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Text">
                      {staminaRegen}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Observer>
      );
    },
  );

export default ArmorKitAdditionalInfoModalWindow;
