"use client";
import React, { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

import { localeStore } from "@/store/LocaleStore";

import { getIntlArray } from "@/utils/generalFunctions";

import "./playerCard.css";

interface PlayerCardProps {
  id: number;
  image: string;
  price: number;
  ruTitle: string;
  enTitle: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  id,
  image,
  price,
  ruTitle,
  enTitle,
}) => {
  const t = useTranslations("PlayerCards");

  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(localeStore.locale);
    if (localeStore.locale === "ru") {
      setTitle(ruTitle as string);
    } else {
      setTitle(enTitle as string);
    }
  }, []);
  return (
    <div className="playerCard">
      <div className="playerCard-imageContainer">
        <img
          src={`${image}`}
          alt=""
          className="playerCard-imageContainer-backgroundImage"
        />

        {price > 0 && (
          <div className="playerCard-imageContainer-priceBlock">
            <p className="playerCard-imageContainer-priceBlock-text">{price}</p>

            <img
              src={
                price >= 25
                  ? "/static/Resources/SuperCreditIcon.svg"
                  : "/static/Resources/MedalIcon.svg"
              }
              alt=""
              className="playerCard-imageContainer-priceBlock-icon"
            />
          </div>
        )}
      </div>

      <p className="playerCard-title">{title}</p>
    </div>
  );
};

export default PlayerCard;
