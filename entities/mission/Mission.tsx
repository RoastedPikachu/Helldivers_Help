"use client";
import React, { useState } from "react";

import { TargetCount } from "@/utils/dataInterfaces";

import "./Mission.css";

interface MissionProps {
  imagePath: string;
  title: string;
  description: string;
  level?: string;
  effect?: string;
  rewardEffect?: string;
  targetMissionCompletionCount?: TargetCount[];
}

const Mission: React.FC<MissionProps> = ({
  imagePath,
  title,
  description,
  level,
  effect,
  rewardEffect,
  targetMissionCompletionCount,
}) => {
  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);

  const getSpecificId = (id: number, index: number) => {
    if (targetMissionCompletionCount?.length === 4) {
      if (targetMissionCompletionCount[index].id !== 9) {
        return `${id}-${targetMissionCompletionCount[index + 1]?.id}`;
      }
      return id;
    }
    return id;
  };
  return (
    <div className="rootShipModuleBlock">
      <div
        className={`rootShipModuleBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <div className="rootShipModuleBlock_Top_Left">
          <div className="rootShipModuleBlock_Top_Left_ImageWrapper">
            <img
              src={`${imagePath}`}
              alt=""
              className="rootShipModuleBlock_Top_Left_ImageWrapper_Image"
            />
          </div>

          <h4 className="rootShipModuleBlock_Top_Left_Title">{title}</h4>
        </div>

        <button
          onClick={() => changeIsAdditionalInfoOpened((prev) => !prev)}
          className="rootShipModuleBlock_Top_Button"
        >
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootShipModuleBlock_Top_Button_Image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootShipModuleBlock_Bottom ${isAdditionalInfoOpened ? "mt-[10px] opacity-1" : `${targetMissionCompletionCount?.length ? "mt-[-600px]" : "mt-[-150px]"} ml-[-400px] opacity-0`}`}
      >
        {description && (
          <>
            <p className="rootShipModuleBlock_Bottom_Description">
              {description}
            </p>

            <p className="rootShipModuleBlock_Bottom_Text">
              <b className="rootShipModuleBlock_Bottom_Text_Bold">
                Встречается на:{" "}
              </b>
              {level} сложности
            </p>
          </>
        )}

        {effect && (
          <>
            <p className="rootShipModuleBlock_Bottom_Text">
              <b className="rootShipModuleBlock_Bottom_Text_Bold">Эффект: </b>
              {effect}
            </p>

            <p className="rootShipModuleBlock_Bottom_Text">
              <b className="rootShipModuleBlock_Bottom_Text_Bold">
                Эффект от выполнения:{" "}
              </b>
              {rewardEffect}
            </p>
          </>
        )}

        {targetMissionCompletionCount?.length && (
          <div className="rootShipModuleBlock_Bottom_TableBlock">
            <table className="rootShipModuleBlock_Bottom_TableBlock_Table">
              <thead>
                <tr className="rootShipModuleBlock_Bottom_TableBlock_Table_TopRow">
                  <th className="rootShipModuleBlock_Bottom_TableBlock_Table_TopRow_Column pl-[20px]">
                    Сложность
                  </th>
                  <th className="rootShipModuleBlock_Bottom_TableBlock_Table_TopRow_Column">
                    Кол-во целей для завершения миссии
                  </th>
                </tr>
              </thead>

              <tbody className="rootShipModuleBlock_Bottom_TableBlock_Table_Body">
                {targetMissionCompletionCount?.map((count, index) => (
                  <tr key={count.id}>
                    <td className="rootShipModuleBlock_Bottom_TableBlock_Table_Body_Column">
                      {getSpecificId(count.id, index)}
                    </td>

                    <td className="rootShipModuleBlock_Bottom_TableBlock_Table_Body_Column">
                      {count.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mission;
