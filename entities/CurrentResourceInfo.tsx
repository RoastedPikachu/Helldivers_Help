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
    <div className="px-[20px] mlarge:px-[15px] border-l-2 border-[--theme-color]">
      <h3 className="text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] font-['Exo2'] font-bold">
        <Typewriter text={title} delay={60} />
      </h3>

      {!prices?.length ? (
        <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
          <b className="mlarge:w-full text-[--theme-color] brightness-125">
            На каких сложностях встречается:
          </b>{" "}
          <Typewriter text={difficulties} delay={20} />
        </p>
      ) : (
        <>
          <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">
              150 кредитов:{" "}
            </b>
            <Typewriter text={prices[0]} delay={40} />
          </p>

          <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">
              375 кредитов:{" "}
            </b>
            <Typewriter text={prices[1]} delay={40} />
          </p>

          <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">
              1000 кредитов:{" "}
            </b>
            <Typewriter text={prices[2]} delay={40} />
          </p>

          <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[--theme-color] brightness-125">
              2100 кредитов:{" "}
            </b>
            <Typewriter text={prices[3]} delay={40} />
          </p>
        </>
      )}

      <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
        <b className="mlarge:block mlarge:w-full text-[--theme-color] brightness-125">
          Способ получения:
        </b>{" "}
        <Typewriter text={obtainingMethod} delay={20} />
      </p>

      <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
        <b className="mlarge:block mlarge:w-full text-[--theme-color] brightness-125">
          Сфера применения:
        </b>{" "}
        <Typewriter text={applicationScope} delay={20} />
      </p>

      <p className="mt-[20px] mmedium:mt-[15px] text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium brightness-75">
        <b className="mlarge:block mlarge:w-full text-[--theme-color] brightness-125">
          Какое максимальное значение ресурса на корабле:
        </b>{" "}
        <Typewriter text={maxAmount} delay={40} />
      </p>
    </div>
  );
};

export default CurrentResourceInfo;
