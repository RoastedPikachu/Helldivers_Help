"use client";
import React from "react";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import { getSpecificAutomatonImageScale } from "@/utils/generalFunctions";

import "./EnemyType.css";

interface EnemyTypeProps {
  id: number;
  iconPath: string;
  rootBlockStyles: string;
  fractionType: number;
  imagePlugStyles: string;
  title: string;
}

const EnemyType: React.FC<EnemyTypeProps> = ({
  id,
  iconPath,
  rootBlockStyles,
  imagePlugStyles,
  fractionType,
  title,
}) => {
  const changeCurrentEnemyType = () => {
    switch (fractionType) {
      case 1:
        enemyTypeStore.changeCurrentEnemyType({
          ...enemyTypeStore.terminids[id - 1],
          fractionType: fractionType,
        });
        break;
      case 2:
        enemyTypeStore.changeCurrentEnemyType({
          ...enemyTypeStore.automatons[id - 1],
          fractionType: fractionType,
        });
        break;
    }
  };

  return (
    <div onClick={() => changeCurrentEnemyType()} className="rootWidgetLink">
      {iconPath ? (
        <img
          src={`${iconPath}`}
          alt=""
          className={`${rootBlockStyles} ${getSpecificAutomatonImageScale(fractionType, id)}`}
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
