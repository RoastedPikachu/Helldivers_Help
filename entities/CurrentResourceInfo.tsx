import React from "react";

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
        {title}
      </h3>

      {!prices?.length ? (
        <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          <b className="text-[#2cc388] brightness-125">
            На каких сложностях встречается:
          </b>{" "}
          {difficulties}
        </p>
      ) : (
        <>
          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">150 кредитов:</b>
            {prices[0]}
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">375 кредитов:</b>
            {prices[1]}
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">1000 кредитов:</b>
            {prices[2]}
          </p>

          <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
            <b className="text-[#2cc388] brightness-125">2100 кредитов:</b>
            {prices[3]}
          </p>
        </>
      )}

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[#2cc388] brightness-125">Способ получения:</b>{" "}
        {obtainingMethod}
      </p>

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[#2cc388] brightness-125">Сфера применения:</b>{" "}
        {applicationScope}
      </p>

      <p className="mt-[20px] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
        <b className="text-[#2cc388] brightness-125">
          Какое максимальное значение ресурса на корабле:
        </b>{" "}
        {maxAmount}
      </p>
    </div>
  );
};

export default CurrentResourceInfo;
