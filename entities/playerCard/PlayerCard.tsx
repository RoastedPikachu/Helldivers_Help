"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./playerCard.css";

interface PlayerCardProps {
  id: number;
  image: string;
  price: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ id, image, price }) => {
  const t = useTranslations("PlayerCards");

  return (
    <div className="playerCard">
      <div className="playerCard-imageContainer">
        <img
          src={`${image}`}
          alt=""
          className="playerCard-imageContainer-backgroundImage"
        />

        <div className="playerCard-imageContainer-priceBlock">
          <p className="playerCard-imageContainer-priceBlock-text">{price}</p>

          <img
            src="/static/Resources/MedalIcon.svg"
            alt=""
            className="playerCard-imageContainer-priceBlock-icon"
          />
        </div>
      </div>

      <p className="playerCard-title">{getIntlArray(t("data"))[id - 1]}</p>
    </div>
  );
};

export default PlayerCard;
