"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { Order } from "@/utils/componentInterfaces";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import MajorOrderError from "@/entities/orders/majorOrderError/MajorOrderError";
import MajorOrder from "@/entities/orders/majorOrder/MajorOrder";
import MajorOrderBlank from "@/entities/orders/majorOrderBlank/MajorOrderBlank";
import NoMajorOrder from "@/entities/orders/noMajorOrder/NoMajorOrder";

import "./MajorOrderSection.css";

const MajorOrderSection = () => {
  const [isMajorOrderLoaded, changeMajorOrderLoadStatus] = useState(false);
  const [isNoMajorOrder, changeMajorOrderExistenceStatus] = useState(false);
  const [isMajorOrderReceiveError, changeMajorOrderReceiveErrorStatus] =
    useState(false);

  const [majorOrder, setMajorOrder] = useState({} as Order);

  const getMajorOrder = () => {
    axios
      .get(
        "https://helldivers-2-dotnet.fly.dev/raw/api/v2/Assignment/War/801",
        {
          headers: {
            "Accept-Language": "ru-RU",
          },
        },
      )
      .then((response) => {
        changeMajorOrderReceiveErrorStatus(false);
        changeMajorOrderLoadStatus(true);

        console.log(response);

        const orderPlanets =
          response.data[0].setting.tasks[0].values[2] !== 0
            ? [
                ...response.data[0].setting.tasks.map(
                  (task: any) => task.values[2],
                ),
              ]
            : [];

        setMajorOrder({
          title: response.data[0].setting.taskDescription,
          expiresIn: response.data[0].expiresIn / 60 / 60,
          description: response.data[0].setting.overrideBrief,
          completedPlanets: response.data[0].progress,
          targetPlanets: orderPlanets,
          reward: response.data[0].setting.reward.amount,
        });
      })
      .catch(() => {
        changeMajorOrderReceiveErrorStatus(true);
      });
  };

  useEffect(() => {
    getMajorOrder();

    let majorOrderInterval = setInterval(() => getMajorOrder(), 60000) as any;

    return () => {
      majorOrderInterval = null;
    };
  }, []);
  return (
    <section className="majorOrderSection">
      <SectionTitle text={"ГЛАВНЫЙ ПРИКАЗ"} />

      {isMajorOrderReceiveError && <MajorOrderError />}

      {!isMajorOrderLoaded && !isMajorOrderReceiveError && <MajorOrderBlank />}

      {isMajorOrderLoaded && !isMajorOrderReceiveError && isNoMajorOrder && (
        <NoMajorOrder />
      )}

      {isMajorOrderLoaded && !isNoMajorOrder && (
        <MajorOrder
          title={majorOrder.title}
          expiresIn={majorOrder.expiresIn}
          description={majorOrder.description}
          targetPlanets={majorOrder.targetPlanets}
          completedPlanets={majorOrder.completedPlanets}
          reward={majorOrder.reward}
        />
      )}
    </section>
  );
};

export default MajorOrderSection;
