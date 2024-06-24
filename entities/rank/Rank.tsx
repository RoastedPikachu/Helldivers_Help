"use client";
import React from "react";

import "./Rank.css";

interface RankProps {
  iconPath: string;
  title: string;
  fromLevel: number | string;
  xpCount: number;
}

const Rank: React.FC<RankProps> = ({ iconPath, title, fromLevel, xpCount }) => {
  return (
    <div
      className={`rank ${typeof fromLevel === "string" ? "pt-[25px] mlarge:pt-[15px] pb-[25px] mlarge:pb-[20px]" : "pt-[20px] mlarge:pt-[10px] pb-[30px] mlarge:pb-[25px]"}`}
    >
      <img src={`${iconPath}`} alt="" className="rank_Icon" />

      <p className="rank_Title">{title}</p>

      <span className="rank_LevelBlock">
        <p className="rank_LevelBlock_Level">
          {fromLevel} {typeof fromLevel !== "string" && "уровень"}
        </p>

        {typeof fromLevel !== "string" && (
          <p className="rank_LevelBlock_Experience">{xpCount} опыта</p>
        )}
      </span>
    </div>
  );
};

export default Rank;
