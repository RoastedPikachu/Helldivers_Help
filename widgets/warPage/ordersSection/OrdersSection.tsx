import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import axios from "axios";

import { Order } from "@/utils/componentInterfaces";

import MajorOrder from "@/entities/orders/majorOrder/MajorOrder";
import PersonalOrder from "@/entities/orders/personalOrder/PersonalOrder";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./ordersSection.css";
import NoMajorOrder from "@/entities/orders/noMajorOrder/NoMajorOrder";

const OrdersSection = () => {
  const params = useParams();

  const [majorOrder, setMajorOrder] = useState({} as any);

  const getMajorOrder = () => {
    // "https://api.helldivers2.dev/raw/api/v2/Assignment/War/801"
    // "https://api.diveharder.com/raw/items"
    axios
      .get("https://api.helldivers2.dev/raw/api/v2/Assignment/War/801", {
        headers: {
          "Accept-Language": params.locale === "ru" ? "ru-RU" : "en-EN",
          "X-Super-Client": "Helldivers Help",
          "X-Super-Contact": "gh/RoastedPikachu",
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data.length === 0) {
          return;
        }
        // changeMajorOrderReceiveErrorStatus(false);
        // changeMajorOrderLoadStatus(true);

        const data = response.data[0];

        if (data == undefined) {
          // changeMajorOrderExistenceStatus(true);
        } else {
          const orderPlanets =
            data.setting.tasks[0].values[2] !== 0
              ? [...data.setting.tasks.map((task: any) => task.values[2])]
              : [];

          setMajorOrder({
            title: data.setting.taskDescription,
            expiresIn: data.expiresIn / 60 / 60,
            description: data.setting.overrideBrief,
            targetPlanets: orderPlanets,
            targetCount: data.setting.tasks[0].values[0],
            targetKillsCount:
              data.setting.tasks[0].values[2] > 100000
                ? data.setting.tasks[0].values[2]
                : 0,
            completedPlanets: data.progress,
            currentKillsCount:
              data.setting.tasks[0].values[2] > 100000 ? data.progress[0] : 0,
            reward: data.setting.reward.amount,
          });
        }
      })
      .catch((error) => {
        // changeMajorOrderReceiveErrorStatus(true);
      });
  };

  useEffect(() => {
    getMajorOrder();

    let majorOrderInterval = setInterval(() => getMajorOrder(), 300000) as any;

    return () => {
      majorOrderInterval = null;
    };
  }, []);
  return (
    <section className="ordersSection">
      <SectionTitle text={"ПРИКАЗЫ"} />

      {Object.entries(majorOrder).length ? <MajorOrder /> : <NoMajorOrder />}

      <PersonalOrder />
    </section>
  );
};

export default OrdersSection;
