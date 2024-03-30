"use client";
import React from "react";

import "./ArmorKit.css";

interface ArmorKitProps {
  imagePath: string;
  name: string;
}

const ArmorKit: React.FC<ArmorKitProps> = ({ imagePath, name }) => {
  return (
    <div className="armorKitWidget">
      <img src={imagePath} alt="" className="w-full h-full" />

      <p className="armorKitWidget_Text">{name}</p>
    </div>
  );
};

export default ArmorKit;
