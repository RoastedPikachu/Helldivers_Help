import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./ShipModuleStratagem.css";

interface StratagemProps {
  id: number;
  iconPath: string;
}

const ShipModuleStratagem: React.FC<StratagemProps> = ({ id, iconPath }) => {
  const t = useTranslations("stratagems");

  return (
    <div className="shipModuleStratagem">
      <img src={`${iconPath}`} alt="" className="shipModuleStratagem_Icon" />

      <p className="shipModuleStratagem_Name">
        {getIntlArray(t("names"))[id - 1]}
      </p>
    </div>
  );
};

export default ShipModuleStratagem;
