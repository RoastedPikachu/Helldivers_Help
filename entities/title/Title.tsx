"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./title.css";

interface RankProps {
  id: number;
  iconPath: string;
  fromLevel: number | string;
  xpCount: number;
}

const Title: React.FC<RankProps> = ({ id, iconPath, fromLevel, xpCount }) => {
  const t = useTranslations("titles");
  const t1 = useTranslations("LevelsSection");

  const getTitleObtainingMethod = (titleId: number) => {
    switch (titleId) {
      case 22:
        return getIntlArray(t("obtainingMethods"))[0];
      case 23:
        return getIntlArray(t("obtainingMethods"))[1];
      case 24:
        return getIntlArray(t("obtainingMethods"))[2];
      case 25:
        return getIntlArray(t("obtainingMethods"))[3];
      case 26:
        return getIntlArray(t("obtainingMethods"))[4];
      case 27:
        return getIntlArray(t("obtainingMethods"))[5];
      case 28:
        return getIntlArray(t("obtainingMethods"))[6];
    }
  };

  return (
    <div
      className={`title ${typeof fromLevel === "string" ? "pt-[25px] mlarge:pt-[15px] pb-[25px] mlarge:pb-[20px]" : "pt-[20px] mlarge:pt-[10px] pb-[30px] mlarge:pb-[25px]"}`}
    >
      <img src={`${iconPath}`} alt="" className="title-icon" />

      <p className="title-title">{getIntlArray(t("names"))[id - 1]}</p>

      <span className="title-levelBlock">
        <p className="title-levelBlock-level">
          {fromLevel}{" "}
          {typeof fromLevel !== "string"
            ? t1("levelDesignation")
            : getTitleObtainingMethod(id)}
        </p>

        {typeof fromLevel !== "string" && (
          <p className="title-levelBlock-experience">
            {xpCount} {t1("experienceDesignation")}
          </p>
        )}
      </span>
    </div>
  );
};

export default Title;
