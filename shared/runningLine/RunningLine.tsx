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
      className="flex items-center mlarge:top-[65px] w-full h-[55px] mlarge:h-[50px] border-y-[1px] bg-[#00293a] border-[--theme-color] text-[--theme-color] text-[1.5rem] mlarge:text-[1.375rem] font-['Exo2'] font-medium mlarge:z-[40]"
    >
      {currentTip.text}&nbsp;
    </Marquee>
  );
};

export default RunningLine;
