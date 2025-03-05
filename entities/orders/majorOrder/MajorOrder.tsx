"use client";
import React from "react";

import { planetsStore } from "@/store/PlanetsStore";

import "../order.css";

interface MajorOrderProps {
  title?: string;
  expiresIn?: number;
  description?: string;
  targetPlanets?: any[];
  targetCount?: number;
  targetKillsCount?: number;
  completedPlanets?: number[];
  currentKillsCount?: number;
  reward?: number;
}

const MajorOrder: React.FC<MajorOrderProps> = ({
  title,
  expiresIn,
  description,
  targetPlanets,
  targetCount,
  targetKillsCount,
  completedPlanets,
  currentKillsCount,
  reward,
}) => {
  // const getProgressWidth = () => {
  //   if (targetCount && !targetPlanets.length) {
  //     return (completedPlanets[0] / targetCount) * 100;
  //   }
  //   return (currentKillsCount / targetKillsCount) * 100;
  // };

  return (
    <>
      <div className="order">
        <div className="order-timeLeft">
          <p className="order-timeLeft-text">До конца главного приказа: </p>

          <div className="order-timeLeft-timeBlock">
            <p className="order-timeLeft-timeBlock-text">15 Ч. 55 МИН.</p>
          </div>
        </div>

        <div className="order-title">
          <h3 className="order-title-text">ГЛАВНЫЙ ПРИКАЗ</h3>
        </div>

        <div className="order-task">
          <p className="order-task-description">
            Задержите приближение сингулярности к Морадешу или защитите комплекс
            переплавки глубинных пород на Клаорелле от автоматонов.
          </p>

          <p className="order-task-description">Настройка 1</p>

          <div className="flex justify-end items-start gap-x-[10px] w-full h-auto">
            <p className="order-task-point-text">
              Удерживайте позицию (КЛАОРЕЛЛ), пока не закончится действие
              приказа.
            </p>

            {/*<div className="order-task-point-checkbox inactive" />*/}
            <div className="order-task-point-checkbox active" />
          </div>

          <p className="order-task-description">Настройка 2</p>

          <div className="order-task-progressionScale">
            <p className="order-task-progressionScale-text">2 (25,0%)</p>

            <div className="order-task-progressionScale-item completed w-[25%]" />
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
    </>
  );
};

export default MajorOrder;
