"use client";
import React, { useState } from "react";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import { mobileStore } from "@/store/MobileStore";
import { slidersStore } from "@/store/SlidersStore";

import "./ModalSlider.css";

interface ModalSliderProps {
  currentEntityId: number;
  children: any;
}

const ModalSlider: React.FC<ModalSliderProps> = ({
  currentEntityId,
  children,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper?.activeIndex);
  };
  return (
    <div className={`sliderWrapper ${currentEntityId ? "flex" : "hidden"}`}>
      <div className="sliderWrapper_DarkBackground"></div>

      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
        modules={[Navigation]}
        navigation={true}
        onSwiper={(swiper) => slidersStore.setSwiper(swiper)}
        onSlideChange={handleSlideChange}
        className="sliderWrapper_Slider"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default ModalSlider;
