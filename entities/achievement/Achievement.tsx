"use client";
import React from "react";

import "./Achievement.css";

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
    <div className="px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">
      <div className="flex">
        <img
          src={iconPath}
          alt=""
          className="w-[100px] h-[100px] rounded-[7.5px]"
        />

        <span className="mt-[-10px] ml-[20px]">
          <p className="text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
            {title}
          </p>

          <p className="mt-[10px] description">{description}</p>
        </span>
      </div>

      <p className="mt-[20px] secondaryText">{accomplishmentWay}</p>
    </div>
  );
};

export default Achievement;
