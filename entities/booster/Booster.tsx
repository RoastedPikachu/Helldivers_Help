import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./booster.css";

interface BoosterProps {
  id: number;
  iconPath: string;
  price: number;
}

const Booster: React.FC<BoosterProps> = ({ id, iconPath, price }) => {
  const t = useTranslations("boosters");

  return (
    <div className="boosterWidget">
      <div className="boosterWidget-top">
        <img src={iconPath} alt="" className="boosterWidget-top-image" />

        <p className="boosterWidget-top-title">
          {getIntlArray(t("titles"))[id - 1]}
        </p>
      </div>

      <p className="boosterWidget-effect">
        {getIntlArray(t("descriptions"))[id - 1]}
      </p>

      <div className="boosterWidget-bottom">
        <p className="boosterWidget-bottom-text">Стоимость:</p>

        <p className="boosterWidget-bottom-number">{price}</p>

        <img
          src="/static/Resources/MedalIcon.svg"
          alt=""
          className="boosterWidget-bottom-image"
        />
      </div>
    </div>
  );
};

export default Booster;
