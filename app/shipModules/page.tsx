import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import ShipModulesSection from "@/widgets/ShipModulesSection";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] deskWide:ml-[calc((100%-1440px)/2)] pb-[100px] px-[5%] w-full max-w-[1440px] h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          МОДУЛИ <b className="text-[#2cc388] font-bold">КОРАБЛЯ</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Когда вы отправляетесь в битву, помните, что ваше мужество и
          преданность будут отмечены. Благодаря вашему усердию и верности делу
          Супер-Земли, вы получите повышение и почетные звания за ваши
          героические подвиги в продвижении управляемой демократии.
        </p>

        <ShipModulesSection/>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
