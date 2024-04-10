"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import { fractions } from "@/data/fractions";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import { getSpecificAutomatonImageScale } from "@/utils/generalFunctions";

import "./EnemyTypeAdditionalInfoModalWindow.css";

interface EnemyTypeAdditionalInfoModalWindowProps {
  id: number;
  fraction: string;
  iconPath: string;
  title: string;
  dangerous: string;
  tactics: string;
  difficulties: string;
}

const EnemyTypeAdditionalInfoModalWindow: React.FC<EnemyTypeAdditionalInfoModalWindowProps> =
  observer(
    ({ id, fraction, iconPath, title, dangerous, tactics, difficulties }) => {
      return (
        <Observer>
          {() => (
            <div className="sliderModal">
              <button
                onClick={() => enemyTypeStore.clearCurrentEnemyType()}
                className="sliderModal_CloseButton"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="sliderModal_CloseButton_Icon"
                />
              </button>

              <div
                className={`sliderModal_Left ${fraction === fractions["2"] ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.png')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.png')]"}`}
              >
                {iconPath ? (
                  <img
                    src={iconPath}
                    alt=""
                    className={`${getSpecificAutomatonImageScale(fraction, id)}`}
                  />
                ) : (
                  <p className="sliderModal_Left_BlankText">?</p>
                )}
              </div>

              <div className="sliderModal_Right">
                <h3 className="sliderModal_Right_Title">
                  <b className="sliderModal_Right_Title_Bold">Терминид</b> —{" "}
                  {title}
                </h3>

                <span>
                  <h4 className="sliderModal_Right_SecondaryTitle">
                    Опасность
                  </h4>

                  <p className="sliderModal_Right_Text">{dangerous}</p>
                </span>

                <span>
                  <h4 className="sliderModal_Right_SecondaryTitle">Тактика</h4>

                  <p className="sliderModal_Right_Text">{tactics}</p>
                </span>

                <span>
                  <h4 className="sliderModal_Right_SecondaryTitle">
                    Где встречается
                  </h4>

                  <p className="sliderModal_Right_Text">{difficulties}</p>
                </span>
              </div>
            </div>
          )}
        </Observer>
      );
    },
  );

export default EnemyTypeAdditionalInfoModalWindow;
