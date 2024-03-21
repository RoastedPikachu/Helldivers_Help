"use client";
import React, { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import { Enemy } from "@/utils/generalInterfaces";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  const queryParams = useSearchParams();

  const [currentAutomaton, setCurrentAutomaton] = useState({} as Enemy);

  useEffect(() => {
    const currentAutomatonId = +queryParams.get("id")!;

    setCurrentAutomaton(enemyTypeStore.automatons[currentAutomatonId - 1]);
  }, []);
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] deskWide:ml-[calc((100%-1440px)/2)] pb-[65px] px-[5%] w-full max-w-[1440px] h-auto">
        <img
          src=""
          alt=""
          className="w-[80%] h-[300px] border-4 border-[#2cc388] rounded-[7.5px]"
        />

        <h1 className="mt-[20px] text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          <b className="text-[#2cc388] font-bold">Автоматон</b> —{" "}
          {currentAutomaton.title}
        </h1>

        <span>
          <h2 className="mt-[20px] w-[80%] text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
            Опасность
          </h2>

          <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            {currentAutomaton.dangerous}
          </p>
        </span>

        <span>
          <h2 className="mt-[20px] w-[80%] text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
            Тактика
          </h2>

          <p className="mt-[10px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            {currentAutomaton.tactics}
          </p>
        </span>

        <span>
          <h2 className="mt-[20px] w-[80%] text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
            Где встречается
          </h2>

          <p className="mt-[10px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            {currentAutomaton.difficulties}
          </p>
        </span>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
