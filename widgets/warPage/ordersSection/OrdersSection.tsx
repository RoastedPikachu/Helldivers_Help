import React from "react";

import "./ordersSection.css";

const OrdersSection = () => {
  return (
    <div>
      <div className="relative w-[500px] h-auto border-2 border-theme">
        <div className="flex justify-between items-center py-[5px] px-[5px]">
          <p className="text-theme text-[1.25rem] text-left font-primary font-normal">
            До конца личного приказа:{" "}
          </p>

          <div className="relative flex items-center px-[10px] h-[20px] bg-theme">
            <p className=" h-[25px] text-black text-[1.125rem] text-center font-primary font-normal">
              15 Ч. 55 МИН.
            </p>
          </div>
        </div>

        <div className="py-[10px] px-[20px] w-full h-auto bg-gradient-to-l from-[#121c26] to-transparent">
          <h3 className="text-white text-[1.5rem] text-right font-primary font-medium">
            ЛИЧНЫЙ ПРИКАЗ
          </h3>
        </div>

        <div className="grid justify-items-end py-[15px] px-[20px] w-full bg-gradient-to-l from-[#213148] to-transparent">
          <p className="text-white text-[1rem] font-primary font-normal">
            Убейте 5 Глыба
          </p>

          <div className="relative flex items-center gap-x-[4px] mt-[5px] py-[5px] px-[5px] w-full h-auto bg-black">
            <div className="w-[20%] h-[20px] bg-[#7ec7da]" />
            <div className="w-[20%] h-[20px] bg-[#3f5e63]" />
            <div className="w-[20%] h-[20px] bg-[#3f5e63]" />
            <div className="w-[20%] h-[20px] bg-[#3f5e63]" />
            <div className="w-[20%] h-[20px] bg-[#3f5e63]" />
          </div>
        </div>

        <div className="relative flex justify-end items-end gap-x-[10px] py-[15px] px-[20px] w-full h-[90px] bg-gradient-to-l from-[#121c26] to-transparent">
          <div className="h-[60px]">
            <p className="mt-[10px] text-[#c7d8e2] text-[1.25rem] text-right font-primary font-medium">
              НАГРАДА
            </p>

            <p className="mt-[-5px] text-white text-[1.25rem] text-right font-primary font-medium">
              МЕДАЛЬ ЗАСЛУГИ
            </p>
          </div>

          <div className="relative flex justify-center items-center w-[60px] h-[60px] bg-black border-[1px] border-[#BCBDBF]">
            <img
              src="/static/Resources/MedalIcon.svg"
              alt=""
              className="mt-[-10px] w-[32.5px] h-[32.5px]"
            />

            <p className="absolute bottom-0 text-white text-[1.25rem] text-center font-secondary font-medium">
              15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSection;
