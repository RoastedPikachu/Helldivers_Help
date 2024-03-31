"use client";
import React from "react";

import { armorStore } from "@/store/ArmorKitsStore";

import { ArmorObtainingType } from "@/utils/dataInterfaces";

import "./ArmorKit.css";

interface ArmorKitProps {
  id: number;
  obtainingType: ArmorObtainingType;
  imagePath: string;
  name: string;
  handleChangeCurrentSlide: (id: number) => void;
}

const ArmorKit: React.FC<ArmorKitProps> = ({
  id,
  obtainingType,
  imagePath,
  name,
  handleChangeCurrentSlide,
}) => {
  const handleCurrentArmorInfoChange = () => {
    handleChangeCurrentSlide(id);

    armorStore.changeCurrentArmorInfo(id, obtainingType);
  };
  return (
    <div
      onClick={() => handleCurrentArmorInfoChange()}
      className="armorKitWidget"
    >
      <img src={imagePath} alt="" className="w-full h-full" />

      <p className="armorKitWidget_Text">{name}</p>
    </div>
  );
};

export default ArmorKit;
