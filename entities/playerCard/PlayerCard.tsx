"use client";
import React from "react";

import ObtainingTypeTag from "@/entities/obtainingTypeTag/ObtainingTypeTag";

import "./PlayerCard.css";
import { useTranslations } from "next-intl";

interface PlayerCardProps {
  id: number;
  image: string;
  price: number;
  warbondImage: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  id,
  image,
  price,
  warbondImage,
}) => {
  const t = useTranslations("PlayerCards");

  return (
    <div className="playerCard">
      <img src={`${image}`} alt="" className="playerCard_BackgroundImage" />

      <ObtainingTypeTag image={warbondImage} />

      <div className="playerCard_PriceBlock">
        <p className="playerCard_PriceBlock_Text">{price}</p>

        <img
          src="/static/Resources/MedalIcon.svg"
          alt=""
          className="playerCard_PriceBlock_Icon"
        />
      </div>

      <p className="playerCard_Title">{t(`${id}Name`)}</p>
    </div>
  );
};

export default PlayerCard;
