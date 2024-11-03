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
    <div className="currentResourceinfo">
      <h3 className="currentResourceinfo_Title">
        <Typewriter text={t(`${id}Title`)} delay={60} />
      </h3>

      {!prices?.length ? (
        <p className="currentResourceinfo_Text">
          <b className="mlarge:w-full">{t1("difficultiesText")}:</b>{" "}
          <Typewriter text={t(`${id}Difficulties`)} delay={20} />
        </p>
      ) : (
        <>
          <p className="currentResourceinfo_Text">
            <b>150 кредитов: </b>
            <Typewriter text={prices[0]} delay={40} />
          </p>

          <p className="currentResourceinfo_Text">
            <b>375 кредитов: </b>
            <Typewriter text={prices[1]} delay={40} />
          </p>

          <p className="currentResourceinfo_Text">
            <b>1000 кредитов: </b>
            <Typewriter text={prices[2]} delay={40} />
          </p>

          <p className="currentResourceinfo_Text">
            <b>2100 кредитов: </b>
            <Typewriter text={prices[3]} delay={40} />
          </p>
        </>
      )}

      <p className="currentResourceinfo_Text">
        <b className="mlarge:block mlarge:w-full">
          {t1("obtainingMethodText")}:
        </b>{" "}
        <Typewriter text={t(`${id}ObtainingMethod`)} delay={20} />
      </p>

      <p className="currentResourceinfo_Text">
        <b className="mlarge:block mlarge:w-full">
          {t1("applicationScopeText")}:
        </b>{" "}
        <Typewriter text={t(`${id}ApplicationScope`)} delay={20} />
      </p>

      <p className="currentResourceinfo_Text">
        <b className="mlarge:block mlarge:w-full">{t1("maxAmountText")}:</b>{" "}
        <Typewriter text={maxAmount} delay={40} />
      </p>
    </div>
  );
};

export default CurrentResourceInfo;
