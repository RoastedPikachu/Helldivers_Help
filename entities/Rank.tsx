"use client";
import React from "react";

interface RankProps {
  iconPath: string;
  title: string;
}

const Rank: React.FC<RankProps> = ({ iconPath, title }) => {
  return (
    <div className="flex items-center px-[30px] pt-[20px] pb-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">
      <img src={`${iconPath}`} alt="" className="w-[75px] h-[75px]" />

      <p className="ml-[20px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
        {title}
      </p>
    </div>
  );
};

export default Rank;
