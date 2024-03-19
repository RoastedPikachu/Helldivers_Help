"use client";
import React, { useState } from "react";

import { IResource } from "@/utils/generalInterfaces";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import Resource from "@/entities/Resource";
import CurrentResourceInfo from "@/entities/CurrentResourceInfo";

const Page = () => {
  const resources = [
    {
      id: 1,
      iconPath: "/static/resources/CommonSampleIcon.svg",
      title: "Обычные образцы",
      difficulties: "На всех сложностях",
      obtainingMethod:
        "Нахождение на точках интереса, аванпостах терминидов и автоматонов",
      applicationScope: "Улучшение 1, 2 и 3 уровня модулей корабля",
      maxAmount: "500 единиц",
    },
    {
      id: 2,
      iconPath: "/static/resources/RareSampleIcon.svg",
      title: "Редкие образцы",
      difficulties:
        "Этот вид образцов встречается начиная с 4 уровня сложности",
      obtainingMethod:
        "Нахождение на точках интереса, аванпостах терминидов и автоматонов, также в дикой природе, в форме цветка",
      applicationScope: "Улучшение 2 уровня модулей корабля",
      maxAmount: "250 единиц",
    },
    {
      id: 3,
      iconPath: "/static/resources/UltraRareSampleIcon.svg",
      title: "Очень редкие образцы",
      difficulties:
        "Этот вид образцов встречается начиная с 7 уровня сложности",
      obtainingMethod: "Нахождение на точке интереса с камнем",
      applicationScope: "Улучшение 3 уровня модулей корабля",
      maxAmount: "100 единиц",
    },
    {
      id: 4,
      iconPath: "/static/resources/SuperCreditIcon.svg",
      title: "Супер кредиты",
      difficulties: "На всех сложностях",
      prices: ["— $1.99", "— $4.99", "— $9.99", "— $19.99"],
      obtainingMethod:
        "Покупка внутриигровом магазине или нахождение на точках интереса",
      applicationScope:
        "Покупка предметов в супер-магазине или боевого пропуска",
      maxAmount: "Зависит от размеров кошелька или вашего времени",
    },
    {
      id: 5,
      iconPath: "/static/resources/MedalIcon.svg",
      title: "Медали",
      difficulties: "На всех сложностях",
      obtainingMethod:
        "Завершение заданий, нахождение на точках интереса, выполнение приказов с Супер-Земли",
      applicationScope: "Покупка содержимого боевого пропуска",
      maxAmount: "250 единиц",
    },
    {
      id: 6,
      iconPath: "/static/resources/RequisitesIcon.svg",
      title: "Реквизиты",
      difficulties: "На всех сложностях",
      obtainingMethod:
        "Завершение заданий, успешная эвакуация с задания, нахождение на точках интереса",
      applicationScope: "Покупка стратагем",
      maxAmount: "50000 единиц",
    },
  ] as IResource[];

  const [currentResource, setCurrentResource] = useState({} as IResource);

  const handleResourceBlockClick = (id: number) => {
    setCurrentResource(resources.find((resource) => resource.id === id)!);
  };

  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] pb-[65px] px-[5%] w-full h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          РЕСУРСЫ <b className="text-[#2cc388] font-bold">ГАЛАКТИКИ</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Ресурсы — это топливо для повышения вашей личной эффективности в
          борьбе за продвижение управляемой демократии, свободы и процветания по
          всей галактике.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Они позволяют улучшать корабль, покупать новое снаряжение и
          вооружение, а также открывать боевой пропуск.
        </p>

        <section className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {resources.map((resource) => (
            <Resource
              key={resource.id}
              id={resource.id}
              iconPath={resource.iconPath}
              title={resource.title}
              handleResourceBlockClick={handleResourceBlockClick}
            />
          ))}
        </section>

        <section className="mt-[50px]">
          {currentResource.id && (
            <CurrentResourceInfo
              title={currentResource.title}
              difficulties={currentResource.difficulties}
              prices={currentResource.prices}
              obtainingMethod={currentResource.obtainingMethod}
              applicationScope={currentResource.applicationScope}
              maxAmount={currentResource.maxAmount}
            />
          )}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
