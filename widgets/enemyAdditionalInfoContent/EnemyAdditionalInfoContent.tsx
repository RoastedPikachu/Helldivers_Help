"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import { enemiesStore } from "@/store/EnemiesStore";

import {
  getSpecificAutomatonStyle,
  getSpecificTerminidStyle,
} from "@/utils/enemyTypeFunctions";
import { getEnemyFractionPageLink } from "@/utils/generalFunctions";

import EnemyAdditionalInfoNavigation from "@/widgets/enemyAdditionalInfoNavigation/EnemyAdditionalInfoNavigation";

import GoBackButton from "@/shared/goBackButton/GoBackButton";

import "./EnemyAdditionalInfoContent.css";

const EnemyAdditionalInfoContent = observer(() => {
  return (
    <Observer>
      {() => (
        <>
          <GoBackButton designationLink={getEnemyFractionPageLink()} />

          <section className="pageEnemyInfoSection">
            <h3 className="pageEnemyInfoSection_Title">
              <b className="pageEnemyInfoSection_Title_Bold">
                {enemiesStore.currentEnemy.fraction?.slice(0, -1)}
              </b>{" "}
              — {enemiesStore.currentEnemy.title}
            </h3>

            <p className="pageEnemyInfoSection_Description">
              {enemiesStore.currentEnemy.description}
            </p>

            {enemiesStore.currentEnemy.tactics && (
              <span>
                <h4 className="pageEnemyInfoSection_SecondaryTitle">Тактика</h4>

                <p className="pageEnemyInfoSection_Text">
                  {enemiesStore.currentEnemy.tactics}
                </p>
              </span>
            )}

            {enemiesStore.currentEnemy.notes && (
              <span>
                <h4 className="pageEnemyInfoSection_SecondaryTitle">Заметки</h4>

                <p
                  dangerouslySetInnerHTML={{
                    __html: enemiesStore.currentEnemy.notes,
                  }}
                  className="pageEnemyInfoSection_Text"
                ></p>
              </span>
            )}

            {enemiesStore.currentEnemy.types && (
              <span>
                <h4 className="pageEnemyInfoSection_SecondaryTitle">
                  Разновидности
                </h4>

                <div
                  dangerouslySetInnerHTML={{
                    __html: enemiesStore.currentEnemy.types,
                  }}
                  className="pageEnemyInfoSection_Text"
                ></div>
              </span>
            )}
          </section>

          <aside className="pageEnemyAside">
            <div
              className={`pageEnemyAside_ImageWrapper ${enemiesStore.currentEnemy.fraction === "Терминиды" ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.webp')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.webp')]"}`}
            >
              <img
                src={`${enemiesStore.currentEnemy.iconPath}`}
                alt=""
                style={{
                  transform: enemiesStore.currentEnemy.imageStyleScale,
                }}
                className={`pageEnemyAside_ImageWrapper_Image ${enemiesStore.currentEnemy.fraction === "Автоматоны" ? getSpecificAutomatonStyle(enemiesStore.currentEnemy.id) : getSpecificTerminidStyle(enemiesStore.currentEnemy.id)}`}
              />
            </div>
          </aside>

          <EnemyAdditionalInfoNavigation />
        </>
      )}
    </Observer>
  );
});

export default EnemyAdditionalInfoContent;
