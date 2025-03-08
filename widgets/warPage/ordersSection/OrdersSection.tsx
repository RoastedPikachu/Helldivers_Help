import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import axios from "axios";

import { getIntlArray } from "@/utils/generalFunctions";

import MajorOrder from "@/entities/orders/majorOrder/MajorOrder";
import PersonalOrder from "@/entities/orders/personalOrder/PersonalOrder";
import NoMajorOrder from "@/entities/orders/noMajorOrder/NoMajorOrder";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./ordersSection.css";

const OrdersSection = () => {
  const params = useParams();

  const t = useTranslations("WarPage");

  const [majorOrder, setMajorOrder] = useState({} as any);

  const getMajorOrder = () => {
    // "https://api.helldivers2.dev/raw/api/v2/Assignment/War/801"
    // "https://api.diveharder.com/raw/items"
    axios
      .get("https://api.helldivers2.dev/api/v1/assignments", {
        headers: {
          "Accept-Language": params.locale === "ru" ? "ru-RU" : "en-EN",
          "X-Super-Client": "Helldivers Help",
          "X-Super-Contact": "gh/RoastedPikachu",
        },
      })
      .then((response) => {
        if (response.data.length === 0) {
          return;
        }
        // changeMajorOrderReceiveErrorStatus(false);
        // changeMajorOrderLoadStatus(true);

        const data = response.data[0];

        if (data == undefined) {
          // changeMajorOrderExistenceStatus(true);
        } else {
          setMajorOrder(data);
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
      <SectionTitle text={getIntlArray(t("sectionTitles"))[1]} />

      {Object.entries(majorOrder).length ? (
        <MajorOrder order={majorOrder} />
      ) : (
        <NoMajorOrder />
      )}

      <PersonalOrder />
    </section>
  );
};

export default OrdersSection;
