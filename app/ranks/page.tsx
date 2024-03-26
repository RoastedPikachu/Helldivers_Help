import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import RanksSection from "@/widgets/RanksSection";
import LevelsSection from "@/widgets/LevelsSection";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          РАНГИ <b className="text-[#2cc388] font-bold">АДСКОГО ДЕСАНТНИКА</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Когда вы отправляетесь в битву, помните, что ваше мужество и
          преданность будут отмечены. Благодаря вашему усердию и верности делу
          Супер-Земли, вы получите повышение и почетные звания за ваши
          героические подвиги в продвижении управляемой демократии.
        </p>

        <p className="mt-[10px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Начиная с кадетского звания, вам нужно продемонстрировать вашу
          верность, проявив себя на поле боя как истинный защитник демократии.
          Каждое полученное звание отражает ваше стремление к величию через
          подвиги, храбрость и мастерство. Пусть ваше имя станет символом мощи,
          которая потрясет галактику!
        </p>

        <RanksSection />

        <LevelsSection />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
