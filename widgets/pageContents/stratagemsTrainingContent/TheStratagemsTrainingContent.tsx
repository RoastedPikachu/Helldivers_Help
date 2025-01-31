"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import MediaQuery from "react-responsive";

import { observer, Observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";
import { stratagemStore } from "@/store/StratagemStore";
import { stratagemTrainingStore } from "@/store/StratagemTrainingStore";

import { getIntlArray, simulateKeyPress } from "@/utils/generalFunctions";

import "./TheStratagemsTrainingContent.css";

const TheStratagemsTrainingContent = observer(() => {
  const t = useTranslations("stratagems");
  const t1 = useTranslations("StratagemTrainingPage");

  const [highestGameScore, setHighestGameScore] = useState(0);

  const getSpecificGameTimeColor = () => {
    if (stratagemTrainingStore.secondsLeft > 2) {
      return "bg-[#ffe702]";
    }
    return "bg-[#ef4444]";
  };

  const getArrowBrightness = (direction: any) => {
    if (direction.isPressed) {
      return "";
    }
    return "brightness-50";
  };

  const getArrowColor = (direction: any) => {
    if (direction.isPressed) {
      return stratagemTrainingStore.isStratagemInputFail
        ? "#ef4444"
        : "#ffe702";
    }
    return "#ffffff";
  };

  const getTargetInlineRotate = (direction: any) => {
    switch (direction.orientation) {
      case 1:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] rotate-0 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] rotate-90 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 3:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] rotate-180 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 4:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] -rotate-90 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
    }
  };

  useEffect(() => {
    setHighestGameScore(stratagemTrainingStore.highestGameScore);

    document.addEventListener(
      "keydown",
      stratagemTrainingStore.handleGameStart,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        stratagemTrainingStore.handleGameStart,
      );
    };
  }, []);
  return (
    <Observer>
      {() => (
        <main className="mt-0 mlarge:mt-[50px] pt-[50px] mlarge:pt-[30px] deskWide:mx-0 deskWide:px-[calc((100%-1440px)/2)] max-w-full bg-[#0e0e0e]">
          <div className="flex justify-center items-center w-full h-[60px]">
            <h2 className="pageTitle text-center">
              {t1("pageTitle")}{" "}
              <b className="pageTitle_Bold !text-[#ffe702]">
                {t1("pageAdditionalTitle")}
              </b>
            </h2>
          </div>

          <img
            src="/static/GeneralIcons/SuperEarthBackgroundIcon.svg"
            alt=""
            className="absolute top-[-10px] deskWide:top-[-50px] mlarge:top-0 mmedium:top-[10px] msmall:top-[20px] left-0 w-[700px] mlarge:w-full h-[450px] mlarge:h-[300px] mmedium:h-[260px] msmall:h-[230px] mt-[calc(50vh-150px)] mlarge:mt-[calc(50vh-220px)] mx-[calc((100%-700px)/2)] mlarge:mx-0"
          />

          <section className="relative flex justify-center items-center w-full h-[calc(100vh-310px)] mlarge:min-h-[calc(100vh-310px)] mlarge:h-auto">
            {!stratagemTrainingStore.isGameStarted &&
              !stratagemTrainingStore.isRoundEnded && (
                <div className="relative grid justify-items-center mlarge:mt-[60px] mmedium:mt-[65px] msmall:mt-[70px] w-auto h-auto">
                  <svg
                    width="50"
                    height="45"
                    viewBox="0 0 65 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mlarge:w-[45px] mmedium:w-[40px] msmall:w-[35px] mlarge:h-[40px] mmedium:h-[35px] msmall:h-[30px]"
                  >
                    <g clipPath="url(#clip0_1_4)">
                      <path
                        d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                        fill="#ffe702"
                      />
                      <path
                        d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                        fill="#ffe702"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4">
                        <rect width="65" height="60" fill="#ffe702" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div
                    onClick={() =>
                      mobileStore.isMobileDevice ? simulateKeyPress(87) : ""
                    }
                    className={`mt-[10px] w-[100px] mlarge:w-[80px] mmedium:w-[70px] msmall:w-[60px] h-[150px] mlarge:h-[120px] mmedium:h-[100px] msmall:h-[90px] ${stratagemTrainingStore.isRequiredKeyPressed ? "bg-[#008000]" : "bg-[#7f1d1d]"} border-2 border-[#ffe702] duration-[400ms] ease-in-out`}
                  ></div>

                  <p className="mt-[10px] w-full text-[#ffe702] text-[1.25rem] mlarge:text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] text-center font-['Exo2'] font-semibold">
                    {getIntlArray(t1("text"))[0]}
                  </p>

                  <p className="text-white text-[1rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] text-center font-['Insignia'] brightness-50">
                    {highestGameScore}
                  </p>

                  <MediaQuery maxWidth={480}>
                    {(matches) =>
                      matches ? (
                        <p className="mt-[20px] text-white text-[1.25rem] mlarge:text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] text-center font-['Exo2'] brightness-75">
                          {getIntlArray(t1("text"))[1]}
                        </p>
                      ) : (
                        <p className="mt-[20px] text-white text-[1.25rem] mlarge:text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] text-center font-['Exo2'] brightness-75">
                          {getIntlArray(t1("text"))[2]}
                        </p>
                      )
                    }
                  </MediaQuery>

                  <MediaQuery maxWidth={480}>
                    <div className="relative flex justify-center items-center mt-[20px] ml-[-12px] w-full h-auto">
                      <p className="text-[#ffffff] text-[1.25rem] mlarge:text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-bold">
                        {getIntlArray(t1("text"))[3]}
                      </p>

                      <label className="relative inline-block mx-[20px] w-[84px] mmedium:w-[74px] msmall:w-[64px] h-[38px] mmedium:h-[34px] msmall:h-[30px]">
                        <input
                          type="checkbox"
                          defaultChecked={
                            !stratagemTrainingStore.isButtonsChoosen
                          }
                          onClick={() =>
                            stratagemTrainingStore.changeIsButtonChoosenStatus(
                              !stratagemTrainingStore.isButtonsChoosen,
                            )
                          }
                          className="opacity-0 w-0 h-0 outline-none"
                        />
                        <span className="slider absolute top-0 bottom-0 left-0 right-0 rounded-[34px] bg-[#0e0e0e] border-2 border-[#ffe702] duration-[400ms] ease-in-out cursor-pointer"></span>
                      </label>

                      <p className="text-[#ffffff] text-[1.25rem] mlarge:text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-bold">
                        {getIntlArray(t1("text"))[4]}
                      </p>
                    </div>
                  </MediaQuery>
                </div>
              )}

            {!stratagemTrainingStore.isRoundEnded &&
              stratagemTrainingStore.isGameStarted && (
                <>
                  <div className="flex mlarge:block items-start mlarge:mt-[20px]">
                    <MediaQuery maxWidth={480}>
                      {(matches) =>
                        matches ? (
                          <div className="flex justify-between items-start w-full h-auto">
                            <span className="mr-[100px] mlarge:mr-0">
                              <p className="mt-[-10px] text-[#ffffff] text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] text-left font-['Exo2'] font-semibold">
                                {getIntlArray(t1("text"))[5]}
                              </p>

                              <p className="mt-[-7.5px] text-[#ffe702] text-[3rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] text-left font-['Insignia'] font-extrabold">
                                {stratagemTrainingStore.currentRoundNumber}
                              </p>
                            </span>

                            <span className="ml-[100px] mlarge:ml-0">
                              <p className="mt-[-12.5px] text-[#ffe702] text-[3rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] text-right font-['Insignia'] font-extrabold">
                                {stratagemTrainingStore.currentScore}
                              </p>

                              <p className="mt-[-17.5px] mmedium:mt-[-15px] msmall:mt-[-12.5px] text-white mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] text-right font-['Exo2'] font-semibold">
                                {getIntlArray(t1("text"))[6]}
                              </p>

                              <p className="mlarge:mt-[-5px] text-white text-[1rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] text-right font-['Exo2'] font-semibold brightness-50">
                                Ваш рекорд:{" "}
                                <b className="font-['Insignia']">
                                  {stratagemTrainingStore.highestGameScore}
                                </b>
                              </p>
                            </span>
                          </div>
                        ) : (
                          <span className="mr-[100px]">
                            <p className="mt-[-10px] text-white text-[2rem] mlarge:text-[1.5rem] text-left font-['Exo2'] font-semibold">
                              {getIntlArray(t1("text"))[5]}
                            </p>

                            <p className="mt-[-7.5px] text-[#ffe702] text-[3rem] mlarge:text-[2rem] text-left font-['Insignia'] font-extrabold">
                              {stratagemTrainingStore.currentRoundNumber}
                            </p>
                          </span>
                        )
                      }
                    </MediaQuery>

                    <div className="relative p-0 w-auto min-w-[735px] mlarge:min-w-[calc(100vw-40px)] mlarge:max-w-[calc(100vw-40px)] h-auto overflow-x-hidden">
                      <div className="flex items-center w-full h-[120px] mlarge:h-[70px] mmedium:h-[65px] msmall:h-[60px]">
                        <img
                          src={`${stratagemStore.currentStratagem?.iconPath}`}
                          alt=""
                          className="w-[120px] mlarge:w-[70px] mmedium:w-[65px] msmall:w-[60px] h-full"
                        />

                        {stratagemStore.nextStratagemsArray
                          .slice(0, 5)
                          .map((nextStratagem, index) => (
                            <img
                              key={index + 1}
                              src={`${nextStratagem?.iconPath}`}
                              alt=""
                              className="ml-[40px] mlarge:ml-[17.5px] mmedium:ml-[15px] msmall:ml-[12.5px] w-[75px] mlarge:w-[45px] mmedium:w-[40px] msmall:w-[35px] h-[75px] mlarge:h-[45px] mmedium:h-[40px] msmall:h-[35px]"
                            />
                          ))}
                      </div>

                      <div
                        className={`flex items-center mt-[10px] w-full h-[50px] mlarge:h-[30px] mmedium:h-[27.5px] msmall:h-[25px] ${getSpecificGameTimeColor()}`}
                      >
                        <h3 className="w-full text-black text-[1.5rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] text-center font-['Exo2'] font-bold">
                          {
                            getIntlArray(t("names"))[
                              stratagemStore.currentStratagem?.id - 1
                            ]
                          }
                        </h3>
                      </div>

                      <div className="flex justify-center items-center pl-[30px] mlarge:pl-[12.5px] mmedium:pl-[10px] w-full h-[120px] mlarge:h-[70px] mmedium:h-[65px] msmall:h-[60px]">
                        <div className="flex">
                          {stratagemStore.currentStratagem.directions?.map(
                            (direction) => getTargetInlineRotate(direction),
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          width: `${stratagemTrainingStore.secondsLeft * 10}%`,
                        }}
                        className={`h-[30px] mlarge:h-[20px] mmedium:h-[17.5px] msmall:h-[15px] ${getSpecificGameTimeColor()}`}
                      ></div>
                    </div>

                    <MediaQuery maxWidth={480}>
                      <div
                        id="SwipeBlock"
                        onTouchStart={(event) =>
                          stratagemTrainingStore.handleTouchStart(event)
                        }
                        onTouchMove={(event) =>
                          stratagemTrainingStore.handleTouchMove(event)
                        }
                        onTouchEnd={stratagemTrainingStore.handleTouchEnd}
                        className={`w-full ${stratagemTrainingStore.isButtonsChoosen ? "grid justify-items-center mt-[30px] h-auto" : "flex justify-center items-center mt-[10px] h-[280px] mmedium:h-[260px] msmall:h-[240px] bg-[#646464] border-[6px] border-[#2a2a2a]"}`}
                      >
                        {stratagemTrainingStore.isButtonsChoosen ? (
                          <>
                            <button
                              onClick={() => simulateKeyPress(87)}
                              className="flex justify-center items-center w-[70px] mmedium:w-[65px] msmall:w-[60px] h-[70px] mmedium:h-[65px] msmall:h-[60px] bg-[#00000066] rounded-[10px] outline-none"
                            >
                              <img
                                src="/GeneralIcons/ArrowIcon.svg"
                                alt=""
                                className="w-[40px] h-[40px]"
                              />
                            </button>

                            <div className="flex justify-between items-center mt-[10px] w-[230px] mmedium:w-[220px] msmall:w-[210px]">
                              <button
                                onClick={() => simulateKeyPress(65)}
                                className="flex justify-center items-center w-[70px] mmedium:w-[65px] msmall:w-[60px] h-[70px] mmedium:h-[65px] msmall:h-[60px] bg-[#00000066] rounded-[10px] outline-none"
                              >
                                <img
                                  src="/GeneralIcons/ArrowIcon.svg"
                                  alt=""
                                  className="w-[40px] h-[40px] -rotate-90"
                                />
                              </button>

                              <button
                                onClick={() => simulateKeyPress(68)}
                                className="flex justify-center items-center w-[70px] mmedium:w-[65px] msmall:w-[60px] h-[70px] mmedium:h-[65px] msmall:h-[60px] bg-[#00000066] rounded-[10px] outline-none"
                              >
                                <img
                                  src="/GeneralIcons/ArrowIcon.svg"
                                  alt=""
                                  className="w-[40px] h-[40px] rotate-90"
                                />
                              </button>
                            </div>

                            <button
                              onClick={() => simulateKeyPress(83)}
                              className="flex justify-center items-center mt-[10px] w-[70px] mmedium:w-[65px] msmall:w-[60px] h-[70px] mmedium:h-[65px] msmall:h-[60px] bg-[#00000066] rounded-[10px] outline-none"
                            >
                              <img
                                src="/GeneralIcons/ArrowIcon.svg"
                                alt=""
                                className="w-[40px] h-[40px] rotate-180"
                              />
                            </button>
                          </>
                        ) : (
                          <p className="w-[80%] text-[#2a2a2a] text-[3rem] mmedium:text-[2.75rem] msmall:text-[2.5rem] text-center font-['Exo2'] font-bold select-none">
                            {getIntlArray(t1("text"))[7]}
                          </p>
                        )}
                      </div>
                    </MediaQuery>

                    <MediaQuery minWidth={480}>
                      <span className="ml-[100px]">
                        <p className="mt-[-12.5px] text-[#ffe702] text-[3rem] text-right font-['Insignia'] font-extrabold">
                          {stratagemTrainingStore.currentScore}
                        </p>

                        <p className="mt-[-17.5px] text-[#ffffff] text-[2rem] text-right font-['Exo2'] font-semibold">
                          {getIntlArray(t1("text"))[6]}
                        </p>

                        <p className="text-[#ffffff] text-[1rem] text-right font-['Exo2'] font-semibold brightness-50">
                          {getIntlArray(t1("text"))[8]}{" "}
                          <b className="font-['Insignia']">
                            {stratagemTrainingStore.highestGameScore}
                          </b>
                        </p>
                      </span>
                    </MediaQuery>
                  </div>
                </>
              )}

            {stratagemTrainingStore.isRoundEnded &&
              stratagemTrainingStore.isRoundLost && (
                <div className="grid justify-items-center mt-[-100px] mlarge:mt-[-30px] w-auto min-w-[550px] mlarge:min-w-[calc(100vw-70px)]">
                  <h2 className="text-[#ffffff] text-[2.5rem] mlarge:text-[1.875rem] mmedium:text-[1.75rem] msmall:text-[1.625rem] font-['Exo2'] font-bold">
                    {getIntlArray(t1("text"))[9]}
                  </h2>

                  <div className="flex justify-between items-center mt-[30px] mlarge:mt-[20px] w-full h-auto">
                    <span className="text-[#ffffff] text-[1.5rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] text-left font-['Exo2'] font-bold">
                      <p>{getIntlArray(t1("text"))[10]}</p>

                      <p className="text-[#ffe702] text-[2rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem]">
                        {stratagemTrainingStore.finalGameScore}
                      </p>
                    </span>

                    <span className="text-[#ffffff] text-[1.5rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] text-right font-['Exo2'] font-bold">
                      <p>{getIntlArray(t1("text"))[11]}</p>

                      <p className="text-[2rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem]">
                        {stratagemTrainingStore.highestGameScore}
                      </p>
                    </span>
                  </div>
                </div>
              )}

            {stratagemTrainingStore.isRoundEnded &&
              stratagemTrainingStore.isResultsShowed &&
              !stratagemTrainingStore.isRoundLost && (
                <div className="relative mt-[-100px] mlarge:mt-[-20px] w-[600px] mlarge:w-full">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      {getIntlArray(t1("text"))[12]}
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemTrainingStore.currentRoundBonus}
                    </p>
                  </div>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-white text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      {getIntlArray(t1("text"))[13]}
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemTrainingStore.currentRoundTimeBonus.toFixed(0)}
                    </p>
                  </span>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-white text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      {getIntlArray(t1("text"))[14]}
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemTrainingStore.isClearInputRound ? "100" : "0"}
                    </p>
                  </span>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-white text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      {getIntlArray(t1("text"))[15]}
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemTrainingStore.currentScore}
                    </p>
                  </span>
                </div>
              )}

            {stratagemTrainingStore.isRoundEnded &&
              !stratagemTrainingStore.isResultsShowed &&
              !stratagemTrainingStore.isRoundLost && (
                <div className="grid justify-items-center mt-[-100px] w-auto">
                  <h2 className="text-white text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Exo2'] font-bold">
                    {getIntlArray(t1("text"))[16]}
                  </h2>

                  <p className="mt-[30px] text-white text-[2.25rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] font-['Exo2'] font-bold">
                    {getIntlArray(t1("text"))[5]}
                  </p>

                  <p className="text-[#ffe702] text-[3rem] mlarge:text-[2rem] mmedium:text-[1.875rem] msmall:text-[1.75rem] font-['Insignia'] font-bold">
                    {stratagemTrainingStore.currentRoundNumber}
                  </p>
                </div>
              )}
          </section>
        </main>
      )}
    </Observer>
  );
});

export default TheStratagemsTrainingContent;
