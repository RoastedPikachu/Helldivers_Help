"use client";
import React, { useState } from "react";

import "./Stratagem.css";

interface StratagemProps {
  iconPath: string;
  title: string;
}

const Stratagem: React.FC<StratagemProps> = ({ iconPath, title }) => {
  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);

  return (
    <div className="rootShipModuleBlock">
      <div
        className={`rootShipModuleBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <div className="rootShipModuleBlock_Top_Left">
          <img
            src={`${iconPath}`}
            alt=""
            className="rootShipModuleBlock_Top_Left_ImageWrapper_Image"
          />

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
    </div>
  );
};

export default Stratagem;
