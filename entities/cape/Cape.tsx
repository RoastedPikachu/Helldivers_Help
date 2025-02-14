"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray, toSlug } from "@/utils/generalFunctions";

import Link from "next/link";

import "./cape.css";

interface CoatProps {
  id: number;
  imagePath: string;
  devName: string;
}

const Coat: React.FC<CoatProps> = ({ id, imagePath, devName }) => {
  const t = useTranslations("capes");
  return (
    <Link href={`/equipment/capes/${toSlug(devName)}`}>
      <div className="capeWidget">
        <div className="capeWidgetCard">
          <img src={imagePath} alt="" className="w-full h-full" />
        </div>

        <p className="capeWidget-text">{getIntlArray(t("names"))[id - 1]}</p>
      </div>
    </Link>
  );
};

export default Coat;
