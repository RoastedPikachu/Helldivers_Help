import React from "react";

import "../order.css";

const PersonalOrder = () => {
  return (
    <div className="order">
      <div className="order-timeLeft">
        <p className="order-timeLeft-text">До конца личного приказа: </p>

        <div className="order-timeLeft-timeBlock">
          <p className="order-timeLeft-timeBlock-text">15 Ч. 55 МИН.</p>
        </div>
      </div>

      <div className="order-title">
        <h3 className="order-title-text">ЛИЧНЫЙ ПРИКАЗ</h3>
      </div>

      <div className="order-task">
        <p className="order-task-point-text">Убейте 5 Глыба</p>

        <div className="order-task-progressionScale">
          <div className="order-task-progressionScale-item completed w-[20%]" />
          <div className="order-task-progressionScale-item incompleted w-[20%]" />
          <div className="order-task-progressionScale-item incompleted w-[20%]" />
          <div className="order-task-progressionScale-item incompleted w-[20%]" />
          <div className="order-task-progressionScale-item incompleted w-[20%]" />
        </div>
      </div>

      <div className="order-reward">
        <div className="order-reward-textBlock">
          <p className="order-reward-textBlock-title">НАГРАДА</p>

          <p className="order-reward-textBlock-description">МЕДАЛЬ ЗАСЛУГИ</p>
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
