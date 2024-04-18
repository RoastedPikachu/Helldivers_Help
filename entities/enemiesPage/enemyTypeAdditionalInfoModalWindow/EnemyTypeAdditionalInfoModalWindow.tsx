"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import { fractions } from "@/data/fractions";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import {
  getSpecificAutomatonStyle,
  getSpecificTerminidStyle,
} from "@/utils/enemyTypeFunctions";

import "./EnemyTypeAdditionalInfoModalWindow.css";

interface EnemyTypeAdditionalInfoModalWindowProps {
  id: number;
  fraction: string;
  iconPath: string;
  imageStyleScale: string;
  title: string;
  description: string;
  tactics: string;
  notes: string;
}

const EnemyTypeAdditionalInfoModalWindow: React.FC<EnemyTypeAdditionalInfoModalWindowProps> =
  observer(
    ({
      id,
      fraction,
      iconPath,
      imageStyleScale,
      title,
      description,
      tactics,
      notes,
    }) => {
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

              <div className="flex">
                <div
                  className={`sliderModal_Left overflow-hidden ${fraction === fractions["2"] ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.webp')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.webp')]"}`}
                >
                  {iconPath ? (
                    <img
                      src={iconPath}
                      alt=""
                      style={{ transform: imageStyleScale }}
                      className={`w-[200px] h-[300px] ${fraction === "Автоматоны" ? getSpecificAutomatonStyle(id) : getSpecificTerminidStyle(id)}`}
                    />
                  ) : (
                    <p className="sliderModal_Left_BlankText">?</p>
                  )}
                </div>

                <div className="sliderModal_Right">
                  <h3 className="sliderModal_Right_Title">
                    <b className="sliderModal_Right_Title_Bold">
                      {fraction === "Терминиды" ? "Терминид" : "Автоматон"}
                    </b>{" "}
                    — {title}
                  </h3>

                  <span>
                    <h4 className="sliderModal_Right_SecondaryTitle">
                      Описание
                    </h4>

                    <p className="sliderModal_Right_Text">{description}</p>
                  </span>

                  {tactics && (
                    <span>
                      <h4 className="sliderModal_Right_SecondaryTitle">
                        Тактика
                      </h4>

                      <p className="sliderModal_Right_Text">{tactics}</p>
                    </span>
                  )}
                </div>
              </div>

              {notes && (
                <span>
                  <h4 className="sliderModal_Right_SecondaryTitle">Заметки</h4>

                  <p className="sliderModal_Right_Text">{notes}</p>
                </span>
              )}
            </div>
          )}
        </Observer>
      );
    },
  );

export default EnemyTypeAdditionalInfoModalWindow;
