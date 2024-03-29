"use client";
import React, { useState } from "react";

import "./Mission.css";

interface MissionProps {
  imagePath: string;
  title: string;
  description: string;
}

const Mission: React.FC<MissionProps> = ({ imagePath, title, description }) => {
  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);

  return (
    <div className="rootShipModuleBlock">
      <div
        className={`rootShipModuleBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <div className="flex items-center ">
          <div className="flex justify-center items-center p-[2.5px] w-[55px] h-[55px] bg-[#000000] border-2 border-[#2cc388] rounded-[7.5px]">
            <img src={`${imagePath}`} alt="" className="w-[40px] h-[40px]" />
          </div>

          <h4 className="rootShipModuleBlock_Top_Title">{title}</h4>
        </div>

        <button
          onClick={() => changeIsAdditionalInfoOpened((prev) => !prev)}
          className="rootShipModuleBlock_Top_Button"
        >
          <img
            src="/static/generalIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootShipModuleBlock_Top_Button_Image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {isAdditionalInfoOpened && (
        <div className="px-[30px] pb-[25px] ">
          <p className="w-[75%] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Mission;
