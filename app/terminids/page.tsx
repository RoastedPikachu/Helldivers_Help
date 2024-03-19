import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Terminid from "@/entities/Terminid";

const Page = () => {
  const terminids = [
    {
      id: 1,
      imagePath: "",
      title: "Мусорщик",
    },
    {
      id: 2,
      imagePath: "/static/terminids/BileSpitterImage.png",
      title: "Желчный плеватель",
    },
    {
      id: 3,
      imagePath: "",
      title: "Визгун",
    },
    {
      id: 4,
      imagePath: "/static/terminids/HunterImage.png",
      title: "Охотник",
    },
    {
      id: 5,
      imagePath: "/static/terminids/WarriorImage.png",
      title: "Воин",
    },
    {
      id: 6,
      imagePath: "",
      title: "Страж улья",
    },
    {
      id: 7,
      imagePath: "/static/terminids/StalkerImage.png",
      title: "Сталкер",
    },
    {
      id: 8,
      imagePath: "/static/terminids/BroodCommanderImage.png",
      title: "Командир роя",
    },
    {
      id: 9,
      imagePath: "/static/terminids/BileSpewerImage.png",
      title: "Извергатель желчи",
    },
    {
      id: 10,
      imagePath: "/static/terminids/ChargerImage.png",
      title: "Громила",
    },
    {
      id: 11,
      imagePath: "/static/terminids/BileTitanImage.png",
      title: "Желчный титан",
    },
  ];

  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] pb-[65px] px-[5%] w-full h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          ТЕРМИНИДЫ
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          В битве с терминидами Адские Десантники должны быть готовы к опасности
          в любой момент. Эти насекомоподобные создания: быстрые охотники,
          свирепые воины, хитрые сталкеры, ужасные извергатели желчи — каждый из
          них имеет свой набор смертоносных приемов.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Извергатели желчи и громилы представляют особую опасность, а командиры
          роя и желчные титаны требуют мощного вооружения и продуманной тактики
          для их убийства.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Адские Десантники должны полагаться на свою подготовку, веру в
          демократию, командную работу и технологичное снаряжение, чтобы
          обеспечить победу Супер-Земли, выживание человечества и продвижение
          управляемой демократии в этой бесконечной битве.
        </p>

        <section className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {terminids.map((terminid) => (
            <Terminid
              key={terminid.id}
              id={terminid.id}
              imagePath={terminid.imagePath}
              title={terminid.title}
            />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
