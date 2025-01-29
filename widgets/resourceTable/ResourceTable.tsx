"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { samplesCountPerDifficulty } from "@/data/samples";
import { medalsCountPerDifficulty } from "@/data/medals";

import { ResourceTableTitle } from "@/utils/generalInterfaces";

import "./resourceTable.css";

interface ResourceTableProps {
  resourceId: number;
  titles: ResourceTableTitle[];
}

const ResourceTable: React.FC<ResourceTableProps> = ({
  resourceId,
  titles,
}) => {
  const t = useTranslations("difficulties");

  const getSpecificSamplesCount = (difficulty: any) => {
    switch (resourceId) {
      case 1:
        return difficulty.commonSamplesCount;
      case 2:
        return difficulty.rareSamplesCount;
      case 3:
        return difficulty.superSamplesCount;
    }
  };

  return (
    <section
      className={`${resourceId <= 3 ? "w-[60%] mlarge:w-full" : "w-full"} rootTableSection`}
    >
      <div className="topTableRow">
        {titles.map((title) => (
          <div
            key={title.id}
            className={`topTableRow-column ${resourceId > 3 ? "mlarge:w-[calc(100%/5)]" : ""}`}
          >
            <p
              className={`${title.id === 1 ? "mlarge:ml-[10%] w-[80%] mlarge:w-full text-left" : ""} topTableRow-column-title`}
            >
              {title.name}
            </p>
          </div>
        ))}
      </div>

      {resourceId <= 3
        ? samplesCountPerDifficulty.map((difficulty) => (
            <div key={difficulty.id} className="tableRow">
              <div className="tableRow-column">
                <p className="tableRow-firstColumn-text">
                  {difficulty.id}.{" "}
                  <b className="tableRow-column-text-bold">
                    {getIntlArray(t("names"))[difficulty.id - 1]}
                  </b>
                </p>
              </div>

              <div className="tableRow-column">
                <p className="tableRow-column-text-count">
                  {getSpecificSamplesCount(difficulty)}
                </p>
              </div>
            </div>
          ))
        : medalsCountPerDifficulty.map((difficulty) => (
            <div key={difficulty.id} className="tableRow">
              <div className="tableRow-column">
                <p className="tableRow-firstColumn-text">
                  {difficulty.id}.{" "}
                  <b className="tableRow-column-text-bold">
                    {difficulty.difficultyTitle}
                  </b>
                </p>
              </div>

              <div className="tableRow-column">
                <p className="tableRow-column-text-count">
                  {difficulty.firstMissionCount}
                </p>
              </div>

              <div className="tableRow-column">
                <p className="tableRow-column-text-count">
                  {difficulty.secondMissionCount}
                </p>
              </div>

              <div className="tableRow-column">
                <p className="tableRow-column-text-count">
                  {difficulty.thirdMissionCount}
                </p>
              </div>

              <div className="tableRow-column">
                <p className="tableRow-column-text-count">
                  {difficulty.totalCount}
                </p>
              </div>
            </div>
          ))}
    </section>
  );
};

export default ResourceTable;
