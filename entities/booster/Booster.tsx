import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./booster.css";
import { localeStore } from "@/store/LocaleStore";

interface BoosterProps {
  id: number;
  iconPath: string;
  price: number;
  ruTitle?: string;
  enTitle?: string;
  ruDescription?: string;
  enDescription?: string;
}

const Booster: React.FC<BoosterProps> = ({
  id,
  iconPath,
  price,
  ruTitle,
  enTitle,
  ruDescription,
  enDescription,
}) => {
  const t = useTranslations("boosters");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (localeStore.locale === "ru") {
      setTitle(ruTitle as string);
      setDescription(ruDescription as string);
    } else {
      setTitle(enTitle as string);
      setDescription(enDescription as string);
    }
  }, []);

  return (
    <div className="boosterWidget">
      <div className="boosterWidget-top">
        <img src={iconPath} alt="" className="boosterWidget-top-image" />

        <p className="boosterWidget-top-title">
          {title ? title : getIntlArray(t("titles"))[id - 1]}
        </p>
      </div>

      <p className="boosterWidget-effect">
        {description ? description : getIntlArray(t("descriptions"))[id - 1]}
      </p>

      <div className="boosterWidget-bottom">
        <p className="boosterWidget-bottom-text">{t("title")}</p>

        <p className="boosterWidget-bottom-number">{price}</p>

        <img
          src="/static/Resources/MedalIcon.svg"
          alt=""
          className="boosterWidget-bottom-image"
        />
      </div>
    </div>
  );
};

export default Booster;
