import React from "react";

import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const getItemSize = () => {
    const smallBlockStyles =
      "w-[192px] mlarge:w-[19%] h-[172px] mlarge:h-[32%]";

    const verticalBlockStyles =
      "w-[192px] mlarge:w-[19%] h-[351px] mlarge:h-[65%]";

    const horizontalBlockStyles =
      "w-[400px] mlarge:w-[39%] h-[172px] mlarge:h-[32%]";

    const squareBlockStyles =
      "w-[400px] mlarge:w-[39%] h-[351px] mlarge:h-[65%]";

    const fullBlockStyles = "w-[400px] mlarge:w-[39%] h-full";

    if (image?.includes("boosters")) {
      if (image?.includes("vertical")) {
        return verticalBlockStyles;
      } else if (image?.includes("horizontal")) {
        return horizontalBlockStyles;
      }

      return smallBlockStyles;
    } else if (image?.includes("armor")) {
      if (image?.includes("Body")) {
        if (image?.includes("full")) {
          return fullBlockStyles;
        }

        return squareBlockStyles;
      } else if (image?.includes("Helmet")) {
        return smallBlockStyles;
      }
    } else if (image?.includes("Card")) {
      if (image?.includes("ServantsOfFreedom")) {
        return smallBlockStyles;
      }

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
      if (image?.includes("vertical")) {
        return verticalBlockStyles;
      }

      return smallBlockStyles;
    } else if (image?.includes("weapons")) {
      if (image?.includes("horizontal")) {
        return horizontalBlockStyles;
      } else if (image?.includes("vertical")) {
        return verticalBlockStyles;
      } else if (image?.includes("full")) {
        return fullBlockStyles;
      }

      return squareBlockStyles;
    } else if (image?.includes("Hellpod")) {
      return verticalBlockStyles;
    } else if (image?.includes("shuttles")) {
      if (image?.includes("square")) {
        return squareBlockStyles;
      }

      return horizontalBlockStyles;
    } else if (image?.includes("mechs")) {
      return fullBlockStyles;
    } else if (image?.includes("titles")) {
      if (image?.includes("vertical")) {
        return verticalBlockStyles;
      }

      return smallBlockStyles;
    } else if (image?.includes("stratagems")) {
      if (image?.includes("square")) {
        return squareBlockStyles;
      } else if (image?.includes("vertical")) {
        return verticalBlockStyles;
      } else if (image?.includes("default")) {
        return smallBlockStyles;
      }

      return horizontalBlockStyles;
    } else if (image?.includes("cars")) {
      return squareBlockStyles;
    }
  };

  const getImageStyles = () => {
    if (image?.includes("Card")) {
      if (image?.includes("ServantsOfFreedom")) {
        return "absolute bottom-0 mx-auto h-[90%]";
      }

      return "absolute bottom-0 left-0 w-[95%]";
    } else if (image?.includes("Body") || image?.includes("Helmet")) {
      return "absolute bottom-0 mx-auto w-[80%]";
    } else if (image?.includes("coats")) {
      if (image?.includes("vertical")) {
        return "absolute bottom-0 mx-auto mlarge:w-[80%]";
      }
      return "absolute bottom-0 mx-auto w-[50%]";
    } else if (image?.includes("emotes")) {
      return "absolute bottom-0 mx-auto w-auto h-[80%]";
    } else if (image?.includes("Booster")) {
      if (image?.includes("vertical")) {
        return "mlarge:scale-[0.625]";
      } else if (image?.includes("default")) {
        return "mlarge:scale-[0.375]";
      }
    } else if (image?.includes("SuperCredits")) {
      return "mlarge:scale-[0.875]";
    } else if (image?.includes("Shuttle")) {
      return "mlarge:scale-[0.625]";
    } else if (image?.includes("Mech")) {
      return "mlarge:scale-[0.75]";
    } else if (image?.includes("Title")) {
      return "mlarge:scale-[0.75]";
    } else if (image?.includes("Stratagem")) {
      return "mlarge:scale-[0.75]";
    } else if (image?.includes("booster")) {
      return "mlarge:scale-[0.375]";
    } else if (image?.includes("Car")) {
      return "mlarge:scale-[0.875]";
    }

    return "w-auto";
  };
  return (
    <div
      className={`warbondItem ${positionStyle} ${getItemSize()} ${pathname.includes("helldiversmobilize") ? "border-[#BCBDBF]" : "border-[--color-border-blue]"}`}
    >
      <div className="warbondItem-innerBlock-price">
        <img
          src="/static/Resources/MedalIcon.svg"
          alt="Иконка: Медаль"
          className="w-[35px] mlarge:w-[17.5px] mmedium:w-[15px] msmall:w-[12.5px] h-[35px] mlarge:h-[17.5px] mmedium:h-[15px] msmall:h-[12.5px]"
        />

        <p className="warbondItem-innerBlock-price-text">{price}</p>
      </div>

      <div
        className={`warbondItem-innerBlock ${pathname.includes("helldiversmobilize") ? "bg-black" : "bg-gradient-to-b from-[#003f48] to-[#086c88]"}`}
      >
        {!pathname.includes("helldiversmobilize") && (
          <img
            src="/static/warbonds/DecorationStripes.png"
            alt="Изображение: Декорация блока предмета"
            className="absolute top-0 left-0 w-[10px] mlarge:w-[7.5px] h-[533px] z-10"
          />
        )}

        <img src={image} alt="" className={`${getImageStyles()} z-5`} />
      </div>
    </div>
  );
};

export default WarbondItem;
