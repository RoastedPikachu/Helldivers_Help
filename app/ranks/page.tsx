import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import Rank from "@/entities/Rank";

const Page = () => {
  const ranks = [
    {
      id: 1,
      iconPath: "/static/ranks/CadetIcon.svg",
      title: "Кадет",
    },
    {
      id: 2,
      iconPath: "/static/ranks/SpaceCadetIcon.svg",
      title: "Космический кадет",
    },
    {
      id: 3,
      iconPath: "/static/ranks/SergeantIcon.svg",
      title: "Сержант",
    },
    {
      id: 4,
      iconPath: "/static/ranks/MasterSergeantIcon.svg",
      title: "Мастер-сержант",
    },
    {
      id: 5,
      iconPath: "/static/ranks/ChiefIcon.svg",
      title: "Мичман",
    },
    {
      id: 6,
      iconPath: "/static/ranks/SpaceChiefPrimeIcon.svg",
      title: "",
    },
    {
      id: 7,
      iconPath: "/static/ranks/DeathCaptainIcon.svg",
      title: "Капитан смерть",
    },
    {
      id: 8,
      iconPath: "/static/ranks/MarshalIcon.svg",
      title: "Маршал",
    },
    {
      id: 9,
      iconPath: "/static/ranks/StarMarshalIcon.svg",
      title: "Космический маршал",
    },
    {
      id: 10,
      iconPath: "/static/ranks/AdmiralIcon.svg",
      title: "Адмирал",
    },
    {
      id: 11,
      iconPath: "/static/ranks/SkullAdmiralIcon.svg",
      title: "Адмирал Череп",
    },
    {
      id: 12,
      iconPath: "/static/ranks/SuperCitizenIcon.svg",
      title: "Супер гражданин",
    },
  ];

  return (
    <>
      <TheHeader />

      <main className="mt-[65px] pb-[65px] px-[5%] w-full h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          РАНГИ <b className="text-[#2cc388] font-bold">АДСКОГО ДЕСАНТНИКА</b>
        </h2>

        <p className="mt-[20px] w-[40%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Когда вы отправляетесь в битву, помните, что ваше мужество и
          преданность будут отмечены. Благодаря вашему усердию и верности делу
          Супер-Земли, вы получите повышение и почетные звания за ваши
          героические подвиги в продвижении управляемой демократии.
        </p>

        <p className="mt-[10px] w-[40%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Начиная с кадетского звания, вам нужно продемонстрировать вашу
          верность, проявив себя на поле боя как истинный защитник демократии.
          Каждое полученное звание отражает ваше стремление к величию через
          подвиги, храбрость и мастерство. Пусть ваше имя станет символом мощи,
          которая потрясет галактику!
        </p>

        <section className="relative grid grid-cols-4 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {ranks.map((rank) => (
            <Rank key={rank.id} iconPath={rank.iconPath} title={rank.title} />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
