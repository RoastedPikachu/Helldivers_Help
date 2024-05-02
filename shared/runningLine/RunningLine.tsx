"use client";
import React, { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";

import { tipsStore } from "@/store/TipsStore";

import { Tip } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

import "./RunningLine.css";

const RunningLine = () => {
  const [currentTip, setCurrentTip] = useState({} as Tip);

  useEffect(() => {
    setCurrentTip(getRandomEntity(tipsStore.tips, currentTip));
  }, []);

  return (
    <Marquee direction="left" pauseOnHover={true} className="runningLine">
      {currentTip.text}&nbsp;
    </Marquee>
  );
};

export default RunningLine;
