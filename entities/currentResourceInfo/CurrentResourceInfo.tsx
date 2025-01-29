"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./currentResourceInfo.css";

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
  const t = useTranslations("resources");
  const t1 = useTranslations("CurrentResourceInfo");

  return (
    <div className="currentResourceInfo">
      <h3 className="currentResourceInfo-title">
        {getIntlArray(t("names"))[id - 1]}
      </h3>

      {!prices?.length ? (
        <div className="currentResourceInfo-textBlock">
          <p className="currentResourceInfo-textBlock-title">
            {t1("difficultiesText")}
          </p>

          <p className="currentResourceInfo-textBlock-text">
            {getIntlArray(t("difficulties"))[id - 1]}
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
          {getIntlArray(t("obtainingMethods"))[id - 1]}
        </p>
      </div>

      <div className="currentResourceInfo-textBlock">
        <p className="currentResourceInfo-textBlock-title">
          {t1("applicationScopeText")}
        </p>

        <p className="currentResourceInfo-textBlock-text">
          {getIntlArray(t("applicationScopes"))[id - 1]}
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
