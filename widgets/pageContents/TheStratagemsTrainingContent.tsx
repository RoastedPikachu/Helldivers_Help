"use client";
import React, { useEffect } from "react";

import { observer, Observer } from "mobx-react-lite";

import { stratagemStore } from "@/store/StratagemStore";
import { mobileStore } from "@/store/MobileStore";

import { simulateKeyPress } from "@/utils/generalFunctions";

import "./TheStratagemsTrainingContent.css";

const TheStratagemsTrainingContent = observer(() => {
  const getSpecificGameTimeColor = () => {
    if (stratagemStore.secondsLeft > 2) {
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
      return stratagemStore.isStratagemInputFail ? "#ef4444" : "#ffe702";
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
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[37.5px] mlarge:h-[37.5px] rotate-0 ${getArrowBrightness(direction)}`}
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
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[37.5px] mlarge:h-[37.5px] rotate-90 ${getArrowBrightness(direction)}`}
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
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[37.5px] mlarge:h-[37.5px] rotate-180 ${getArrowBrightness(direction)}`}
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
            className={`mr-[30px] mlarge:mr-[12.5px] mlarge:w-[37.5px] mlarge:h-[37.5px] -rotate-90 ${getArrowBrightness(direction)}`}
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
    if (mobileStore.isMobileDevice && stratagemStore.isGameStarted) {
      document.body.style.overflow = "hidden";
    } else if (mobileStore.isMobileDevice && !stratagemStore.isGameStarted) {
      document.body.style.overflow = "auto";
    }
  }, [stratagemStore.isGameStarted]);

  useEffect(() => {
    document.addEventListener("keydown", stratagemStore.handleGameStart);

    return () => {
      document.removeEventListener("keydown", stratagemStore.handleGameStart);
    };
  }, []);
  return (
    <Observer>
      {() => (
        <main className="mt-0 mlarge:mt-[50px] pt-[50px] mlarge:pt-[30px] deskWide:mx-0 deskWide:px-[calc((100%-1440px)/2)] max-w-full bg-[#0e0e0e]">
          <div className="flex justify-center items-center w-full h-[60px]">
            <h2 className="pageTitle">
              ТРЕНИРОВКА{" "}
              <b className="pageTitle_Bold !text-[#ffe702]">СТРАТАГЕМ</b>
            </h2>
          </div>

          <img
            src="/static/GeneralIcons/SuperEarthBackgroundIcon.svg"
            alt=""
            className="absolute top-0 mlarge:top-[-30px] left-0 w-[700px] mlarge:w-full h-[450px] mlarge:h-[300px] mt-[calc(50vh-150px)] mlarge:mt-[calc(50vh-220px)] mx-[calc((100%-700px)/2)] mlarge:mx-0"
          />

          <section className="relative flex justify-center items-center w-full h-[calc(100vh-310px)] mlarge:min-h-[calc(100vh-310px)] mlarge:h-auto">
            {!stratagemStore.isGameStarted && !stratagemStore.isRoundEnded && (
              <div className="relative grid justify-items-center mlarge:mt-[50px] w-auto h-auto">
                <svg
                  width="50"
                  height="45"
                  viewBox="0 0 65 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mlarge:w-[45px] mlarge:h-[40px]"
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
                  className={`mt-[10px] w-[100px] mlarge:w-[80px] h-[150px] mlarge:h-[120px] ${stratagemStore.isRequiredKeyPressed ? "bg-[#008000]" : "bg-[#7f1d1d]"} border-2 border-[#ffe702] duration-[400ms] ease-in-out`}
                ></div>

                <p className="mt-[10px] w-full text-[#ffe702] text-[1.25rem] mlarge:text-[1.125rem] text-center font-['Exo2'] font-semibold">
                  НАЧАТЬ
                </p>

                <p className="text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] text-center font-['Insignia'] brightness-50">
                  {stratagemStore.highestGameScore}
                </p>

                <p className="mt-[20px] text-[#ffffff] text-[1.25rem] mlarge:text-[1.125rem] text-center font-['Exo2'] brightness-75">
                  Используйте WASD или стрелки на клавиатуре для ввода стратагем
                </p>

                {mobileStore.isMobileDevice && (
                  <div className="relative flex justify-center items-center mt-[20px] ml-[-12px] w-full h-auto">
                    <p className="text-[#ffffff] text-[1.25rem] mlarge:text-[1.125rem] font-['Exo2'] font-bold">
                      Кнопки
                    </p>

                    <label className="relative inline-block mx-[20px] w-[84px] h-[38px]">
                      <input
                        type="checkbox"
                        checked={!stratagemStore.isButtonsChoosen}
                        onClick={() =>
                          stratagemStore.changeIsButtonChoosenStatus(
                            !stratagemStore.isButtonsChoosen,
                          )
                        }
                        className="opacity-0 w-0 h-0 outline-none"
                      />
                      <span className="slider absolute top-0 bottom-0 left-0 right-0 rounded-[34px] bg-[#0e0e0e] border-2 border-[#ffe702] duration-[400ms] ease-in-out cursor-pointer"></span>
                    </label>

                    <p className="text-[#ffffff] text-[1.25rem] mlarge:text-[1.125rem] font-['Exo2'] font-bold">
                      Свайп
                    </p>
                  </div>
                )}
              </div>
            )}

            {!stratagemStore.isRoundEnded && stratagemStore.isGameStarted && (
              <>
                <div className="flex mlarge:block items-start mlarge:mt-[20px]">
                  {mobileStore.isMobileDevice ? (
                    <div className="flex justify-between items-start w-full h-auto">
                      <span className="mr-[100px] mlarge:mr-0">
                        <p className="mt-[-10px] text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] text-left font-['Exo2'] font-semibold">
                          Раунд
                        </p>

                        <p className="mt-[-7.5px] text-[#ffe702] text-[3rem] mlarge:text-[2rem] text-left font-['Insignia'] font-extrabold">
                          {stratagemStore.currentRoundNumber}
                        </p>
                      </span>

                      <span className="ml-[100px] mlarge:ml-0">
                        <p className="mt-[-12.5px] text-[#ffe702] text-[3rem] mlarge:text-[2rem] text-right font-['Insignia'] font-extrabold">
                          {stratagemStore.currentScore}
                        </p>

                        <p className="mt-[-17.5px] text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] text-right font-['Exo2'] font-semibold">
                          Счет
                        </p>

                        <p className="text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] text-right font-['Exo2'] font-semibold brightness-50">
                          Ваш рекорд:{" "}
                          <b className="font-['Insignia']">
                            {stratagemStore.highestGameScore}
                          </b>
                        </p>
                      </span>
                    </div>
                  ) : (
                    <span className="mr-[100px]">
                      <p className="mt-[-10px] text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] text-left font-['Exo2'] font-semibold">
                        Раунд
                      </p>

                      <p className="mt-[-7.5px] text-[#ffe702] text-[3rem] mlarge:text-[2rem] text-left font-['Insignia'] font-extrabold">
                        {stratagemStore.currentRoundNumber}
                      </p>
                    </span>
                  )}

                  <div className="relative p-[4px] w-auto min-w-[735px] mlarge:min-w-[calc(100vw-20px)] h-auto">
                    <div className="flex items-center w-full h-[120px] mlarge:h-[70px]">
                      <img
                        src={`${stratagemStore.currentStratagem.iconPath}`}
                        alt=""
                        className="w-[120px] mlarge:w-[70px] h-full"
                      />

                      {stratagemStore.nextStratagemsArray
                        .slice(0, 5)
                        .map((nextStratagem, index) => (
                          <img
                            key={index + 1}
                            src={`${nextStratagem.iconPath}`}
                            alt=""
                            className="ml-[40px] mlarge:ml-[17.5px] w-[75px] mlarge:w-[45px] h-[75px] mlarge:h-[45px]"
                          />
                        ))}
                    </div>

                    <div
                      className={`flex items-center mt-[10px] w-full h-[50px] mlarge:h-[30px] ${getSpecificGameTimeColor()}`}
                    >
                      <h3 className="w-full text-[#000000] text-[1.5rem] mlarge:text-[1rem] text-center font-['Exo2'] font-bold">
                        {stratagemStore.currentStratagem.name}
                      </h3>
                    </div>

                    <div className="flex justify-center items-center pl-[30px] mlarge:pl-[12.5px] w-full h-[120px] mlarge:h-[70px]">
                      <div className="flex">
                        {stratagemStore.currentStratagem.directions?.map(
                          (direction) => getTargetInlineRotate(direction),
                        )}
                      </div>
                    </div>

                    <div
                      style={{ width: `${stratagemStore.secondsLeft * 10}%` }}
                      className={`h-[30px] mlarge:h-[20px] ${getSpecificGameTimeColor()}`}
                    ></div>
                  </div>

                  {mobileStore.isMobileDevice && (
                    <div
                      id="SwipeBlock"
                      className={`w-full ${stratagemStore.isButtonsChoosen ? "grid justify-items-center mt-[30px] h-auto" : "flex justify-center items-center mt-[10px] h-[280px] bg-[#646464] border-[6px] border-[#2a2a2a]"}`}
                    >
                      {stratagemStore.isButtonsChoosen ? (
                        <>
                          <button
                            onClick={() => simulateKeyPress(87)}
                            className="flex justify-center items-center w-[70px] h-[70px] bg-[#00000066] rounded-[10px]"
                          >
                            <img
                              src="/static/GeneralIcons/ArrowIcon.svg"
                              alt=""
                              className="w-[40px] h-[40px]"
                            />
                          </button>

                          <div className="flex justify-between items-center mt-[10px] w-[210px]">
                            <button
                              onClick={() => simulateKeyPress(65)}
                              className="flex justify-center items-center w-[70px] h-[70px] bg-[#00000066] rounded-[10px]"
                            >
                              <img
                                src="/static/GeneralIcons/ArrowIcon.svg"
                                alt=""
                                className="w-[40px] h-[40px] -rotate-90"
                              />
                            </button>

                            <button
                              onClick={() => simulateKeyPress(68)}
                              className="flex justify-center items-center w-[70px] h-[70px] bg-[#00000066] rounded-[10px]"
                            >
                              <img
                                src="/static/GeneralIcons/ArrowIcon.svg"
                                alt=""
                                className="w-[40px] h-[40px] rotate-90"
                              />
                            </button>
                          </div>

                          <button
                            onClick={() => simulateKeyPress(83)}
                            className="flex justify-center items-center mt-[10px] w-[70px] h-[70px] bg-[#00000066] rounded-[10px]"
                          >
                            <img
                              src="/static/GeneralIcons/ArrowIcon.svg"
                              alt=""
                              className="w-[40px] h-[40px] rotate-180"
                            />
                          </button>
                        </>
                      ) : (
                        <p className="w-[80%] text-[#2a2a2a] text-[3.25rem] text-center font-['Exo2'] font-bold">
                          СВАЙПАЙТЕ ЗДЕСЬ
                        </p>
                      )}
                    </div>
                  )}

                  {!mobileStore.isMobileDevice && (
                    <span className="ml-[100px]">
                      <p className="mt-[-12.5px] text-[#ffe702] text-[3rem] text-right font-['Insignia'] font-extrabold">
                        {stratagemStore.currentScore}
                      </p>

                      <p className="mt-[-17.5px] text-[#ffffff] text-[2rem] text-right font-['Exo2'] font-semibold">
                        Счет
                      </p>

                      <p className="text-[#ffffff] text-[1rem] text-right font-['Exo2'] font-semibold brightness-50">
                        Ваш рекорд:{" "}
                        <b className="font-['Insignia']">
                          {stratagemStore.highestGameScore}
                        </b>
                      </p>
                    </span>
                  )}
                </div>
              </>
            )}

            {stratagemStore.isRoundEnded && stratagemStore.isRoundLost && (
              <div className="grid justify-items-center mt-[-100px] mlarge:mt-[-10px] w-auto min-w-[550px] mlarge:min-w-[calc(100vw-70px)]">
                <h2 className="text-[#ffffff] text-[2.5rem] mlarge:text-[2rem] font-['Exo2'] font-bold">
                  Игра окончена
                </h2>

                <div className="flex justify-between items-center mt-[30px] mlarge:mt-[20px] w-full h-auto">
                  <span className="text-[#ffffff] text-[1.5rem] mlarge:text-[1.125rem] text-left font-['Exo2'] font-bold">
                    <p>ФИНАЛЬНЫЙ СЧЕТ</p>

                    <p className="text-[#ffe702] text-[2rem] mlarge:text-[1.375rem]">
                      {stratagemStore.finalGameScore}
                    </p>
                  </span>

                  <span className="text-[#ffffff] text-[1.5rem] mlarge:text-[1.125rem] text-right font-['Exo2'] font-bold">
                    <p>МАКС. РЕЗУЛЬТАТ</p>

                    <p className="text-[2rem] mlarge:text-[1.375rem]">
                      {stratagemStore.highestGameScore}
                    </p>
                  </span>
                </div>
              </div>
            )}

            {stratagemStore.isRoundEnded &&
              stratagemStore.isResultsShowed &&
              !stratagemStore.isRoundLost && (
                <div className="relative mt-[-100px] mlarge:mt-[20px] w-[600px] mlarge:w-full">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      Бонус за раунд
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.currentRoundBonus}
                    </p>
                  </div>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      Бонус за время
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.currentRoundTimeBonus.toFixed(0)}
                    </p>
                  </span>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      Бонус за идеал
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.isClearInputRound ? "100" : "0"}
                    </p>
                  </span>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Exo2'] font-bold">
                      Итоговый счет
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.currentScore}
                    </p>
                  </span>
                </div>
              )}

            {stratagemStore.isRoundEnded &&
              !stratagemStore.isResultsShowed &&
              !stratagemStore.isRoundLost && (
                <div className="grid justify-items-center mt-[-100px] w-auto">
                  <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
                    Приготовьтесь
                  </h2>

                  <p className="mt-[30px] text-[#ffffff] text-[2.25rem] font-['Exo2'] font-bold">
                    Раунд
                  </p>

                  <p className="text-[#ffe702] text-[3rem] font-['Insignia'] font-bold">
                    {stratagemStore.currentRoundNumber}
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
