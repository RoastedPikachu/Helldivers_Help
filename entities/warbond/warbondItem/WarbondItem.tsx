import React from "react";

import "./WarbondItem.css";

interface WarbondItem {
  width: number;
  height: number;
  price: number;
}

const WarbondItem: React.FC<WarbondItem> = ({ width, height, price }) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="warbondItem"
    >
      <div className="warbondItem-innerBlock-price">
        <img
          src="/static/Resources/MedalIcon.svg"
          alt="Иконка: Медаль"
          className="w-[35px] h-[35px]"
        />

        <p className="warbondItem-innerBlock-price-text">{price}</p>
      </div>

      <div className="warbondItem-innerBlock">
        <img
          src="/static/warbonds/DecorationStripes.png"
          alt="Изображение: Декорация блока предмета"
          className="absolute top-0 left-0 w-[10px] h-[351px]"
        />
      </div>
    </div>
  );
};

export default WarbondItem;
