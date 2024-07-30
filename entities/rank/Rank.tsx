"use client";
import React from "react";

import { useTranslations } from "next-intl";

import "./Rank.css";

interface RankProps {
  id: number;
  iconPath: string;
  fromLevel: number | string;
  xpCount: number;
}

const Rank: React.FC<RankProps> = ({ id, iconPath, fromLevel, xpCount }) => {
  const t = useTranslations("Ranks");
  const t1 = useTranslations("LevelsSection");

  const getTitleObtainingMethod = (titleId: number) => {
    switch (titleId) {
      case 22:
        return t("viperCommandos");
      case 23:
        return t("superCitizen");
    }
  };

  return (
    <div
      className={`rank ${typeof fromLevel === "string" ? "pt-[25px] mlarge:pt-[15px] pb-[25px] mlarge:pb-[20px]" : "pt-[20px] mlarge:pt-[10px] pb-[30px] mlarge:pb-[25px]"}`}
    >
      <img src={`${iconPath}`} alt="" className="rank_Icon" />

      <p className="rank_Title">{t(`${id}Title`)}</p>

      <span className="rank_LevelBlock">
        <p className="rank_LevelBlock_Level">
          {fromLevel}{" "}
          {typeof fromLevel !== "string"
            ? t1("levelDesignation")
            : getTitleObtainingMethod(id)}
        </p>

        {typeof fromLevel !== "string" && (
          <p className="rank_LevelBlock_Experience">
            {xpCount} {t1("experienceDesignation")}
          </p>
        )}
      </span>
    </div>
  );
};

export default Rank;
