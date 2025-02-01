"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { ArmorBonus } from "@/data/armor/bonuses";

import { armorStore } from "@/store/ArmorKitsStore";
import { slidersStore } from "@/store/SlidersStore";

import Image from "next/image";

import { Tooltip } from "antd";

import "./armorKit.css";

interface ArmorKitProps {
  id: number;
  imagePath: string;
  type: string;
  bonus: ArmorBonus;
}

const ArmorKit: React.FC<ArmorKitProps> = ({ id, imagePath, type, bonus }) => {
  const t = useTranslations("armor");

  const handleCurrentArmorInfoChange = () => {
    slidersStore.handleCurrentSlideChange(id);

    armorStore.changeCurrentArmorInfo(id, type);
  };
  return (
    <div className="armorKit">
      <div
        onClick={() => handleCurrentArmorInfoChange()}
        className="armorKitCard"
      >
        <Tooltip
          placement="top"
          title={bonus.name + "\n" + bonus.description}
          arrow={true}
          overlayStyle={{ whiteSpace: "pre-line" }}
          overlayInnerStyle={{ textAlign: "center" }}
        >
          <Image
            src={bonus?.icon}
            alt={bonus?.name}
            width={40}
            height={40}
            className="armorKitCard-bonusIcon"
          />
        </Tooltip>

        <img src={imagePath} alt="" className="armorKitCard-image" />
      </div>

      <p className="armorKit-text">{getIntlArray(t("names"))[id - 1]}</p>
    </div>
  );
};

export default ArmorKit;
