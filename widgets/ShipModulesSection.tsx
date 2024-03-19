"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShipModulesSection = () => {
  return (
    <section className="relative grid grid-cols-1 grid-rows-4 gap-y-[30px] mt-[50px] w-full h-auto">
      <div className="relative flex justify-between px-[30px] py-[20px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">
        <span className="relative w-[50%] h-auto">
          <h3 className="text-[#ffffff] text-[2rem] font-['Exo2'] font-semibold">
            Ангар
          </h3>

          <p className="mt-[20px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
            Когда вы отправляетесь в битву, помните, что ваше мужество и
            преданность будут отмечены. Благодаря вашему усердию и верности делу
            Супер-Земли, вы получите повышение и почетные звания за ваши
            героические подвиги в продвижении управляемой демократии.
          </p>
        </span>

        <div className="relative grid w-[50%] h-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            className="w-full h-[250px]"
          >
            <SwiperSlide>
              <img src="" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShipModulesSection;
