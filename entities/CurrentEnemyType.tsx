"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import { enemyTypeStore } from "@/store/EnemyTypeStore";
import { getSpecificAutomatonImageScale } from "@/utils/generalFunctions";

interface CurrentEnemyTypeProps {
  rootBlockStyles: string;
}

const CurrentEnemyType: React.FC<CurrentEnemyTypeProps> = observer(
  ({ rootBlockStyles }) => {
    return (
      <Observer>
        {() => (
          <div className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen">
            <div className="absolute w-screen h-screen bg-[#000000] opacity-45"></div>

            <div className="relative flex px-[20px] py-[40px] h-auto w-[80vw] bg-[#00293a] border-2 border-[--theme-color] rounded-[10px] z-30">
              <button
                onClick={() => enemyTypeStore.clearCurrentEnemyType()}
                className="absolute top-[40px] right-[40px] w-[35px] h-[35px]"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="w-full h-full"
                />
              </button>

              <div
                className={`relative flex justify-center items-center w-[400px] h-[400px] ${enemyTypeStore.currentEnemyType.fractionType === 1 ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.png')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.png')]"} bg-cover bg-no-repeat border-2 border-[--theme-color] rounded-[7.5px]`}
              >
                {enemyTypeStore.currentEnemyType.iconPath ? (
                  <img
                    src={enemyTypeStore.currentEnemyType.iconPath}
                    alt=""
                    className={`${rootBlockStyles} ${getSpecificAutomatonImageScale(enemyTypeStore.currentEnemyType.fractionType, enemyTypeStore.currentEnemyType.id)}`}
                  />
                ) : (
                  <p
                    className={`text-[--theme-color] text-[10rem] text-center font-['Insignia'] font-bold`}
                  >
                    ?
                  </p>
                )}
              </div>

              <div className="mt-[-10px] ml-[40px] w-[calc(100%-440px)] h-auto">
                <h1 className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
                  <b className="text-[--theme-color] font-bold">Терминид</b> —{" "}
                  {enemyTypeStore.currentEnemyType.title}
                </h1>

                <span>
                  <h2 className="mt-[10px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
                    Опасность
                  </h2>

                  <p className="mt-[10px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
                    {enemyTypeStore.currentEnemyType.dangerous}
                  </p>
                </span>

                <span>
                  <h2 className="mt-[10px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
                    Тактика
                  </h2>

                  <p className="mt-[10px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
                    {enemyTypeStore.currentEnemyType.tactics}
                  </p>
                </span>

                <span>
                  <h2 className="mt-[10px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
                    Где встречается
                  </h2>

                  <p className="mt-[10px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-medium brightness-75">
                    {enemyTypeStore.currentEnemyType.difficulties}
                  </p>
                </span>
              </div>
            </div>
          </div>
        )}
      </Observer>
    );
  },
);

export default CurrentEnemyType;
