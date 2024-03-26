import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          ТИПЫ <b className="text-[#2cc388] font-bold">МИССИЙ</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Миссии — это то, выполнением чего занимается каждый Адский Десантник.
          Это сама цель их существования, ведь выполнение миссии — помощь людям,
          дополнительные ресурсы для Супер-Земли и продвижение демократии в
          галактике.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Каждая миссия является задачей, которую надо выполнить. Она может
          таить в себе страшные трудности и опасных врагов, но также и полезные
          ресурсы. Вам придется заниматься большим количеством задач: спасением
          гражданских, добычей ресурсов, зачисткой противников и т.д. Главное
          помнить, без Адских Десантников миссию не выполнить, поэтому вы —
          элита Супер-Земли.
        </p>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
