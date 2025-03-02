import React from "react";

import "./WarbondItem.css";

interface WarbondItem {
  positionStyle: string;
  price: number;
  image: string;
}

const WarbondItem: React.FC<WarbondItem> = ({
  positionStyle,
  price,
  image,
}) => {
  const getItemSize = () => {
    const smallBlockStyles = "w-[192px] h-[172px]";

    const verticalBlockStyles = "w-[192px] h-[351px]";

    const horizontalBlockStyles = "w-[400px] h-[172px]";

    const squareBlockStyles = "w-[400px] h-[351px]";

    const fullBlockStyles = "w-[400px] h-full";

    if (image?.includes("boosters")) {
      return image?.includes("vertical")
        ? verticalBlockStyles
        : smallBlockStyles;
    } else if (image?.includes("armor")) {
      if (image?.includes("Body")) {
        return squareBlockStyles;
      } else if (image?.includes("Helmet")) {
        return smallBlockStyles;
      }
    } else if (image?.includes("Card")) {
      return verticalBlockStyles;
    } else if (image?.includes("emotes")) {
      if (image?.includes("horizontal")) {
        return horizontalBlockStyles;
      } else if (image?.includes("square")) {
        return squareBlockStyles;
      } else {
        return smallBlockStyles;
      }
    } else if (image?.includes("SuperCredits") || image?.includes("coats")) {
      return smallBlockStyles;
    } else if (image?.includes("weapons")) {
      if (image?.includes("horizontal")) {
        return horizontalBlockStyles;
      } else if (image?.includes("vertical")) {
        return verticalBlockStyles;
      }
    } else if (image?.includes("Hellpod")) {
      return verticalBlockStyles;
    } else if (image?.includes("shuttles")) {
      return horizontalBlockStyles;
    } else if (image?.includes("mechs")) {
      return fullBlockStyles;
    } else if (image?.includes("titles")) {
      return smallBlockStyles;
    }
  };

  const getImageStyles = () => {
    if (image?.includes("Card")) {
      return "absolute bottom-0 left-0 w-[95%]";
    } else if (image?.includes("Body") || image?.includes("Helmet")) {
      return "absolute bottom-0 mx-auto w-[80%]";
    } else if (image?.includes("Coat")) {
      return "absolute bottom-0 mx-auto w-[50%]";
    } else if (image?.includes("Emote")) {
      return "absolute bottom-0 mx-auto w-auto h-[80%]";
    } else if (image?.includes("Hellpod")) {
      return "absolute bottom-0 left-0 w-[95%]";
    }

    return "w-auto";
  };
  return (
    <div className={`warbondItem ${positionStyle} ${getItemSize()}`}>
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
          className="absolute top-0 left-0 w-[10px] h-[533px] z-10"
        />

        <img src={image} alt="" className={`${getImageStyles()} z-5`} />
      </div>
    </div>
  );
};

export default WarbondItem;
