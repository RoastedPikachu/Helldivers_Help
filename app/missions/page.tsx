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
        <h2 className="pageTitle">
          ТИПЫ <b className="pageTitle_Bold">МИССИЙ</b>
        </h2>

        <p className="pageDescription">
          Миссии — это то, выполнением чего занимается каждый Адский Десантник.
          Это сама цель их существования, ведь выполнение миссии — помощь людям,
          дополнительные ресурсы для Супер-Земли и продвижение демократии в
          галактике.
        </p>

        <p className="pageDescription">
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
                  level={mission.level}
                  targetMissionCompletionCount={
                    mission.targetMissionCompletionCount
                  }
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
                  level={mission.level}
                  targetMissionCompletionCount={
                    mission.targetMissionCompletionCount
                  }
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
                  level={mission.level}
                  targetMissionCompletionCount={
                    mission.targetMissionCompletionCount
                  }
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
