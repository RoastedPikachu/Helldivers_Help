"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import { fractions } from "@/data/fractions";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import { getSpecificAutomatonImageScale } from "@/utils/generalFunctions";

import "./EnemyTypeAdditionalInfoModalWindow.css";

interface EnemyTypeAdditionalInfoModalWindowProps {
  rootBlockStyles: string;
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
            <div className="currentEnemyTypeModal">
              <button
                onClick={() => enemyTypeStore.clearCurrentEnemyType()}
                className="currentEnemyTypeModal_CloseButton"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="currentEnemyTypeModal_CloseButton_Icon"
                />
              </button>

              <div
                className={`currentEnemyTypeModal_Left ${fraction === fractions["2"] ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.png')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.png')]"}`}
              >
                {iconPath ? (
                  <img
                    src={iconPath}
                    alt=""
                    className={`${getSpecificAutomatonImageScale(fraction, id)}`}
                  />
                ) : (
                  <p className="currentEnemyTypeModal_Left_BlankText">?</p>
                )}
              </div>

              <div className="currentEnemyTypeModal_Right">
                <h3 className="currentEnemyTypeModal_Right_Title">
                  <b className="currentEnemyTypeModal_Right_Title_Bold">
                    Терминид
                  </b>{" "}
                  — {title}
                </h3>

                <span>
                  <h4 className="currentEnemyTypeModal_Right_SecondaryTitle">
                    Опасность
                  </h4>

                  <p className="currentEnemyTypeModal_Right_Text">
                    {dangerous}
                  </p>
                </span>

                <span>
                  <h4 className="currentEnemyTypeModal_Right_SecondaryTitle">
                    Тактика
                  </h4>

                  <p className="currentEnemyTypeModal_Right_Text">{tactics}</p>
                </span>

                <span>
                  <h4 className="currentEnemyTypeModal_Right_SecondaryTitle">
                    Где встречается
                  </h4>

                  <p className="currentEnemyTypeModal_Right_Text">
                    {difficulties}
                  </p>
                </span>
              </div>
            </div>
          )}
        </Observer>
      );
    },
  );

export default EnemyTypeAdditionalInfoModalWindow;
