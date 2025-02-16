"use client";
import React from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./enemyInfoSection.css";

interface EnemyInfoSectionProps {
  currentEnemy: any;
}

const EnemyInfoSection: React.FC<EnemyInfoSectionProps> = ({
  currentEnemy,
}) => {
  const params = useParams();

  const t = useTranslations(params.fractionName);
  const t1 = useTranslations("EnemyPage");

  return (
    <div className="enemyInfoSection">
      <div className="enemyInfoSection-top">
        <h1>
          {
            getIntlArray(t("names" as never))[
              currentEnemy ? currentEnemy.id - 1 : 0
            ]
          }
        </h1>
      </div>

      <div className="enemyInfoSection-mainInfoContainer">
        <div className="enemyInfoSection-mainInfoContainer-blockWithText">
          <p className="blockText">
            {
              getIntlArray(t("descriptions" as never))[
                currentEnemy ? currentEnemy.id - 1 : 0
              ]
            }
          </p>
        </div>

        <div className="enemyInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[0]}</h3>

          <p className="blockText">
            {
              getIntlArray(t("tactics" as never))[
                currentEnemy ? currentEnemy.id - 1 : 0
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnemyInfoSection;
