"use client";
import React from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { getIntlArray, toSlug } from "@/utils/generalFunctions";

import Link from "next/link";

import "./enemy.css";

interface EnemyTypeProps {
  id: number;
  imagePath: string;
  fraction: string;
  devName: string;
}

const Enemy: React.FC<EnemyTypeProps> = ({ id, imagePath, devName }) => {
  const params = useParams();

  const t = useTranslations(params.fractionName);

  const getEnemyBackground = () => {
    switch (params.fractionName) {
      case "terminids":
        return "bg-[url('/static/terminids/TerminidsBackground.webp')]";
      case "automatons":
        return "bg-[url('/static/automatons/AutomatonsBackground.webp')]";
      case "illuminates":
        return "bg-[url('/static/illuminates/IlluminatesBackground.webp')]";
    }
  };
  return (
    <Link
      href={`/enemy/${params.fractionName}/${toSlug(devName)}`}
      className="enemy"
    >
      <div className={`enemyCard ${getEnemyBackground()}`}>
        <img src={`${imagePath}`} alt="" />
      </div>

      <p className="enemy-text">{getIntlArray(t("names" as never))[id - 1]}</p>
    </Link>
  );
};

export default Enemy;
