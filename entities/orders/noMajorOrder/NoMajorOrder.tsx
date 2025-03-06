import React from "react";

import "../order.css";

const NoMajorOrder = () => {
  return (
    <div className="order">
      <div className="order-title">
        <h3 className="order-title-text">Ждем главного приказа</h3>
      </div>

      <div className="order-task">
        <img
          src="/static/SuperEarthIcon.svg"
          alt=""
          className="order-task-icon"
        />

        <p className="order-task-description">
          Ожидайте дальнейших приказов высшего командования Супер-Земли
        </p>
      </div>
    </div>
  );
};

export default NoMajorOrder;
