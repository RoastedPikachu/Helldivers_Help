"use client";
import React from "react";

import Typewriter from "@/shared/Typewriter";

import "./CurrentResourceInfo.css";
import { useTranslations } from "next-intl";

interface TargetResourceInfoProps {
  id: number;
  prices?: string[];
  maxAmount?: number;
}

const CurrentResourceInfo: React.FC<TargetResourceInfoProps> = ({
  id,
  prices,
  maxAmount,
}) => {
  const t = useTranslations("Resources");
  const t1 = useTranslations("CurrentResourceInfo");

  return (
    <div className="currentResourceInfo">
      <h3 className="currentResourceInfo_Title">{t(`${id}Title`)}</h3>

      {!prices?.length ? (
        <div className="currentResourceInfo-textBlock">
          <p className="currentResourceInfo-textBlock-title">
            {t1("difficultiesText")}
          </p>

          <p className="currentResourceInfo-textBlock-text">
            {t(`${id}Difficulties`)}
          </p>
        </div>
      ) : (
        <div className="currentResourceInfo-image" />
      )}

      <div className="currentResourceInfo-textBlock">
        <p className="currentResourceInfo-textBlock-title">
          {t1("obtainingMethodText")}
        </p>

        <p className="currentResourceInfo-textBlock-text">
          {t(`${id}ObtainingMethod`)}
        </p>
      </div>

      <div className="currentResourceInfo-textBlock">
        <p className="currentResourceInfo-textBlock-title">
          {t1("applicationScopeText")}
        </p>

        <p className="currentResourceInfo-textBlock-text">
          {t(`${id}ApplicationScope`)}
        </p>
      </div>

      {!prices?.length && (
        <div className="currentResourceInfo-textBlock">
          <p className="currentResourceInfo-textBlock-title">
            {t1("maxAmountText")}
          </p>

          <p className="currentResourceInfo-textBlock-text">{maxAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentResourceInfo;
