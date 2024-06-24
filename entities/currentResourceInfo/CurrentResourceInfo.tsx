"use client";
import React from "react";

import Typewriter from "@/shared/Typewriter";

import "./CurrentResourceInfo.css";

interface TargetResourceInfoProps {
  title: string;
  difficulties: string;
  prices?: string[];
  obtainingMethod: string;
  applicationScope: string;
  maxAmount: string;
}

const CurrentResourceInfo: React.FC<TargetResourceInfoProps> = ({
  title,
  difficulties,
  prices,
  obtainingMethod,
  applicationScope,
  maxAmount,
}) => {
  return (
    <div className="currentResourceinfo">
      <h3 className="currentResourceinfo_Title">
        <Typewriter text={title} delay={60} />
      </h3>

      {!prices?.length ? (
        <p className="currentResourceinfo_Text">
          <b className="mlarge:w-full">На каких сложностях встречается:</b>{" "}
          <Typewriter text={difficulties} delay={20} />
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
        <b className="mlarge:block mlarge:w-full">Способ получения:</b>{" "}
        <Typewriter text={obtainingMethod} delay={20} />
      </p>

      <p className="currentResourceinfo_Text">
        <b className="mlarge:block mlarge:w-full">Сфера применения:</b>{" "}
        <Typewriter text={applicationScope} delay={20} />
      </p>

      <p className="currentResourceinfo_Text">
        <b className="mlarge:block mlarge:w-full">
          Какое максимальное значение ресурса на корабле:
        </b>{" "}
        <Typewriter text={maxAmount} delay={40} />
      </p>
    </div>
  );
};

export default CurrentResourceInfo;
