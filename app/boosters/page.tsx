import React from "react";

import { boostersStore } from "@/store/BoostersStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Booster from "@/entities/booster/Booster";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          УСИЛИТЕЛИ
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Чтобы упростить продвижение демократии и свободы в галактике
          руководство Супер-Земли с помощью ученых смогло разработать усилители.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Усилители - мощное средство, которое дает различные бонусы во время
          выполнения задания всей вашей команде Адских Десантников. Выбирайте их
          мудро и советуйтесь со своими боевыми товарищами, чтобы у противников
          демократии не осталось и шанса!
        </p>

        <section className="relative grid grid-cols-2 grid-rows-19 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {boostersStore.boosters.map((booster) => (
            <Booster
              key={booster.id}
              iconPath={booster.iconPath}
              title={booster.title}
              effect={booster.effect}
              price={booster.price}
            />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
