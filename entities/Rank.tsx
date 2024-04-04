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
    <div className="relative flex items-center px-[30px] pt-[20px] pb-[30px] w-full h-auto bg-[#00293a] border-2 border-[--theme-color] rounded-[10px]">
      {iconPath ? (
        <img src={`${iconPath}`} alt="" className="w-[75px] h-[75px]" />
      ) : (
        <div className="flex justify-center items-center w-[75px] h-[75px]">
          <p className="text-[#2cc388] text-[4rem] font-['Insignia'] font-bold">
            ?
          </p>
        </div>
      )}

      <p className="ml-[20px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
        {title}
      </p>

      <span className="absolute grid justify-items-center grid-rows-2 right-[30px] h-[40px]">
        <p className="text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
          {fromLevel} {typeof fromLevel !== "string" && "уровень"}
        </p>

        {typeof fromLevel !== "string" && (
          <p className="mt-[20px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-bold brightness-75">
            {xpCount} опыта
          </p>
        )}
      </span>
    </div>
  );
};

export default Rank;
