"use client";
import React from "react";

import "./Booster.css";

interface BoosterProps {
  iconPath: string;
  title: string;
  effect: string;
  price: number;
}

const Booster: React.FC<BoosterProps> = ({
  iconPath,
  title,
  effect,
  price,
}) => {
  return (
    <div className="px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">
      <div className="flex">
        <img
          src={iconPath}
          alt=""
          className="w-[100px] h-[100px] rounded-[7.5px]"
        />

        <span className="mt-[-10px] ml-[20px]">
          <p className="text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
            {title}
          </p>

          <p className="mt-[10px] description">{effect}</p>
        </span>
      </div>

      <div className="flex items-center mt-[20px]">
        <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-semibold">
          Стоимость:
        </p>

        <p className="ml-[20px] text-[#ffffff] text-[2rem] font-['Insignia'] font-bold">
          {price}
        </p>

        <img
          src="/static/resources/MedalIcon.svg"
          alt=""
          className="ml-[10px] w-[40px] h-[40px]"
        />
      </div>
    </div>
  );
};

export default Booster;
