"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./cape.css";

interface CoatProps {
  id: number;
  imagePath: string;
  name: string;
}

const Coat: React.FC<CoatProps> = ({ id, imagePath, name }) => {
  const t = useTranslations("capes");
  return (
    <div className="capeWidget">
      <div className="capeWidgetCard">
        <img src={imagePath} alt="" className="w-full h-full" />
      </div>

      <p className="capeWidget-text">{getIntlArray(t("names"))[id - 1]}</p>
    </div>
  );
};

export default Coat;
