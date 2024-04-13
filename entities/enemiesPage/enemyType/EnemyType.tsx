"use client";
import React from "react";

import { enemyTypeStore } from "@/store/EnemyTypeStore";
import { slidersStore } from "@/store/SlidersStore";

import {
  getSpecificAutomatonStyle,
  getSpecificTerminidStyle,
} from "@/utils/enemyTypeFunctions";

import "./EnemyType.css";

interface EnemyTypeProps {
  id: number;
  iconPath: string;
  imageStyleScale: string;
  fraction: string;
  imagePlugStyles: string;
  title: string;
}

const EnemyType: React.FC<EnemyTypeProps> = ({
  id,
  iconPath,
  imageStyleScale,
  imagePlugStyles,
  fraction,
  title,
}) => {
  const handleCurrentEnemyTypeChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    enemyTypeStore.changeCurrentEnemyType(id, fraction);
  };
  return (
    <div
      onClick={() => handleCurrentEnemyTypeChange()}
      className="rootWidgetLink"
    >
      {iconPath ? (
        <img
          src={`${iconPath}`}
          alt=""
          style={{ transform: imageStyleScale }}
          className={`w-[200px] h-[300px] ${fraction === "Автоматоны" ? getSpecificAutomatonStyle(id) : getSpecificTerminidStyle(id)}`}
        />
      ) : (
        <p
          className={`${imagePlugStyles} text-[#2cc388] text-center font-['Insignia'] font-bold`}
        >
          ?
        </p>
      )}

      <p className="mt-[20px] text-[#ffffff] text-[1.75rem] text-center font-['Exo2'] font-bold">
        {title}
      </p>
    </div>
  );
};

export default EnemyType;
