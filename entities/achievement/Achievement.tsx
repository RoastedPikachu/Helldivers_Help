"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./achievement.css";
import { localeStore } from "@/store/LocaleStore";

interface AchievementProps {
  id: number;
  iconPath: string;
  ruTitle?: string;
  enTitle?: string;
  ruDescription?: string;
  enDescription?: string;
  ruAccompWay?: string;
  enAccompWay?: string;
}

const Achievement: React.FC<AchievementProps> = ({
  id,
  iconPath,
  ruTitle,
  enTitle,
  ruDescription,
  enDescription,
  ruAccompWay,
  enAccompWay,
}) => {
  const t = useTranslations("Achievements");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [accompWay, setAccompWay] = useState("");

  useEffect(() => {
    if (localeStore.locale === "ru") {
      setTitle(ruTitle as string);
      setDescription(ruDescription as string);
      setAccompWay(ruAccompWay as string);
    } else {
      setTitle(enTitle as string);
      setDescription(enDescription as string);
      setAccompWay(enAccompWay as string);
    }
  }, []);
  return (
    <div className="achievementWidget">
      <div className="achievementWidget-top">
        <img src={iconPath} alt="" className="achievementWidget-top-image" />

        <span className="achievementWidget-top-image-textWrapper">
          <p className="achievementWidget-top-image-textWrapper-title">
            {title ? title : getIntlArray(t("titles"))[id - 1]}
          </p>

          <p className="achievementWidget-top-image-textWrapper-description desktop">
            {description
              ? description
              : getIntlArray(t("descriptions"))[id - 1]}
          </p>
        </span>
      </div>

      <p className="achievementWidget-top-image-textWrapper-description mobile">
        {description ? description : getIntlArray(t("descriptions"))[id - 1]}
      </p>

      <p className="achievementWidget-text">
        {accompWay ? accompWay : getIntlArray(t("accomplishmentWays"))[id - 1]}
      </p>
    </div>
  );
};

export default Achievement;
