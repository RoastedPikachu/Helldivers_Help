"use client";
import React from "react";

interface RankProps {
  iconPath: string;
  title: string;
  fromLevel: number | string;
  xpCount: number;
}

const Rank: React.FC<RankProps> = ({ iconPath, title, fromLevel, xpCount }) => {
  return (
    <div className="relative flex items-center px-[30px] mlarge:px-[15px] pt-[20px] mlarge:pt-[10px] pb-[30px] mlarge:pb-[25px] w-full h-auto bg-[#00293a] border-2 border-[--theme-color] rounded-[10px]">
      <img
        src={`${iconPath}`}
        alt=""
        className="w-[75px] mmedium:w-[65px] msmall:w-[50px] h-[75px] mmedium:h-[65px] msmall:h-[50px]"
      />

      <p className="ml-[20px] mlarge:ml-[5px] text-[#ffffff] text-[1.75rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-bold">
        {title}
      </p>

      <span className="absolute grid mlarge:flex mlarge:items-center justify-items-center grid-rows-2 right-[30px] mlarge:right-[10px] mlarge:bottom-[5px] h-[40px] mlarge:h-auto">
        <p className="text-[#ffffff] text-[1.75rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.825rem] font-['Exo2'] font-bold">
          {fromLevel} {typeof fromLevel !== "string" && "уровень"}
        </p>

        {typeof fromLevel !== "string" && (
          <p className="mt-[20px] mlarge:mt-0 mlarge:ml-[10px] text-[#ffffff] text-[1.25rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.825rem] font-['Exo2'] font-bold brightness-75">
            {xpCount} опыта
          </p>
        )}
      </span>
    </div>
  );
};

export default Rank;
