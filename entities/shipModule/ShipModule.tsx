import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "./ShipModule.css";

interface ShipModuleProps {
  title: string;
  levelImages: string[];
}

const ShipModule: React.FC<ShipModuleProps> = ({ title, levelImages }) => {
  return (
    <div className="relative w-auto h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">
      <div className="relative flex justify-between items-center px-[30px] w-full h-[80px]">
        <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
          {title}
        </p>

        <button className="relative flex justify-center items-center w-[30px] h-[30px]">
          <img
            src="/static/generalIcons/ArrowDownIcon.svg"
            alt=""
            className="w-full h-full duration-500 ease-in-out"
          />
        </button>
      </div>

      <div className="flex items-center relative mt-[30px] px-[30px] w-full h-auto">
        <div className="relative w-[60%] h-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            modules={[Navigation]}
            navigation={true}
            className="w-full h-[300px]"
          >
            <SwiperSlide>
              <img
                src={`${levelImages[0]}`}
                alt=""
                className="border-2 border-[#2cc388] rounded-[7.5px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={`${levelImages[1]}`}
                alt=""
                className="border-2 border-[#2cc388] rounded-[7.5px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={`${levelImages[2]}`}
                alt=""
                className="border-2 border-[#2cc388] rounded-[7.5px]"
              />
            </SwiperSlide>
          </Swiper>

          <span className="flex justify-center items-center w-full h-auto">
            <p></p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShipModule;
