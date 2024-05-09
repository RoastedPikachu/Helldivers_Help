"use client";
import React, { useEffect, useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { stratagemStore } from "@/store/StratagemStore";

import { Stratagem } from "@/utils/generalInterfaces";

import { getRandomEntity, getTargetRotate } from "@/utils/generalFunctions";

import ThePageTitle from "@/shared/ThePageTitle";

const TheStratagemsTrainingContent = observer(() => {
  const [currentStratagem, setCurrentStratagem] = useState({} as Stratagem);
  const [nextStratagemsArray, setNextStratagemsArray] = useState(
    [] as Stratagem[],
  );

  const [currentRoundNumber, setCurrentRoundNumber] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const [isGameStarted, changeIsGameStartedStatus] = useState(false);
  const [isRoundStarted, changeIsRoundStartedStatus] = useState(false);

  const handleGameStart = (event: KeyboardEvent) => {
    if ((event.keyCode === 38 || event.keyCode === 87) && !isGameStarted) {
      console.log("Game started");
      changeIsGameStartedStatus(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleGameStart);

    const stratagemsArray = Object.values(stratagemStore.stratagems)
      .map((shipModule) => [...shipModule])
      .flat();

    setCurrentStratagem(getRandomEntity(stratagemsArray, currentStratagem));

    for (let i = 0; i < 6; i++) {
      nextStratagemsArray.push(
        getRandomEntity(stratagemsArray, currentStratagem),
      );
    }

    return () => {
      document.removeEventListener("keydown", handleGameStart);
    };
  }, []);
  return (
    <Observer>
      {() => (
        <main>
          <div className="flex justify-center items-center w-full h-[60px]">
            <ThePageTitle title={"тренировка"} additionalTitle={"стратагем"} />
          </div>

          <section className="relative flex justify-center items-center w-full h-[calc(100vh-310px)]">
            <div className="relative grid justify-items-center w-auto h-auto">
              <svg
                width="50"
                height="45"
                viewBox="0 0 65 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                className={`mt-[10px] w-[100px] h-[150px] ${isGameStarted ? "bg-[#008000]" : "bg-[#7f1d1d]"} border-2 border-[#ffe702] duration-[400ms] ease-in-out`}
              ></div>

              <p className="mt-[10px] w-full text-[#ffe702] text-[1.25rem] text-center font-['Exo2'] font-semibold">
                НАЧАТЬ
              </p>

              <p className="mt-[20px] text-[#ffffff] text-[1.25rem] text-center brightness-75">
                Используйте WASD или стрелки на клавиатуре для ввода стратагем
              </p>
            </div>
            {/*{isRoundStarted ? (*/}
            {/*  <div className="relative p-[4px] w-auto min-w-[700px] h-auto bg-[#000000] border-4 border-[#ffe702]">*/}
            {/*    <div className="flex justify-between items-center w-full h-[120px]">*/}
            {/*      <img*/}
            {/*        src={`${currentStratagem.iconPath}`}*/}
            {/*        alt=""*/}
            {/*        className="w-[120px] h-full"*/}
            {/*      />*/}

            {/*      {nextStratagemsArray.slice(0, 6).map((nextStratagem) => (*/}
            {/*        <img*/}
            {/*          key={nextStratagem.id}*/}
            {/*          src={`${nextStratagem.iconPath}`}*/}
            {/*          alt=""*/}
            {/*          className="w-[60px] h-[60px]"*/}
            {/*        />*/}
            {/*      ))}*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center mt-[10px] w-full h-[50px] bg-[#ffe702]">*/}
            {/*      <h3 className="w-full text-[#ffffff] text-[1.5rem] text-center font-['Exo2'] font-bold">*/}
            {/*        {currentStratagem.name}*/}
            {/*      </h3>*/}
            {/*    </div>*/}

            {/*    <div className="flex justify-evenly items-center w-full h-[120px]">*/}
            {/*      {currentStratagem.directions?.map((direction) => (*/}
            {/*        <img*/}
            {/*          key={direction.id}*/}
            {/*          src="/static/GeneralIcons/ArrowIcon.svg"*/}
            {/*          alt=""*/}
            {/*          className={`w-[70px] h-[70px] ${getTargetRotate(direction.orientation)}`}*/}
            {/*        />*/}
            {/*      ))}*/}
            {/*    </div>*/}

            {/*    <div*/}
            {/*      style={{ width: `${secondsLeft * 10}%` }}*/}
            {/*      className="h-[30px] bg-[#ffe702]"*/}
            {/*    ></div>*/}
            {/*  </div>*/}
            {/*) : (*/}
            {/*  <div className="grid justify-items-center mt-[-100px] w-auto">*/}
            {/*    <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">*/}
            {/*      Приготовьтесь*/}
            {/*    </h2>*/}

            {/*    <p className="mt-[30px] text-[#ffffff] text-[2.25rem] font-['Exo2'] font-bold">*/}
            {/*      Раунд*/}
            {/*    </p>*/}

            {/*    <p className="text-[#ffe702] text-[3rem] font-['Insignia'] font-bold">*/}
            {/*      {currentRoundNumber}*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*)}*/}
          </section>
        </main>
      )}
    </Observer>
  );
});

export default TheStratagemsTrainingContent;
