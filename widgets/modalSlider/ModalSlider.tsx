"use client";
import React, { useEffect, useRef, useState } from "react";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import { slidersStore } from "@/store/SlidersStore";

import "./ModalSlider.css";

interface ModalSliderProps {
  closeFunction: () => void;
  currentEntityId: number | null;
  children: any;
}

const ModalSlider: React.FC<ModalSliderProps> = ({
  closeFunction,
  currentEntityId,
  children,
}) => {
  const sliderRef = useRef(null as any);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper?.activeIndex);
  };

  useEffect(() => {
    if (currentEntityId) {
      document.addEventListener("click", (event) =>
        slidersStore.handleClickOutsideSlider(
          event,
          sliderRef,
          currentEntityId,
          closeFunction,
        ),
      );
    } else {
      document.removeEventListener(
        "click",
        () => slidersStore.handleClickOutsideSlider,
      );
    }
  }, [currentEntityId]);
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
        ref={sliderRef}
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
