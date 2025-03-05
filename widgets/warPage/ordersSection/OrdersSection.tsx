import React from "react";

import "./ordersSection.css";
import PersonalOrder from "@/entities/orders/personalOrder/PersonalOrder";
import MajorOrder from "@/entities/orders/majorOrder/MajorOrder";

const OrdersSection = () => {
  return (
    <div>
      <MajorOrder />

      <PersonalOrder />
    </div>
  );
};

export default OrdersSection;
