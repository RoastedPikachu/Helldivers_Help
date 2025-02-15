import React, { useEffect } from "react";

import Link from "next/link";

import { observer, Observer } from "mobx-react-lite";

import { toSlug } from "@/utils/generalFunctions";

import "./EnemyAdditionalInfoNavigation.css";

const EnemyAdditionalInfoNavigation = observer(() => {
  const getPreviousEnemy = () => {
    if (enemiesStore.currentEnemy.fraction === "Терминиды") {
      return enemiesStore.terminids.at(enemiesStore.currentEnemy.id - 2);
    } else {
      return enemiesStore.automatons.at(enemiesStore.currentEnemy.id - 2);
    }
  };

  const getNextEnemy = () => {
    if (enemiesStore.currentEnemy.fraction === "Терминиды") {
      return (
        enemiesStore.currentEnemy.id === enemiesStore.terminids.length
          ? enemiesStore.terminids[0]
          : enemiesStore.terminids[enemiesStore.currentEnemy.id]
      )!;
    } else {
      return (
        enemiesStore.currentEnemy.id === enemiesStore.automatons.length
          ? enemiesStore.automatons[0]
          : enemiesStore.automatons[enemiesStore.currentEnemy.id]
      )!;
    }
  };

  const handleCurrentEnemyChange = (isNextEnemy: boolean) => {
    isNextEnemy
      ? enemiesStore.changeCurrentEnemy(getNextEnemy())
      : enemiesStore.changeCurrentEnemy(getPreviousEnemy()!);
  };
  return (
    <Observer>
      {() => (
        <div className="navBlock">
          <Link
            href={`${getEnemyFractionPageLink()}/${toSlug(getPreviousEnemy()!.engTitle)}`}
            onClick={() => handleCurrentEnemyChange(false)}
            className="navBlock_buttonEnemyLink"
          >
            <img
              src="/static/GeneralIcons/LeftArrowIcon.svg"
              alt=""
              className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px]"
            />

            <p className="navBlock_buttonEnemyLink_Text ml-[10px] mlarge:ml-[5px] mlarge:text-right">
              {getPreviousEnemy()!.title}
            </p>
          </Link>

          <Link
            href={`${getEnemyFractionPageLink()}/${toSlug(getNextEnemy()?.engTitle)}`}
            onClick={() => handleCurrentEnemyChange(true)}
            className="navBlock_buttonEnemyLink"
          >
            <p className="navBlock_buttonEnemyLink_Text mr-[10px] mlarge:mr-[5px] mlarge:text-left">
              {getNextEnemy()?.title}
            </p>

            <img
              src="/static/GeneralIcons/LeftArrowIcon.svg"
              alt=""
              className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] rotate-180"
            />
          </Link>
        </div>
      )}
    </Observer>
  );
});

export default EnemyAdditionalInfoNavigation;
