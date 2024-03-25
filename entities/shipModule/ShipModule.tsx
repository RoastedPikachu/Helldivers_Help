import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Stratagem } from "@/utils/generalInterfaces";

import ShipModuleStratagem from "@/entities/ShipModuleStratagem";

import "./ShipModule.css";

interface ShipModuleProps {
  title: string;
  levelImages: string[];
  improvementTitles: string[];
  improvementDescriptions: string[];
  improvementEffects: string[];
  improvementPrices: any[];
  improvementAffectedStratagems: any;
}

const ShipModule: React.FC<ShipModuleProps> = ({
  title,
  levelImages,
  improvementTitles,
  improvementDescriptions,
  improvementEffects,
  improvementPrices,
  improvementAffectedStratagems,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const getStratagems = () => {
    switch (currentSlideIndex) {
      case 0:
        return improvementAffectedStratagems.firstLevel;
      case 1:
        return improvementAffectedStratagems.secondLevel;
      case 2:
        return improvementAffectedStratagems.thirdLevel;
    }
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper?.activeIndex);
  };
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

      <div className="relative flex justify-between px-[30px] w-full h-auto">
        <div className="relative w-[60%] h-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            modules={[Navigation]}
            navigation={true}
            onSlideChange={handleSlideChange}
            className="w-full h-[300px]"
          >
            <SwiperSlide>
              <img
                src={`${levelImages[0]}`}
                alt=""
                className="h-full border-2 border-[#2cc388] rounded-[7.5px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={`${levelImages[1]}`}
                alt=""
                className="h-full border-2 border-[#2cc388] rounded-[7.5px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={`${levelImages[2]}`}
                alt=""
                className="h-full border-2 border-[#2cc388] rounded-[7.5px]"
              />
            </SwiperSlide>
          </Swiper>

          <span className="flex justify-center items-center mt-[20px] w-full h-auto border-b-2 border-[#2cc388]">
            <p className="w-full text-[#ffffff] text-[1.5rem] text-left font-['Exo2'] font-semibold">
              {improvementTitles[currentSlideIndex]}
            </p>

            <p className="w-[160px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-semibold">
              <b className="mr-[10px] text-[#2cc388] text-[1.75rem] font-['Insignia']">
                {currentSlideIndex + 1}
              </b>{" "}
              уровень
            </p>
          </span>

          <div className="mt-[20px] pb-[25px] flex justify-between w-full h-auto">
            <p className="w-[75%] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
              {improvementDescriptions[currentSlideIndex]}
            </p>

            <div className="grid justify-items-end grid-rows-3 grid-cols-1 gap-y-[10px] w-auto h-auto">
              <div className="flex items-center">
                <p className="text-[#ffffff] text-[2rem] text-left font-['Insignia'] font-bold">
                  {improvementPrices[currentSlideIndex].commonSampleCount}
                </p>

                <img
                  src="/static/resources/CommonSampleIcon.svg"
                  alt=""
                  className="ml-[15px] w-[35px] h-[35px]"
                />
              </div>

              {improvementPrices[currentSlideIndex].rareSampleCount && (
                <div className="flex items-center">
                  <p className="text-[#ffffff] text-[2rem] text-left font-['Insignia'] font-bold">
                    {improvementPrices[currentSlideIndex].rareSampleCount}
                  </p>

                  <img
                    src="/static/resources/RareSampleIcon.svg"
                    alt=""
                    className="ml-[15px] w-[35px] h-[35px]"
                  />
                </div>
              )}

              {improvementPrices[currentSlideIndex].superSampleCount && (
                <div className="flex items-center">
                  <p className="text-[#ffffff] text-[2rem] text-left font-['Insignia'] font-bold">
                    {improvementPrices[currentSlideIndex].superSampleCount}
                  </p>

                  <img
                    src="/static/resources/UltraRareSampleIcon.svg"
                    alt=""
                    className="ml-[15px] w-[35px] h-[35px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative w-[37.5%] h-auto">
          <p className="text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
            {improvementEffects[currentSlideIndex]}
          </p>

          <div className="absolute bottom-[25px] right-0 pb-[20px] px-[20px] w-full h-[440px] border-2 border-[#2cc388] rounded-[10px] overflow-y-scroll">
            {getStratagems().map((stratagem: Stratagem) => (
              <ShipModuleStratagem
                key={stratagem.id}
                iconPath={stratagem.image}
                name={stratagem.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipModule;
