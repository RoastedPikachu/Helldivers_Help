"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";

import { obtainingTypes } from "@/data/obtainingTypes";

import "./LegendSection.css";

const LegendSection = () => {
  const t = useTranslations("Legend");
  const t1 = useTranslations("ObtainingTypes");

  const [isLegendInfoOpened, changeIsLegendInfoOpenedStatus] = useState(false);

  return (
    <section className="legendSection">
      <div
        onClick={() => changeIsLegendInfoOpenedStatus((prev) => !prev)}
        className="legendSection_TopBlock"
      >
        <h4 className="legendSection_TopBlock_Title">{t("title")}</h4>

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
        {obtainingTypes.map((obtainingType) => (
          <div
            key={obtainingType.id}
            className="legendSection_BottomBlock_WarbondBlock"
          >
            <img
              src={`${obtainingType.icon}`}
              alt=""
              className="legendSection_BottomBlock_WarbondBlock_Icon"
            />

            <p className="legendSection_BottomBlock_WarbondBlock_Title">
              {t1(`${obtainingType.id}Name`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegendSection;
