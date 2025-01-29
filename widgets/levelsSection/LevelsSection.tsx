"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";

import { observer, Observer } from "mobx-react-lite";

import { levels } from "@/data/levels";

import { mobileStore } from "@/store/MobileStore";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./levelsSection.css";

const LevelsSection = observer(() => {
  const t = useTranslations("LevelsSection");

  const [currentLevel, setCurrentLevel] = useState("");
  const [targetLevel, setTargetLevel] = useState("");

  const formatInput = (event: any, type: string) => {
    if (
      event.target.value.length <= 3 &&
      event.target.value >= 0 &&
      event.target.value <= 150
    ) {
      type === "target"
        ? setTargetLevel(event.target.value)
        : setCurrentLevel(event.target.value);
    }
  };

  const getCurrentLevelXpTotal = () => {
    return levels.find((level) => level.id === parseInt(currentLevel))
      ?.xpTotal!;
  };

  const getTargetLevelXpTotal = () => {
    return levels.find((level) => level.id === parseInt(targetLevel))?.xpTotal!;
  };

  return (
    <Observer>
      {() => (
        <section className="levelsSection">
          <SectionTitle text={t("title")} />

          <form>
            <div className="formInputBlock">
              <input
                type="number"
                min={1}
                max={150}
                placeholder={`${t("startText")} ${mobileStore.isMobileDevice ? "" : t("levelDesignation")}`}
                value={currentLevel}
                onChange={(event) => formatInput(event, "current")}
                className="formInputBlock-input"
              />
            </div>

            <div className="formInputBlock">
              <input
                type="number"
                min={1}
                max={150}
                placeholder={`${t("endText")} ${mobileStore.isMobileDevice ? "" : t("levelDesignation")}`}
                value={targetLevel}
                onChange={(event) => formatInput(event, "target")}
                className="formInputBlock-input"
              />
            </div>

            <div className="formResultBlock">
              <p className="formResultBlock-text">
                {getTargetLevelXpTotal() - getCurrentLevelXpTotal() || 0}{" "}
                {t("experienceDesignation")}
              </p>
            </div>
          </form>
        </section>
      )}
    </Observer>
  );
});

export default LevelsSection;
