"use client";
import React from "react";

import { samplesCountPerDifficulty } from "@/data/samples";
import { medalsCountPerDifficulty } from "@/data/medals";

import { ResourceTableTitle } from "@/utils/generalInterfaces";

import "./ResourceTable.css";

interface ResourceTableProps {
  resourceId: number;
  titles: ResourceTableTitle[];
}

const ResourceTable: React.FC<ResourceTableProps> = ({
  resourceId,
  titles,
}) => {
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
            className={`topTableRow_Column ${resourceId > 3 ? "mlarge:w-[calc(100%/5)]" : ""}`}
          >
            <p
              className={`${title.id === 1 ? "mlarge:ml-[10%] w-[80%] mlarge:w-full text-left" : ""} topTableRow_Column_Title`}
            >
              {title.name}
            </p>
          </div>
        ))}
      </div>

      {resourceId <= 3
        ? samplesCountPerDifficulty.map((difficulty) => (
            <div key={difficulty.id} className="tableRow">
              <div className="tableRow_Column">
                <p className="tableRow_FirstColumn_Text">
                  {difficulty.id}.{" "}
                  <b className="tableRow_Column_Text_Bold">
                    {difficulty.difficultyTitle}
                  </b>
                </p>
              </div>

              <div className="tableRow_Column">
                <p className="tableRow_Column_Text_Count">
                  {getSpecificSamplesCount(difficulty)}
                </p>
              </div>
            </div>
          ))
        : medalsCountPerDifficulty.map((difficulty) => (
            <div key={difficulty.id} className="tableRow">
              <div className="tableRow_Column">
                <p className="tableRow_FirstColumn_Text">
                  {difficulty.id}.{" "}
                  <b className="tableRow_Column_Text_Bold">
                    {difficulty.difficultyTitle}
                  </b>
                </p>
              </div>

              <div className="tableRow_Column">
                <p className="tableRow_Column_Text_Count">
                  {difficulty.firstMissionCount}
                </p>
              </div>

              <div className="tableRow_Column">
                <p className="tableRow_Column_Text_Count">
                  {difficulty.secondMissionCount}
                </p>
              </div>

              <div className="tableRow_Column">
                <p className="tableRow_Column_Text_Count">
                  {difficulty.thirdMissionCount}
                </p>
              </div>

              <div className="tableRow_Column">
                <p className="tableRow_Column_Text_Count">
                  {difficulty.totalCount}
                </p>
              </div>
            </div>
          ))}
    </section>
  );
};

export default ResourceTable;
