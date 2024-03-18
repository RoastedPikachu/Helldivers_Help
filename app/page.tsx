"use client";
import React, { useState, useEffect } from "react";

import { Stratagem } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

import { stratagems } from "@/improvised_db";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

export default function Home() {
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

  // TODO: Изменить логику сохранения изменений в стратагемах

  const handleKeyPress = (() => {
    let currentIndex = 0;

    return (event: any) => {
      setCurrentStratagem((prevStratagem) => {
        const targetKey = prevStratagem.keyCodes[currentIndex];

        if (event.keyCode === targetKey) {
          const updatedDirections = [...prevStratagem.directions];
          updatedDirections[currentIndex].isPressed = true;

          currentIndex++;

          if (currentIndex === prevStratagem.keyCodes.length) {
            document.removeEventListener("keydown", handleKeyPress);

            currentIndex = 0;

            changeIsStratagemInputSuccessful(true);
          }

          return {
            ...prevStratagem,
            directions: updatedDirections,
          };
        }
        document.removeEventListener("keydown", handleKeyPress);

        currentIndex = 0;

        changeIsStratagemInputFail(true);

        return prevStratagem;
      });
    };
  })();

  const handleStratagemTrainingStart = () => {
    changeIsStratagemTrainingStarted(true);

    document.addEventListener("keydown", handleKeyPress);
  };

  const handleStratagemTrainingRestart = () => {
    changeIsStratagemInputFail(false);
    changeIsStratagemInputSuccessful(false);
    setCurrentStratagem(nextStratagem);
    setNextStratagem(getRandomEntity(stratagems, currentStratagem));

    document.addEventListener("keydown", handleKeyPress);
  };

  useEffect(() => {
    setCurrentStratagem(getRandomEntity(stratagems, currentStratagem));
    setNextStratagem(getRandomEntity(stratagems, currentStratagem));
  }, []);

  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] w-full h-[calc(100vh-165px)]">
        <section className="grid justify-items-center relative w-full h-auto">
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
                className={`flex justify-center w-full h-[150px] bg-[#00293a] ${
                  isStratagemInputFail
                    ? "border-4 border-[#f44336]"
                    : isStratagemInputSuccessful
                      ? "border-4 border-[#66bb6a]"
                      : ""
                } rounded-[10px]`}
              >
                <div className="relative flex items-center pl-[50px] pr-[10px] w-auto h-[150px]">
                  {currentStratagem.directions?.map((direction) => (
                    <img
                      src={`${
                        direction.isPressed
                          ? "/static/generalIcons/PressedArrowIcon.svg"
                          : "/static/generalIcons/ArrowIcon.svg"
                      }`}
                      alt=""
                      key={direction.id}
                      className={`mr-[40px] w-[65px] h-[60px] ${getTargetRotate(
                        direction.orientation,
                      )}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative flex items-center mt-[50px] pl-[50px] pr-[10px] w-auto h-[110px] bg-[#00293a] rounded-[10px] brightness-[0.25]">
                {nextStratagem.directions?.map((direction) => (
                  <img
                    src="/static/generalIcons/ArrowIcon.svg"
                    alt=""
                    key={direction.id}
                    className={`mr-[40px] w-[55px] h-[50px] ${getTargetRotate(
                      direction.orientation,
                    )}`}
                  />
                ))}
              </div>
            </div>

            {!isStratagemTrainingStarted ? (
              <button
                onClick={handleStratagemTrainingStart}
                className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"
              >
                <img
                  src="/static/generalIcons/StartIcon.svg"
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
                  src="/static/generalIcons/RestartIcon.svg"
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
