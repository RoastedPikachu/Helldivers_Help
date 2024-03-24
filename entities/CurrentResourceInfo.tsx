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
    <div className="px-[20px] border-l-2 border-[#2cc388]">
      <h3 className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
        <Typewriter text={title} delay={100} />
      </h3>

      {!prices?.length ? (
        <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          <b className="text-[#2cc388] brightness-125">
            На каких сложностях встречается:
          </b>{" "}
          <Typewriter text={difficulties} delay={100} />
        </p>
      ) : (
        <>
          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">150 кредитов:</b>
            <Typewriter text={prices[0]} delay={100} />
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">375 кредитов:</b>
            <Typewriter text={prices[1]} delay={100} />
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">1000 кредитов:</b>
            <Typewriter text={prices[2]} delay={100} />
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">2100 кредитов:</b>
            <Typewriter text={prices[3]} delay={100} />
          </p>
        </>
      )}

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[#2cc388] brightness-125">Способ получения:</b>{" "}
        <Typewriter text={obtainingMethod} delay={100} />
      </p>

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[#2cc388] brightness-125">Сфера применения:</b>{" "}
        <Typewriter text={applicationScope} delay={100} />
      </p>

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[#2cc388] brightness-125">
          Какое максимальное значение ресурса на корабле:
        </b>{" "}
        <Typewriter text={maxAmount} delay={100} />
      </p>
    </div>
  );
};

export default CurrentResourceInfo;
