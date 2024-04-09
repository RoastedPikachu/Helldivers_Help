"use client";
import React from "react";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import { getSpecificAutomatonImageScale } from "@/utils/generalFunctions";

import "./EnemyType.css";

interface EnemyTypeProps {
  id: number;
  iconPath: string;
  rootBlockStyles: string;
  fraction: string;
  imagePlugStyles: string;
  title: string;
  handleCurrentSlideChange: (id: number) => void;
}

const EnemyType: React.FC<EnemyTypeProps> = ({
  id,
  iconPath,
  rootBlockStyles,
  imagePlugStyles,
  fraction,
  title,
  handleCurrentSlideChange,
}) => {
  const handleCurrentEnemyTypeChange = () => {
    handleCurrentSlideChange(id);

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
          className={`${rootBlockStyles} ${getSpecificAutomatonImageScale(fraction, id)}`}
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
