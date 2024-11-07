import React from "react";

import "./WarbondItem.css";

interface WarbondItem {
  width: number;
  height: number;
  price: number;
  image: string;
}

const WarbondItem: React.FC<WarbondItem> = ({
  width,
  height,
  price,
  image,
}) => {
  const getImageStyles = () => {
    if (image?.includes("Card")) {
      return "absolute bottom-0 left-0 w-[95%]";
    } else if (image?.includes("Body") || image?.includes("Helmet")) {
      return "absolute bottom-0 mx-auto w-[80%]";
    } else if (image?.includes("Coat")) {
      return "absolute bottom-0 mx-auto w-[50%]";
    } else if (image?.includes("Emote")) {
      return "absolute bottom-0 mx-auto w-auto h-[80%]";
    }

    return "w-auto";
  };
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
          className="absolute top-0 left-0 w-[10px] h-[351px] z-10"
        />

        <img src={image} alt="" className={`${getImageStyles()} z-5`} />
      </div>
    </div>
  );
};

export default WarbondItem;
