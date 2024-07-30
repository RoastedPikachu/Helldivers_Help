"use client";
import React from "react";

import "./Achievement.css";
import { mobileStore } from "@/store/MobileStore";
import { useTranslations } from "next-intl";

interface AchievementProps {
  id: number;
  iconPath: string;
}

const Achievement: React.FC<AchievementProps> = ({ id, iconPath }) => {
  const t = useTranslations("Achievements");

  return (
    <div className="achievementWidget">
      <div className="achievementWidget_Top">
        <img src={iconPath} alt="" className="achievementWidget_Top_Image" />

        <span className="achievementWidget_Top_Image_TextWrapper">
          <p className="achievementWidget_Top_Image_TextWrapper_Title">
            {t(`${id}Title`)}
          </p>

          {!mobileStore.isMobileDevice && (
            <p className="achievementWidget_Top_Image_TextWrapper_Description">
              {t(`${id}Description`)}
            </p>
          )}
        </span>
      </div>

      {mobileStore.isMobileDevice && (
        <p className="achievementWidget_Top_Image_TextWrapper_Description">
          {t(`${id}Description`)}
        </p>
      )}

      <p className="achievementWidget_Text">{t(`${id}AccomplishmentWay`)}</p>
    </div>
  );
};

export default Achievement;
