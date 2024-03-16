"use client";
import React, { useState, useEffect } from "react";

import { Quote, Stratagem } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

import { quotes, stratagems } from "@/improvised_db";

import TheHeader from "@/shared/TheHeader";
import TheFooter from "@/shared/TheFooter";
import { next } from "sucrase/dist/types/parser/tokenizer";

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState({} as Quote);
  const [currentStratagem, setCurrentStratagem] = useState({} as Stratagem);
  const [nextStratagem, setNextStratagem] = useState({} as Stratagem);

  const [isStratagemTrainingStarted, changeIsStratagemTrainingStarted] =
    useState(false);
  const [isStratagemInputFail, changeIsStratagemInputFail] = useState(false);
  const [isStratagemInputSuccessful, changeIsStratagemInputSuccessful] =
    useState(false);

  const getTargetRotate = (direction: number) => {
    let rotationAngle = "";

    switch (direction) {
      case 2:
        rotationAngle = "rotate-90";
        break;
      case 3:
        rotationAngle = "rotate-180";
        break;
      case 4:
        rotationAngle = "rotate-[270deg]";
        break;
    }

    return rotationAngle;
  };

  const handleKeyPress = (() => {
    let currentIndex = 0;

    const checkKeySequence = () => {
      currentIndex = 0;
    };

    return (event: any) => {
      if (event.shiftKey) {
        const targetKey = currentStratagem.keyCodes[currentIndex];

        if (event.keyCode === targetKey) {
          currentIndex++;

          if (currentIndex === currentStratagem.keyCodes.length) {
            checkKeySequence();
          }
        } else {
          console.log("Incorrect key press. Restarting sequence.");
          changeIsStratagemInputFail(true);
        }
      }
    };
  })();

  const handleStratagemTrainingStart = () => {
    changeIsStratagemTrainingStarted(true);

    document.addEventListener("keydown", handleKeyPress);
  };

  const handleStratagemTrainingRestart = () => {
    setCurrentStratagem(nextStratagem);
    setNextStratagem(getRandomEntity(stratagems, currentStratagem));
  };

  useEffect(() => {
    setCurrentQuote(getRandomEntity(quotes, currentQuote));
    setCurrentStratagem(getRandomEntity(stratagems, currentStratagem));
    setNextStratagem(getRandomEntity(stratagems, currentStratagem));
  }, []);

  return (
    <>
      <TheHeader />

      <main className="w-full h-[calc(100vh-165px)]">
        <marquee
          behavior="scroll"
          direction="left"
          width="100%"
          height="65"
          bgcolor="#00293a"
          className="flex items-center border-y-[1px] border-[#2cc384] text-[#2cc384] text-[1.75rem] font-['Exo2'] font-medium"
        >
          {currentQuote.text}
        </marquee>

        <section className="grid justify-items-center relative mt-[30px] w-full h-auto">
          <h2 className="text-[#ffffff] text-[2.5rem] text-center font-['Exo2'] font-bold">
            Отработка стратагем
          </h2>

          <div className="relative flex mt-[50px] mx-auto w-[1300px] h-auto">
            <div className="w-[150px] h-auto">
              {/*<p className="text-[#ffffff] text-[1.5rem] text-center font-bold">*/}
              {/*  {currentStratagem.name}*/}
              {/*</p>*/}

              <img
                src={`${currentStratagem.image}`}
                alt=""
                className="w-[150px] h-[150px] bg-[#000000] rounded-[10px]"
              />

              <img
                src={`${nextStratagem.image}`}
                alt=""
                className="mt-[50px] mx-[20px] w-[110px] h-[110px] bg-[#000000] rounded-[10px] brightness-[0.25]"
              />
            </div>

            <div className="relative grid justify-items-center ml-[50px] w-[900px] h-auto">
              <div
                className={`flex justify-center w-full bg-[#00293a] ${
                  isStratagemInputFail ? "border-2 border-[#f44336]" : ""
                } rounded-[10px]`}
              >
                <div className="relative flex items-center pl-[50px] pr-[10px] w-auto h-[150px]">
                  {currentStratagem.directions?.map((direction) => (
                    <img
                      src="/static/ArrowIcon.svg"
                      alt=""
                      className={`mr-[40px] w-[65px] h-[60px] ${getTargetRotate(
                        direction,
                      )}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative flex items-center mt-[50px] pl-[50px] pr-[10px] w-auto h-[110px] bg-[#00293a] rounded-[10px] brightness-[0.25]">
                {nextStratagem.directions?.map((direction) => (
                  <img
                    src="/static/ArrowIcon.svg"
                    alt=""
                    className={`mr-[40px] w-[55px] h-[50px] ${getTargetRotate(
                      direction,
                    )}`}
                  />
                ))}
              </div>
            </div>

            {!isStratagemTrainingStarted ? (
              <button
                onClick={() => handleStratagemTrainingStart}
                className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"
              >
                <img
                  src="/static/StartIcon.svg"
                  alt=""
                  className="w-[75px] h-[75px]"
                />
              </button>
            ) : (
              <button
                onClick={handleStratagemTrainingRestart}
                className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"
              >
                <img
                  src="/static/RestartIcon.svg"
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </button>
            )}
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
}
