import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Stratagem } from "@/utils/generalInterfaces";

import Typewriter from "@/shared/Typewriter";

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

  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);

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
    <div className="rootShipModuleBlock">
      <div
        className={`rootShipModuleBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <p className="rootShipModuleBlock_Top_Title">{title}</p>

        <button
          onClick={() => changeIsAdditionalInfoOpened((prev) => !prev)}
          className="rootShipModuleBlock_Top_Button"
        >
          <img
            src="/static/generalIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootShipModuleBlock_Top_Button_Image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootShipModuleBlock_Bottom ${isAdditionalInfoOpened ? "mt-0 opacity-1" : "mt-[-570px] opacity-0"}`}
      >
        <div className="rootShipModuleBlock_Bottom_LeftBlock">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            modules={[Navigation]}
            navigation={true}
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
                  src="/static/resources/CommonSampleIcon.svg"
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
                    src="/static/resources/RareSampleIcon.svg"
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
                    src="/static/resources/UltraRareSampleIcon.svg"
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
    </div>
  );
};

export default ShipModule;
