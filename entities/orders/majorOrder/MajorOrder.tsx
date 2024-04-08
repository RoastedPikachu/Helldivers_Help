"use client";
import React from "react";

import { planetsStore } from "@/store/PlanetsStore";

import "./MajorOrder.css";

interface MajorOrderProps {
  title: string;
  expiresIn: number;
  description: string;
  targetPlanets: any[];
  completedPlanets: number[];
  reward: number;
}

const MajorOrder: React.FC<MajorOrderProps> = ({
  title,
  expiresIn,
  description,
  targetPlanets,
  completedPlanets,
  reward,
}) => {
  return (
    <>
      {title && (
        <div className="rootMajorOrderWidget">
          <div className="rootMajorOrderWidget_Top">
            <h3 className="rootMajorOrderWidget_Top_Title">{title}</h3>

            <p className="rootMajorOrderWidget_Top_TimeLeft">
              {Math.floor(expiresIn / 24)}д {Math.floor(expiresIn)}ч
            </p>
          </div>

          <p className="rootMajorOrderWidget_Description">{description}</p>

          <div className="rootMajorOrderWidget_PlanetsBlock">
            {targetPlanets?.map((targetPlanet: any, index) => (
              <div
                key={targetPlanet}
                className={`rootMajorOrderWidget_PlanetsBlock_TextWrapper ${completedPlanets[index] ? "border-[#3db8fe]" : "border-[#f44336]"}`}
              >
                <div
                  className={`rootMajorOrderWidget_PlanetsBlock_TextWrapper_Block ${completedPlanets[index] ? "bg-[linear-gradient(90deg,hsla(202,99%,62%,1)_0%,hsla(0,0%,0%,1)_100%)] border-[#3db8fe]" : "bg-[linear-gradient(90deg,hsla(4,90%,58%,1)_0%,hsla(0,0%,0%,1)_100%)] border-[#f44336]"}`}
                ></div>
                <p className="rootMajorOrderWidget_PlanetsBlock_TextWrapper_Block_PlanetName">
                  {
                    Object.values(planetsStore.planets).find(
                      (value, index) => index === targetPlanet + 1,
                    )?.name
                  }
                </p>

                <p
                  className={`rootMajorOrderWidget_PlanetsBlock_TextWrapper_Block_BoolText ${completedPlanets[index] ? "text-[#3db8fe]" : "text-[#f44336]"}`}
                >
                  {completedPlanets[index] ? "Под контролем" : "В процессе"}
                </p>
              </div>
            ))}
          </div>

          <div className="rootMajorOrderWidget_Bottom">
            <p className="rootMajorOrderWidget_Bottom_LeftText">Награда:</p>

            <p className="rootMajorOrderWidget_Bottom_NumberText">{reward}</p>

            <p className="rootMajorOrderWidget_Bottom_RightText">Медалей</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MajorOrder;
