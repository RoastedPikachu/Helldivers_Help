"use client";
import React, { useState, useEffect } from "react";

import { Quote, Stratagem } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

import { quotes, stratagems } from "@/improvised_db";

import TheHeader from "@/shared/TheHeader";
import TheFooter from "@/shared/TheFooter";

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState({} as Quote);
  const [currentStratagem, setCurrentStratagem] = useState({} as Stratagem);
  const [nextStratagem, setNextStratagem] = useState({} as Stratagem);

  const getTargetRotate = (direction: number): string => {
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

  useEffect(() => {
    setCurrentQuote(getRandomEntity(quotes, currentQuote));
    setCurrentStratagem(getRandomEntity(stratagems, currentStratagem));
    setNextStratagem(getRandomEntity(stratagems, currentStratagem));
  }, []);

  return (
    <>
      <TheHeader />

      <main className="w-full h-[850px]">
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

        <section className="grid justify-items-center grid-rgrid-cols-1 relative mt-[50px] w-full h-[400px]">
          <h2 className="text-[#ffffff] text-[2.5rem] text-center font-['Exo2'] font-bold">
            Отработка стратагем
          </h2>

          <div className="relative flex row-span-7 mt-[50px] mx-auto w-auto h-auto">
            <div className="w-[150px] h-[150px]">
              {/*<p className="text-[#ffffff] text-[1.5rem] text-center font-bold">*/}
              {/*  {currentStratagem.name}*/}
              {/*</p>*/}

              <img
                src={`${currentStratagem.image}`}
                alt=""
                className="w-[150px] h-[150px] bg-[#000000]"
              />

              <img
                src={`${nextStratagem.image}`}
                alt=""
                className="mt-[50px] mx-[20px] w-[110px] h-[110px] bg-[#000000] brightness-[0.25]"
              />
            </div>

            <div className="relative w-auto h-auto">
              <div className="relative flex items-center ml-[50px] pl-[50px] pr-[10px] w-auto h-[150px] bg-[#00293a]">
                {currentStratagem.directions?.map((direction) => (
                  <img
                    src="/static/ArrowIcon.svg"
                    alt=""
                    className={`mr-[40px] w-[65px] h-[60px] ${getTargetRotate(direction)}`}
                  />
                ))}
              </div>

              <div className="relative flex items-center mt-[50px] ml-[50px] pl-[50px] pr-[10px] w-auto h-[110px] bg-[#00293a] brightness-[0.25]">
                {nextStratagem.directions?.map((direction) => (
                  <img
                    src="/static/ArrowIcon.svg"
                    alt=""
                    className={`mr-[40px] w-[55px] h-[50px] ${getTargetRotate(direction)}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
}
