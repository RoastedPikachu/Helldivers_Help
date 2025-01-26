"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./achievement.css";

interface AchievementProps {
  id: number;
  iconPath: string;
}

const Achievement: React.FC<AchievementProps> = ({ id, iconPath }) => {
  const t = useTranslations("Achievements");

  return (
    <div className="achievementWidget">
      <div className="achievementWidget-top">
        <img src={iconPath} alt="" className="achievementWidget-top-image" />

        <span className="achievementWidget-top-image-textWrapper">
          <p className="achievementWidget-top-image-textWrapper-title">
            {getIntlArray(t("titles"))[id - 1]}
          </p>

          <p className="achievementWidget-top-image-textWrapper-description desktop">
            {getIntlArray(t("descriptions"))[id - 1]}
          </p>
        </span>
      </div>

      <p className="achievementWidget-top-image-textWrapper-description mobile">
        {getIntlArray(t("descriptions"))[id - 1]}
      </p>

      <p className="achievementWidget-text">
        {getIntlArray(t("accomplishmentWays"))[id - 1]}
      </p>
    </div>
  );
};

export default Achievement;
