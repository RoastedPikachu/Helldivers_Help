"use client";
import React from "react";

import Link from "next/link";

import { replaceWhitespaces } from "@/utils/generalFunctions";

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
  const getSpecificScale = () => {
    if (fractionType === 2) {
      switch (id) {
        case 7:
          return "scale-x-125";
        case 8:
          return "scale-x-100";
        default:
          return "scale-x-150";
      }
    }
  };

  const getSpecificEnemyTypeLink = () => {
    if (fractionType === 1) {
      return `/terminids/${replaceWhitespaces(title, "$1_$2")}?id=${id}`;
    }

    return `/automatons/${replaceWhitespaces(title, "$1_$2")}?id=${id}`;
  };

  return (
    <Link
      href={getSpecificEnemyTypeLink()}
      className="grid justify-items-center px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px] cursor-pointer"
    >
      {iconPath ? (
        <img
          src={`${iconPath}`}
          alt=""
          className={`${rootBlockStyles} ${getSpecificScale()}`}
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
    </Link>
  );
};

export default EnemyType;
