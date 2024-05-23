"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { mobileStore } from "@/store/MobileStore";

import { Stratagem } from "@/utils/generalInterfaces";

import Typewriter from "@/shared/Typewriter";

import ShipModuleStratagem from "@/entities/ShipModuleStratagem";

import "swiper/css/pagination";
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
  const [currentSlideStratagems, setCurrentSlideStratagems] = useState([]);

  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);

  const getStratagems = () => {
    switch (currentSlideIndex) {
      case 0:
        setCurrentSlideStratagems(improvementAffectedStratagems.firstLevel);
        break;
      case 1:
        setCurrentSlideStratagems(improvementAffectedStratagems.secondLevel);
        break;
      case 2:
        setCurrentSlideStratagems(improvementAffectedStratagems.thirdLevel);
        break;
      case 3:
        setCurrentSlideStratagems(improvementAffectedStratagems.fourthLevel);
        break;
    }
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper?.activeIndex);
  };

  useEffect(() => {
    getStratagems();
  }, [currentSlideIndex]);

  useEffect(() => {
    getStratagems();
  }, []);
  return (
    <div
      className={`rootShipModuleBlock ${isAdditionalInfoOpened ? "" : "mlarge:max-h-[72.5px]"}`}
    >
      <div
        onClick={() => changeIsAdditionalInfoOpened((prev) => !prev)}
        className={`rootShipModuleBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <p className="rootShipModuleBlock_Top_Title">{title}</p>

        <button className="rootShipModuleBlock_Top_Button">
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootShipModuleBlock_Top_Button_Image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootShipModuleBlock_Bottom ${isAdditionalInfoOpened ? "mt-0 opacity-1" : `mt-[-630px] opacity-0`}`}
      >
        <div className="rootShipModuleBlock_Bottom_LeftBlock">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            modules={[Pagination, Navigation]}
            navigation={!mobileStore.isMobileDevice}
            pagination={{ clickable: false }}
            onSlideChange={handleSlideChange}
            className="rootShipModuleBlock_Bottom_LeftBlock_Slider"
          >
            <SwiperSlide>
              <img src={`${levelImages[0]}`} alt="" className="slideImage" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={`${levelImages[1]}`} alt="" className="slideImage" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={`${levelImages[2]}`} alt="" className="slideImage" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={`${levelImages[3]}`} alt="" className="slideImage" />
            </SwiperSlide>
          </Swiper>

          <span className="rootShipModuleBlock_Bottom_LeftBlock_Level">
            <p className="rootShipModuleBlock_Bottom_LeftBlock_Level_Title">
              {isAdditionalInfoOpened && (
                <Typewriter
                  text={improvementTitles[currentSlideIndex]}
                  delay={60}
                />
              )}
            </p>

            <p className="rootShipModuleBlock_Bottom_LeftBlock_Level_Number">
              <b className="rootShipModuleBlock_Bottom_LeftBlock_Level_Number_Bold">
                {currentSlideIndex + 1}
              </b>{" "}
              уровень
            </p>
          </span>

          <div className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo">
            <p className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_Description">
              {isAdditionalInfoOpened && (
                <Typewriter
                  text={improvementDescriptions[currentSlideIndex]}
                  delay={20}
                />
              )}
            </p>

            <div className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer">
              <div className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block">
                <p className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Text">
                  {improvementPrices[currentSlideIndex].commonSampleCount}
                </p>

                <img
                  src="/static/Resources/CommonSampleIcon.svg"
                  alt=""
                  className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Image"
                />
              </div>

              {improvementPrices[currentSlideIndex].rareSampleCount && (
                <div className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block">
                  <p className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Text">
                    {improvementPrices[currentSlideIndex].rareSampleCount}
                  </p>

                  <img
                    src="/static/Resources/RareSampleIcon.svg"
                    alt=""
                    className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Image"
                  />
                </div>
              )}

              {improvementPrices[currentSlideIndex].superSampleCount && (
                <div className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block">
                  <p className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Text">
                    {improvementPrices[currentSlideIndex].superSampleCount}
                  </p>

                  <img
                    src="/static/Resources/UltraRareSampleIcon.svg"
                    alt=""
                    className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Image"
                  />
                </div>
              )}

              {improvementPrices[currentSlideIndex].requisites && (
                <div className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block">
                  <p className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Text">
                    {improvementPrices[currentSlideIndex].requisites}
                  </p>

                  <img
                    src="/static/Resources/RequisitesIcon.svg"
                    alt=""
                    className="rootShipModuleBlock_Bottom_LeftBlock_AdditionalInfo_SamplesContainer_Block_Image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rootShipModuleBlock_Bottom_RightBlock">
          <p className="rootShipModuleBlock_Bottom_RightBlock_EffectTitle">
            Эффект:
          </p>

          <p className="rootShipModuleBlock_Bottom_RightBlock_EffectText">
            {isAdditionalInfoOpened && (
              <Typewriter
                text={improvementEffects[currentSlideIndex]}
                delay={40}
              />
            )}
          </p>

          <div className="rootShipModuleBlock_Bottom_RightBlock_Stratagems">
            <p className="rootShipModuleBlock_Bottom_RightBlock_StratagemsTitle">
              Затрагиваемые стратагемы:
            </p>

            <div className="rootShipModuleBlock_Bottom_RightBlock_StratagemsBlock">
              {currentSlideStratagems.map((stratagem: Stratagem, index) => (
                <ShipModuleStratagem
                  key={index + 1}
                  iconPath={stratagem.iconPath}
                  name={stratagem.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipModule;
