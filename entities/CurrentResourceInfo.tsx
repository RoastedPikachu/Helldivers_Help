"use client";
import React from "react";
import Typewriter from "@/shared/Typewriter";

interface TargetResourceInfoProps {
  title: string;
  difficulties: string;
  prices?: string[];
  obtainingMethod: string;
  applicationScope: string;
  maxAmount: string;
}

const CurrentResourceInfo: React.FC<TargetResourceInfoProps> = ({
  title,
  difficulties,
  prices,
  obtainingMethod,
  applicationScope,
  maxAmount,
}) => {
  return (
    <div className="px-[20px] border-l-2 border-[--theme-color]">
      <h3 className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
        <Typewriter text={title} delay={80} />
      </h3>

      {!prices?.length ? (
        <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          <b className="text-[--theme-color] brightness-125">
            На каких сложностях встречается:
          </b>{" "}
          <Typewriter text={difficulties} delay={80} />
        </p>
      ) : (
        <>
          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">150 кредитов:</b>
            <Typewriter text={prices[0]} delay={80} />
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">375 кредитов:</b>
            <Typewriter text={prices[1]} delay={80} />
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">
              1000 кредитов:
            </b>
            <Typewriter text={prices[2]} delay={80} />
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">
              2100 кредитов:
            </b>
            <Typewriter text={prices[3]} delay={80} />
          </p>
        </>
      )}

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[--theme-color] brightness-125">Способ получения:</b>{" "}
        <Typewriter text={obtainingMethod} delay={60} />
      </p>

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[--theme-color] brightness-125">Сфера применения:</b>{" "}
        <Typewriter text={applicationScope} delay={80} />
      </p>

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[--theme-color] brightness-125">
          Какое максимальное значение ресурса на корабле:
        </b>{" "}
        <Typewriter text={maxAmount} delay={80} />
      </p>
    </div>
  );
};

export default CurrentResourceInfo;
