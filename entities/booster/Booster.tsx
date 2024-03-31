"use client";
import React from "react";

import "./Booster.css";

interface BoosterProps {
  iconPath: string;
  title: string;
  effect: string;
  price: number;
}

const Booster: React.FC<BoosterProps> = ({
  iconPath,
  title,
  effect,
  price,
}) => {
  return (
    <div className="boosterWidget">
      <div className="boosterWidget_Top">
        <img src={iconPath} alt="" className="boosterWidget_Top_Image" />

        <p className="boosterWidget_Top_Title">{title}</p>
      </div>

      <p className="boosterWidget_Effect">{effect}</p>

      <div className="boosterWidget_Bottom">
        <p className="boosterWidget_Bottom_Text">Стоимость:</p>

        <p className="boosterWidget_Bottom_Number">{price}</p>

        <img
          src="/static/Resources/MedalIcon.svg"
          alt=""
          className="boosterWidget_Bottom_Image"
        />
      </div>
    </div>
  );
};

export default Booster;
