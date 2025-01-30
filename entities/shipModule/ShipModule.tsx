"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { mobileStore } from "@/store/MobileStore";

import { Stratagem } from "@/utils/generalInterfaces";

import ShipModuleStratagem from "@/entities/shipModuleStratagem/ShipModuleStratagem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./shipModule.css";
import { useTranslations } from "next-intl";
import { getIntlArray } from "@/utils/generalFunctions";

interface ShipModuleProps {
  id: number;
  levelImages: string[];
  improvementPrices: any[];
  improvementAffectedStratagems: any;
}

const ShipModule: React.FC<ShipModuleProps> = ({
  id,
  levelImages,
  improvementPrices,
  improvementAffectedStratagems,
}) => {
  const t = useTranslations("shipModules");

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
      case 4:
        setCurrentSlideStratagems(improvementAffectedStratagems.fifthLevel);
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
        className={`rootShipModuleBlock-top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <p className="rootShipModuleBlock-top-title">
          {getIntlArray(t("names"))[id - 1]}
        </p>

        <button className="rootShipModuleBlock-top-button">
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootShipModuleBlock-top-button-image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootShipModuleBlock-bottom ${isAdditionalInfoOpened ? "mt-0 opacity-1" : `mt-[-630px] opacity-0`}`}
      >
        <div className="rootShipModuleBlock-bottom-leftBlock">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            modules={[Pagination, Navigation]}
            navigation={!mobileStore.isMobileDevice}
            pagination={{ clickable: false }}
            onSlideChange={handleSlideChange}
            className="rootShipModuleBlock-bottom-leftBlock-slider"
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

            <SwiperSlide>
              <img src={`${levelImages[4]}`} alt="" className="slideImage" />
            </SwiperSlide>
          </Swiper>

          <span className="rootShipModuleBlock-bottom-leftBlock-level">
            <p className="rootShipModuleBlock-bottom-leftBlock-level-title">
              {isAdditionalInfoOpened &&
                getIntlArray(t("improvementNames"))[
                  (id - 1) * 5 + currentSlideIndex
                ]}
            </p>

            <p className="rootShipModuleBlock-bottom-leftBlock-level-number">
              <b className="rootShipModuleBlock-bottom-leftBlock-level-number-bold">
                {currentSlideIndex + 1}
              </b>{" "}
              {getIntlArray(t("titles"))[0]}
            </p>
          </span>

          <div className="rootShipModuleBlock-bottom-leftBlock-additionalInfo">
            <p className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-description">
              {isAdditionalInfoOpened &&
                getIntlArray(t("improvementDescriptions"))[
                  (id - 1) * 5 + currentSlideIndex
                ]}
            </p>

            <div className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer">
              <div className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block">
                <p className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-text">
                  {improvementPrices[currentSlideIndex].commonSampleCount}
                </p>

                <img
                  src="/static/Resources/CommonSampleIcon.svg"
                  alt=""
                  className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-image"
                />
              </div>

              {improvementPrices[currentSlideIndex].rareSampleCount && (
                <div className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block">
                  <p className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-text">
                    {improvementPrices[currentSlideIndex].rareSampleCount}
                  </p>

                  <img
                    src="/static/Resources/RareSampleIcon.svg"
                    alt=""
                    className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-image"
                  />
                </div>
              )}

              {improvementPrices[currentSlideIndex].superSampleCount && (
                <div className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block">
                  <p className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-text">
                    {improvementPrices[currentSlideIndex].superSampleCount}
                  </p>

                  <img
                    src="/static/Resources/UltraRareSampleIcon.svg"
                    alt=""
                    className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-image"
                  />
                </div>
              )}

              {improvementPrices[currentSlideIndex].requisites && (
                <div className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block">
                  <p className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-text">
                    {improvementPrices[currentSlideIndex].requisites}
                  </p>

                  <img
                    src="/static/Resources/RequisitesIcon.svg"
                    alt=""
                    className="rootShipModuleBlock-bottom-leftBlock-additionalInfo-samplesContainer-block-image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rootShipModuleBlock-bottom-rightBlock">
          <p className="rootShipModuleBlock-bottom-rightBlock-effectTitle">
            {getIntlArray(t("titles"))[1]}
          </p>

          <p className="rootShipModuleBlock-bottom-rightBlock-effectText">
            {isAdditionalInfoOpened &&
              getIntlArray(t("improvementEffects"))[
                (id - 1) * 5 + currentSlideIndex
              ]}
          </p>

          <div className="rootShipModuleBlock-bottom-rightBlock-stratagems">
            <p className="rootShipModuleBlock-bottom-rightBlock-stratagemsTitle">
              {getIntlArray(t("titles"))[2]}
            </p>

            <div className="rootShipModuleBlock-bottom-rightBlock-stratagemsBlock">
              <div className="relative pb-[20px] mlarge:pb-[15px] px-[20px] mlarge:px-[15px] w-full h-full overflow-y-scroll">
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
    </div>
  );
};

export default ShipModule;
