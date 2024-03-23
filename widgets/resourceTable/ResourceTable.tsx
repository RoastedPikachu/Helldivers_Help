"use client";
import React from "react";

import {
  medalsCountPerDifficulty,
  samplesCountPerDifficulty,
} from "@/improvised_db";

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
      className={`${resourceId <= 3 ? "w-[60%]" : "w-full"} rootTableSection`}
    >
      <div className="topTableRow">
        {titles.map((title) => (
          <div key={title.id} className="topTableRow_Column">
            <p
              className={`${title.id === 1 ? "w-[80%] text-left" : ""} topTableRow_Column_Title`}
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
                <p className="tableRow_Column_Text">
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
                <p className="tableRow_MedalFirstColumn_Text">
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
                <p className="tableRow_Column_Text_Countb">
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
