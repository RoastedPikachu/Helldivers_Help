"use client";
import React from "react";

import "./PlayerCard.css";

interface PlayerCardProps {
  name: string;
  image: string;
  price: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, image, price }) => {
  return (
    <div className="playerCard">
      <img src={`${image}`} alt="" className="playerCard_BackgroundImage" />

      <div className="playerCard_PriceBlock">
        <p className="playerCard_PriceBlock_Text">{price}</p>

        <img
          src="/static/Resources/MedalIcon.svg"
          alt=""
          className="playerCard_PriceBlock_Icon"
        />
      </div>

      <p className="playerCard_Title">{name}</p>
    </div>
  );
};

export default PlayerCard;
