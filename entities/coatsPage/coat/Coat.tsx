import React from "react";

import { slidersStore } from "@/store/SlidersStore";
import { coatsStore } from "@/store/CoatsStore";

import WarbondTag from "@/entities/warbondTag/WarbondTag";

import "./Coat.css";

interface CoatProps {
  id: number;
  imagePath: string;
  name: string;
  warbondIcon: string;
}

const Coat: React.FC<CoatProps> = ({ id, imagePath, name, warbondIcon }) => {
  const handleCurrentCoatInfoChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    coatsStore.setCurrentCoatInfo(id);
  };
  return (
    <div onClick={() => handleCurrentCoatInfoChange()} className="coatWidget">
      {warbondIcon && <WarbondTag image={warbondIcon} />}

      <img src={imagePath} alt="" className="w-full h-full" />

      <p className="coatWidget_Text">{name}</p>
    </div>
  );
};

export default Coat;
