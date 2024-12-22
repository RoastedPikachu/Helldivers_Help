"use client";
import React from "react";

import { armorStore } from "@/store/ArmorKitsStore";
import { slidersStore } from "@/store/SlidersStore";

import ObtainingTypeTag from "@/entities/obtainingTypeTag/ObtainingTypeTag";

import "./ArmorKit.css";

interface ArmorKitProps {
  id: number;
  imagePath: string;
  type: string;
  name: string;
  warbondIcon: string;
}

const ArmorKit: React.FC<ArmorKitProps> = ({
  id,
  imagePath,
  type,
  name,
  warbondIcon,
}) => {
  const handleCurrentArmorInfoChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    armorStore.changeCurrentArmorInfo(id, type);
  };
  return (
    <div
      onClick={() => handleCurrentArmorInfoChange()}
      className="armorKitWidget"
    >
      <ObtainingTypeTag image={warbondIcon} />

      <img src={imagePath} alt="" className="armorKitWidget-image" />

      <p className="armorKitWidget-text">{name}</p>
    </div>
  );
};

export default ArmorKit;
