import React from "react";

import {
  automatonMissions,
  generalMissions,
  terminidMissions,
} from "@/data/missions";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Mission from "@/entities/mission/Mission";

import "./Missions.css";

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

        <section className="pageSection">
          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ОБЩИЕ</h3>

            <div className="pageSection_Block_Wrapper">
              {generalMissions.map((mission) => (
                <Mission
                  key={mission.id}
                  imagePath={mission.imagePath}
                  title={mission.title}
                  description={mission.description}
                />
              ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ПРОТИВ ТЕРМИНИДОВ</h3>

            <div className="pageSection_Block_Wrapper">
              {terminidMissions.map((mission) => (
                <Mission
                  key={mission.id}
                  imagePath={mission.imagePath}
                  title={mission.title}
                  description={mission.description}
                />
              ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ПРОТИВ АВТОМАТОНОВ</h3>

            <div className="pageSection_Block_Wrapper">
              {automatonMissions.map((mission) => (
                <Mission
                  key={mission.id}
                  imagePath={mission.imagePath}
                  title={mission.title}
                  description={mission.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
