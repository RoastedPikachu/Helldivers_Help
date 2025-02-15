"use client";
import React, { useState, useEffect } from "react";

import { useParams } from "next/navigation";

import { Observer, observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import {
  getSpecificAutomatonStyle,
  getSpecificTerminidStyle,
} from "@/utils/enemyTypeFunctions";

import EnemyAdditionalInfoNavigation from "@/widgets/enemyAdditionalInfoNavigation/EnemyAdditionalInfoNavigation";

import "./enemyContent/TheEnemyContent.css";

const TheSpecificEnemyContent = observer(() => {
  const params = useParams();

  const [currentEnemy, setCurrentEnemy] = useState("");

  useEffect(() => {}, []);
  return (
    <Observer>
      {() => (
        <main className="grid mlarge:block grid-cols-3 mlarge:!mt-[20px]">
          {mobileStore.isMobileDevice ? (
            <>
              {" "}
              <aside className="pageEnemyAside">
                <div
                  className={`pageEnemyAside_ImageWrapper ${currentEnemy.fraction === "Терминиды" ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.webp')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.webp')]"}`}
                >
                  <img
                    src={`${currentEnemy.imagePath}`}
                    alt=""
                    style={{
                      transform: currentEnemy.imageStyleScale,
                    }}
                    className={`pageEnemyAside_ImageWrapper_Image ${currentEnemy.fraction === "Автоматоны" ? getSpecificAutomatonStyle(currentEnemy.id) : getSpecificTerminidStyle(currentEnemy.id)}`}
                  />
                </div>
              </aside>
              <section className="pageEnemyInfoSection">
                <h3 className="pageEnemyInfoSection_Title">
                  <b className="pageEnemyInfoSection_Title_Bold">
                    {currentEnemy.fraction?.slice(0, -1)}
                  </b>{" "}
                  — {currentEnemy.title}
                </h3>

                <p className="pageEnemyInfoSection_Description">
                  {currentEnemy.description}
                </p>

                {currentEnemy.tactics && (
                  <span>
                    <h4 className="pageEnemyInfoSection_SecondaryTitle">
                      Тактика
                    </h4>

                    <p className="pageEnemyInfoSection_Text">
                      {currentEnemy.tactics}
                    </p>
                  </span>
                )}

                {currentEnemy.notes && (
                  <span>
                    <h4 className="pageEnemyInfoSection_SecondaryTitle">
                      Заметки
                    </h4>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: currentEnemy.notes,
                      }}
                      className="pageEnemyInfoSection_Text"
                    ></p>
                  </span>
                )}

                {currentEnemy.types && (
                  <span>
                    <h4 className="pageEnemyInfoSection_SecondaryTitle">
                      Разновидности
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentEnemy.types,
                      }}
                      className="pageEnemyInfoSection_Text"
                    ></div>
                  </span>
                )}
              </section>
            </>
          ) : (
            <>
              <section className="pageEnemyInfoSection">
                <h3 className="pageEnemyInfoSection_Title">
                  <b className="pageEnemyInfoSection_Title_Bold">
                    {currentEnemy.fraction?.slice(0, -1)}
                  </b>{" "}
                  — {currentEnemy.title}
                </h3>

                <p className="pageEnemyInfoSection_Description">
                  {currentEnemy.description}
                </p>

                {currentEnemy.tactics && (
                  <span>
                    <h4 className="pageEnemyInfoSection_SecondaryTitle">
                      Тактика
                    </h4>

                    <p className="pageEnemyInfoSection_Text">
                      {currentEnemy.tactics}
                    </p>
                  </span>
                )}

                {currentEnemy.notes && (
                  <span>
                    <h4 className="pageEnemyInfoSection_SecondaryTitle">
                      Заметки
                    </h4>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: currentEnemy.notes,
                      }}
                      className="pageEnemyInfoSection_Text"
                    ></p>
                  </span>
                )}

                {currentEnemy.types && (
                  <span>
                    <h4 className="pageEnemyInfoSection_SecondaryTitle">
                      Разновидности
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentEnemy.types,
                      }}
                      className="pageEnemyInfoSection_Text"
                    ></div>
                  </span>
                )}
              </section>

              <aside className="pageEnemyAside">
                <div
                  className={`pageEnemyAside_ImageWrapper ${currentEnemy.fraction === "Терминиды" ? "bg-[url('/static/Terminids/TerminidsBackgroundImage.webp')]" : "bg-[url('/static/Automatons/AutomatonsBackgroundImage.webp')]"}`}
                >
                  <img
                    src={`${currentEnemy.imagePath}`}
                    alt=""
                    style={{
                      transform: currentEnemy.imageStyleScale,
                    }}
                    className={`pageEnemyAside_ImageWrapper_Image ${currentEnemy.fraction === "Автоматоны" ? getSpecificAutomatonStyle(currentEnemy.id) : getSpecificTerminidStyle(currentEnemy.id)}`}
                  />
                </div>
              </aside>
            </>
          )}

          <EnemyAdditionalInfoNavigation />
        </main>
      )}
    </Observer>
  );
});

export default TheSpecificEnemyContent;
