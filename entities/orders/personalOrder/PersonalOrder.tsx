import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "../order.css";

const PersonalOrder = () => {
  const t = useTranslations("orders");
  return (
    <div className="order">
      <div className="order-timeLeft">
        <p className="order-timeLeft-text">{getIntlArray(t("texts"))[0]}</p>

        <div className="order-timeLeft-timeBlock">
          <p className="order-timeLeft-timeBlock-text">15 Ч. 55 МИН.</p>
        </div>
      </div>

      <div className="order-title">
        <h3 className="order-title-text">{getIntlArray(t("texts"))[6]}</h3>
      </div>

      <div className="order-task">
        <p className="order-task-point-text">Убейте 5 Глыба</p>

        <div className="order-task-progressionScale">
          <div className="order-task-progressionScale-item completed w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
          <div className="order-task-progressionScale-item incompleted w-[12.5%]" />
        </div>
      </div>

      <div className="order-reward">
        <div className="order-reward-textBlock">
          <p className="order-reward-textBlock-title">
            {getIntlArray(t("texts"))[2]}
          </p>

          <p className="order-reward-textBlock-description">
            {getIntlArray(t("texts"))[3]}
          </p>
        </div>

        <div className="order-reward-imageWrapper">
          <img
            src="/static/Resources/MedalIcon.svg"
            alt=""
            className="order-reward-imageWrapper-image"
          />

          <p className="order-reward-imageWrapper-number">15</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalOrder;
