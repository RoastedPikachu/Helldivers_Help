"use client";
import React, { useState } from "react";

import { warbonds } from "@/data/warbonds";

import "./LegendSection.css";

const LegendSection = () => {
  const [isLegendInfoOpened, changeIsLegendInfoOpenedStatus] = useState(false);
  return (
    <section className="legendSection">
      <div
        onClick={() => changeIsLegendInfoOpenedStatus((prev) => !prev)}
        className="legendSection_TopBlock"
      >
        <h4 className="legendSection_TopBlock_Title">Легенда</h4>

        <button className="legendSection_TopBlock_Button">
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`legendSection_TopBlock_Button_Image ${isLegendInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`pb-[25px] mlarge:pb-[15px] mmedium:pb-[10px] px-[15px] mlarge:px-[15px] msmall:px-[10px] w-full h-auto duration-1000 ease-in-out ${isLegendInfoOpened ? "mt-[10px] mlarge:mt-[-5px] msmall:mt-[-10px] opacity-100" : "mt-[-400px] opacity-0"}`}
      >
        {warbonds.map((warbond) => (
          <div key={warbond.id} className="flex items-center ">
            <img src={`${warbond.icon}`} alt="" className="w-[75px] h-[75px]" />

            <p className="ml-[15px] text-[--theme-color] text-[1.25rem] mlarge:text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-bold">
              {warbond.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegendSection;
