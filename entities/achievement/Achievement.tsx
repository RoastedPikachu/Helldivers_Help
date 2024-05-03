"use client";
import React from "react";

import "./Achievement.css";
import { mobileStore } from "@/store/MobileStore";

interface AchievementProps {
  iconPath: string;
  title: string;
  description: string;
  accomplishmentWay: string;
}

const Achievement: React.FC<AchievementProps> = ({
  iconPath,
  title,
  description,
  accomplishmentWay,
}) => {
  return (
    <div className="achievementWidget">
      <div className="achievementWidget_Top">
        <img src={iconPath} alt="" className="achievementWidget_Top_Image" />

        <span className="achievementWidget_Top_Image_TextWrapper">
          <p className="achievementWidget_Top_Image_TextWrapper_Title">
            {title}
          </p>

          {!mobileStore.isMobileDevice && (
            <p className="achievementWidget_Top_Image_TextWrapper_Description">
              {description}
            </p>
          )}
        </span>
      </div>

      {mobileStore.isMobileDevice && (
        <p className="achievementWidget_Top_Image_TextWrapper_Description">
          {description}
        </p>
      )}

      <p className="achievementWidget_Text">{accomplishmentWay}</p>
    </div>
  );
};

export default Achievement;
