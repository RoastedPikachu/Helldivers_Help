import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import ManualSection from "@/entities/ManualSection";
import RunningLine from "@/shared/RunningLine";

const Page = () => {
  const manualSections = [
    { id: 1, link: "/", title: "Вооружение" },
    {
      id: 2,
      link: "/",
      title: "Снаряжение",
    },
    {
      id: 3,
      link: "/boosters",
      title: "Усилители",
    },
    {
      id: 4,
      link: "/resources",
      title: "Ресурсы",
    },
    {
      id: 5,
      link: "/shipModules",
      title: "Модули корабля",
    },
    {
      id: 6,
      link: "/ranks",
      title: "Ранги",
    },
    {
      id: 7,
      link: "/achievements",
      title: "Достижения",
    },
    {
      id: 8,
      link: "/terminids",
      title: "Терминиды",
    },
    {
      id: 9,
      link: "/automatons",
      title: "Автоматоны",
    },
    {
      id: 10,
      link: "/",
      title: "Миссии",
    },
    {
      id: 11,
      link: "/",
      title: "Планеты",
    },
  ];

  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] pb-[65px] px-[5%] w-full h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          СПРАВОЧНИК{" "}
          <b className="text-[#2cc388] font-bold">АДСКОГО ДЕСАНТНИКА</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Добро пожаловать в справочник по Helldivers 2! Приготовьтесь
          погрузиться в захватывающий мир глобальной войны с враждебными
          захватчиками: автоматонами и терминидами. В этом руководстве вы
          найдете всю необходимую информацию, чтобы легче ориентироваться в
          особенностях вашего снаряжения, противников и планет галактики и
          выходить победителем из всех выполняемых вами миссий.
        </p>

        <section className="relative grid grid-cols-4 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {manualSections.map((section) => (
            <ManualSection
              key={section.id}
              id={section.id}
              link={section.link}
              title={section.title}
            />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
