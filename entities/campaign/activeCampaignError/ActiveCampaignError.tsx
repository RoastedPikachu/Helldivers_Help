"use client";
import React from "react";

import "./ActiveCampaignError.css";

const ActiveCampaignError = () => {
  return (
    <div className="rootWidget">
      <h3 className="rootWidget_Top">
        Cбой в работе систем Министерства Обороны!
      </h3>

      <p className="rootWidget_Bottom">
        Мы не можем получить данные об активных сражениях
      </p>
    </div>
  );
};

export default ActiveCampaignError;
