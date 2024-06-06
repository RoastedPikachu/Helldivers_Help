"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { coatsStore } from "@/store/CoatsStore";

import "./CoatAdditionalInfoModalWindow.css";

interface CoatAdditionalInfoModalWindowProps {
  imagePath: string;
  name: string;
  description: string;
  price: number;
  armorRating: number;
  speed: number;
  staminaRegen: number;
}

const CoatAdditionalInfoModalWindow: React.FC<CoatAdditionalInfoModalWindowProps> =
  observer(
    ({
      imagePath,
      name,
      description,
      price,
      armorRating,
      speed,
      staminaRegen,
    }) => {
      return (
        <Observer>
          {() => (
            <div className="sliderModal">
              <button
                onClick={() => coatsStore.clearCurrentCoatInfo()}
                className="sliderModal_CloseButton !top-[15px] !right-[15px]"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="sliderModal_CloseButton_Icon"
                />
              </button>

              <div className="currentCoat_Modal_Top">
                <div className="currentCoat_Modal_Top_ImageWrapper">
                  <img
                    src={imagePath}
                    alt=""
                    className="currentCoat_Modal_Top_ImageWrapper_Image"
                  />
                </div>

                <div className="currentCoat_Modal_Top_TextBlock">
                  <h2 className="currentCoat_Modal_Top_TextBlock_Title">
                    {name}
                  </h2>

                  <div className="currentCoat_Modal_Top_TextBlock_Characteristic flex mt-[20px] mlarge:!mt-[10px]">
                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Name">
                      СТОИМОСТЬ:{" "}
                    </p>

                    <div className="currentCoat_Modal_Top_TextBlock_Characteristic_Price">
                      <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Price_Text">
                        {price}
                      </p>

                      <img
                        src="/static/Resources/MedalIcon.svg"
                        alt=""
                        className="currentCoat_Modal_Top_TextBlock_Characteristic_Price_Image"
                      />
                    </div>
                  </div>

                  <div className="currentCoat_Modal_Top_TextBlock_Characteristic mt-[20px] mlarge:!mt-[10px]">
                    <h3 className="currentCoat_Modal_Top_TextBlock_Characteristic_Name">
                      ОПИСАНИЕ:
                    </h3>

                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Description">
                      {description}
                    </p>
                  </div>

                  <div className="currentCoat_Modal_Top_TextBlock_Characteristic flex mt-[20px] mlarge:!mt-[10px]">
                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Name">
                      РЕЙТИНГ БРОНИ:
                    </p>

                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Value">
                      {armorRating}
                    </p>
                  </div>

                  <div className="currentCoat_Modal_Top_TextBlock_Characteristic flex mt-[20px] mlarge:!mt-[10px]">
                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Name">
                      СКОРОСТЬ:
                    </p>

                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Value">
                      {speed}
                    </p>
                  </div>

                  <div className="currentCoat_Modal_Top_TextBlock_Characteristic flex mt-[20px] mlarge:!mt-[10px]">
                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Name">
                      ВОССТАНОВЛЕНИЕ ВЫНОСЛИВОСТИ:
                    </p>

                    <p className="currentCoat_Modal_Top_TextBlock_Characteristic_Value">
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

export default CoatAdditionalInfoModalWindow;
