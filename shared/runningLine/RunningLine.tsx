"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import Marquee from "react-fast-marquee";

import { getIntlArray, getRandomEntityInArray } from "@/utils/generalFunctions";

import "./RunningLine.css";

const RunningLine = () => {
  const t = useTranslations("tips");

  const [currentTip, setCurrentTip] = useState("");

  useEffect(() => {
    setCurrentTip(getRandomEntityInArray(getIntlArray(t("data")), currentTip));
  }, []);

  return (
    <Marquee direction="left" pauseOnHover={true} className="runningLine">
      {currentTip}&nbsp;
    </Marquee>
  );
};

export default RunningLine;
