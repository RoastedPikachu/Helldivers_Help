"use client";
import React from "react";

interface LevelProps {
  id: number;
  xpRequired: number;
  xpTotal: number;
}

const Level: React.FC<LevelProps> = ({ id, xpRequired, xpTotal }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-3 col-span-3 w-full h-full">
      <div
        className={`flex justify-center items-center w-full h-[50px] bg-[#00293a] border-b-2 border-l-2 border-[--theme-color] ${id === 50 ? "rounded-bl-[10px]" : ""}`}
      >
        <p className="text-[#ffffff] text-[1.375rem] font-['Exo2'] font-medium brightness-75">
          {id}
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-[50px] bg-[#00293a] border-b-2 border-x-2 border-[--theme-color]">
        <p className="text-[#ffffff] text-[1.375rem] font-['Exo2'] font-medium brightness-75">
          {xpRequired}
        </p>
      </div>

      <div
        className={`flex justify-center items-center w-full h-[50px] bg-[#00293a] border-b-2 border-r-2  border-[--theme-color] ${id === 50 ? "rounded-br-[10px]" : ""}`}
      >
        <p className="text-[#ffffff] text-[1.375rem] font-['Exo2'] font-medium brightness-75">
          {xpTotal}
        </p>
      </div>
    </div>
  );
};

export default Level;
