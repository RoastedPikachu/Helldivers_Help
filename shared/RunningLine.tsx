"use client";
import React, { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";

import { tipsStore } from "@/store/TipsStore";

import { Tip } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

const RunningLine = () => {
  const [currentTip, setCurrentTip] = useState({} as Tip);

  useEffect(() => {
    setCurrentTip(getRandomEntity(tipsStore.tips, currentTip));
  }, []);

  return (
    <Marquee
      direction="left"
      pauseOnHover={true}
      className="flex items-center w-full h-[65px] border-y-[1px] bg-[#00293a] border-[#2cc384] text-[#2cc384] text-[1.75rem] font-['Exo2'] font-medium"
    >
      {currentTip.text}&nbsp;
    </Marquee>
  );
};

export default RunningLine;
