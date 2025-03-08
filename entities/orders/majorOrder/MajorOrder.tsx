"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "../order.css";

interface MajorOrderProps {
  order: any;
}

const MajorOrder: React.FC<MajorOrderProps> = ({ order }) => {
  const params = useParams();

  const t = useTranslations("orders");
  // const getProgressWidth = () => {
  //   if (targetCount && !targetPlanets.length) {
  //     return (completedPlanets[0] / targetCount) * 100;
  //   }
  //   return (currentKillsCount / targetKillsCount) * 100;
  // };

  const [taskProgress, setTaskProgress] = useState([]);

  const formatTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(order.expiration);
    const timeDiff = Number(targetDate) - Number(now);

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (params.locale === "ru") {
      if (days > 0) {
        return `${days} ДН. ${hours} Ч.`;
      }

      return `${hours} Ч. ${minutes} МИН.`;
    } else {
      if (days > 0) {
        return `${days} D. ${hours} H.`;
      }

      return `${hours} H. ${minutes} M.`;
    }
  };

  const getTaskName = (index: number, task: any) => {
    if (index === 0 || index === 2) {
      switch (task.values[0]) {
        case 2:
          return getIntlArray(t("tasks"))[2];
        case 3:
          return getIntlArray(t("tasks"))[0];
      }
    } else {
      switch (index) {
        case 1:
          return getIntlArray(t("tasks"))[1];
        case 3:
          return getIntlArray(t("tasks"))[3];
      }
    }
  };

  useEffect(() => {
    console.debug(order);
    setTaskProgress(order.progress);
  }, []);
  return (
    <>
      <div className="order">
        <div className="order-timeLeft">
          <p className="order-timeLeft-text">{getIntlArray(t("texts"))[0]}</p>

          <div className="order-timeLeft-timeBlock">
            <p className="order-timeLeft-timeBlock-text">{formatTimeLeft()}</p>
          </div>
        </div>

        <div className="order-title">
          <h3 className="order-title-text">{getIntlArray(t("texts"))[1]}</h3>
        </div>

        <div className="order-task">
          <p className="order-task-description">{order.briefing}</p>

          {order.tasks.map((task: any, index: number) => (
            <>
              <div className="flex justify-end items-start gap-x-[10px] w-full h-auto">
                <p className="order-task-point-text">
                  {task.type === 3 && getIntlArray(t("texts"))[7]}{" "}
                  <b className="text-theme font-medium">{task.values[2]}</b>{" "}
                  <b className="text-theme font-medium">
                    {getTaskName(index, task)}
                  </b>
                </p>

                {/*<div className="order-task-point-checkbox inactive" />*/}
                <div
                  className={`order-task-point-checkbox ${taskProgress[index] === task.values[2] ? "active" : "inactive"}`}
                />
              </div>

              <div className="order-task-progressionScale">
                <p className="order-task-progressionScale-text">
                  {taskProgress[index]} (
                  {String((taskProgress[index] / task.values[2]) * 100).slice(
                    0,
                    3,
                  )}
                  ) %
                </p>

                <div
                  style={{
                    width: `${(taskProgress[index] / task.values[2]) * 100}%`,
                  }}
                  className="order-task-progressionScale-item completed"
                />
              </div>
            </>
          ))}
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

            <p className="order-reward-imageWrapper-number">
              {order.reward.amount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorOrder;
