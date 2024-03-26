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

      <main className="mt-[30px] deskWide:ml-[calc((100%-1440px)/2)] pb-[100px] px-[5%] deskWide:px-0 w-full max-w-[1440px] h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          МОДУЛИ <b className="text-[#2cc388] font-bold">КОРАБЛЯ</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Корабль — ваше единственное безопасное место в галактике, помимо
          Супер-Земли. Это место из которого вы отправляетесь в миссии и куда
          возвращаетесь, измученные, уставшие, но довольные своими успехами.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Ваш корабль, также как и вы нуждается в улучшениях. Да, каждое из этих
          улучшений является довольно дорогим удовольствием, но эффекты, которые
          вы получаете взамен стоят того. Вы можете сделать из своих турелей
          смертоносные огневые единицы, или же увеличивать частоту вызова
          атакующих стратагем, поливая врагов демократии градом бомб. Главное
          помнить, что ваш корабль — такой же боевой товарищ, как и другие
          Адские Десантники!
        </p>

        <ShipModulesSection />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
