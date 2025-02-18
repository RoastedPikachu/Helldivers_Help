"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray, toSlug } from "@/utils/generalFunctions";

import Link from "next/link";

import Image from "next/image";

import { Tooltip } from "antd";

import "./armorKit.css";

interface ArmorKitProps {
  id: number;
  imagePath: string;
  devName: string;
  bonus: any;
}

const ArmorKit: React.FC<ArmorKitProps> = ({
  id,
  imagePath,
  devName,
  bonus,
}) => {
  const t = useTranslations("armor");
  const t1 = useTranslations("armorBonuses");
  return (
    <Link href={`/equipment/armor/${toSlug(devName)}`}>
      <div className="armorKit">
        <div className="armorKitCard">
          <Tooltip
            placement="top"
            title={
              getIntlArray(t1("names"))[bonus.id - 1] +
              "\n" +
              getIntlArray(t1("descriptions"))[bonus.id - 1]
            }
            arrow={true}
            overlayStyle={{ whiteSpace: "pre-line" }}
            overlayInnerStyle={{ textAlign: "center" }}
          >
            <Image
              src={bonus?.icon}
              alt={bonus?.name}
              width={0}
              height={0}
              className="armorKitCard-bonusIcon"
            />
          </Tooltip>

          <img src={imagePath} alt="" className="armorKitCard-image" />
        </div>

        <p className="armorKit-text">{getIntlArray(t("names"))[id - 1]}</p>
      </div>
    </Link>
  );
};

export default ArmorKit;
