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
        className={`legendSection_BottomBlock ${isLegendInfoOpened ? "mt-[10px] mlarge:mt-[-5px] msmall:mt-[-10px] opacity-100" : "mt-[-1000px] opacity-0"}`}
      >
        {warbonds.map((warbond) => (
          <div
            key={warbond.id}
            className="legendSection_BottomBlock_WarbondBlock"
          >
            <img
              src={`${warbond.icon}`}
              alt=""
              className="legendSection_BottomBlock_WarbondBlock_Icon"
            />

            <p className="legendSection_BottomBlock_WarbondBlock_Title">
              {warbond.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegendSection;
