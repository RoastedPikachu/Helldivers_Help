import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "../order.css";

const NoMajorOrder = () => {
  const t = useTranslations("orders");
  return (
    <div className="order">
      <div className="order-title">
        <h3 className="order-title-text">{getIntlArray(t("texts"))[4]}</h3>
      </div>

      <div className="order-task">
        <img
          src="/static/SuperEarthIcon.svg"
          alt=""
          className="order-task-icon"
        />

        <p className="order-task-description">{getIntlArray(t("texts"))[5]}</p>
      </div>
    </div>
  );
};

export default NoMajorOrder;
