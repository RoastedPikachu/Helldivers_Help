"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { enemiesStore } from "@/store/EnemiesStore";

import {
  getSpecificAutomatonStyle,
  getSpecificTerminidStyle,
} from "@/utils/enemyTypeFunctions";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import "./EnemyAdditionalInfo.css";
import GoBackButton from "@/shared/goBackButton/GoBackButton";

const Page = observer(() => {
  const getEnemyFractionPageLink = () => {
    return enemiesStore.currentEnemy.fraction === "Терминиды"
      ? "enemy/terminids"
      : "/enemy/automatons";
  };
  const getPreviousTitle = () => {
    return enemiesStore.currentEnemy.fraction === "Терминиды"
      ? enemiesStore.terminids.find((enemy) => enemy.id - 1)
      : enemiesStore.automatons.find((enemy) => enemy.id - 1);
  };

  const getNextEnemyTitle = () => {
    return enemiesStore.currentEnemy.fraction === "Терминиды"
      ? enemiesStore.terminids.find((enemy) => enemy.id + 1)
      : enemiesStore.automatons.find((enemy) => enemy.id + 1);
  };
  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <GoBackButton designationLink={getEnemyFractionPageLink()} />

          <main className="flex">
            <section className="w-[calc(100%-500px)] h-auto">
              <h3 className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
                <b className="text-[--theme-color] font-bold">
                  {enemiesStore.currentEnemy.fraction.slice(0, -1)}
                </b>{" "}
                — {enemiesStore.currentEnemy.title}
              </h3>

              <p className="mt-[30px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
                {enemiesStore.currentEnemy.description}
              </p>

              {enemiesStore.currentEnemy.tactics && (
                <span>
                  <h4 className="mt-[20px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
                    Тактика
                  </h4>

                  <p className="mt-[10px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
                    {enemiesStore.currentEnemy.tactics}
                  </p>
                </span>
              )}

              {enemiesStore.currentEnemy.notes && (
                <span>
                  <h4 className="mt-[20px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
                    Заметки
                  </h4>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: enemiesStore.currentEnemy.notes,
                    }}
                    className="mt-[10px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium"
                  ></p>
                </span>
              )}

              {enemiesStore.currentEnemy.types && (
                <span>
                  <h4 className="mt-[20px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
                    Разновидности
                  </h4>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: enemiesStore.currentEnemy.types,
                    }}
                    className="mt-[10px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium"
                  ></div>
                </span>
              )}
            </section>

            <aside className="mt-[80px] ml-[100px]">
              <div
                className={`flex justify-center items-center w-[400px] h-[400px] bg-cover bg-no-repeat border-2 border-[--theme-color] rounded-[10px] ${enemiesStore.currentEnemy.fraction === "Терминиды" ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.webp')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.webp')]"}`}
              >
                <img
                  src={`${enemiesStore.currentEnemy.iconPath}`}
                  alt=""
                  style={{
                    transform: enemiesStore.currentEnemy.imageStyleScale,
                  }}
                  className={`w-[200px] h-[300px] ${enemiesStore.currentEnemy.fraction === "Автоматоны" ? getSpecificAutomatonStyle(enemiesStore.currentEnemy.id) : getSpecificTerminidStyle(enemiesStore.currentEnemy.id)}`}
                />
              </div>
            </aside>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
