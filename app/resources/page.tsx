"use client";
import React, { useState } from "react";

import { IResource } from "@/utils/generalInterfaces";
import { resources, medalsCountPerDifficulty } from "@/improvised_db/";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import Resource from "@/entities/Resource";
import CurrentResourceInfo from "@/entities/CurrentResourceInfo";

const Page = () => {
  const [currentResource, setCurrentResource] = useState({} as IResource);

  const handleResourceBlockClick = (id: number) => {
    setCurrentResource(resources.find((resource) => resource.id === id)!);
  };

  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="mt-[30px] pb-[100px] px-[5%] w-full h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          РЕСУРСЫ <b className="text-[#2cc388] font-bold">ГАЛАКТИКИ</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Ресурсы — это топливо для повышения вашей личной эффективности в
          борьбе за продвижение управляемой демократии, свободы и процветания по
          всей галактике.
        </p>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Они позволяют улучшать корабль, покупать новое снаряжение и
          вооружение, а также открывать боевой пропуск.
        </p>

        <section className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {resources.map((resource) => (
            <Resource
              key={resource.id}
              id={resource.id}
              iconPath={resource.iconPath}
              title={resource.title}
              handleResourceBlockClick={handleResourceBlockClick}
            />
          ))}
        </section>

        <section className="mt-[50px]">
          {currentResource.id && (
            <CurrentResourceInfo
              title={currentResource.title}
              difficulties={currentResource.difficulties}
              prices={currentResource.prices}
              obtainingMethod={currentResource.obtainingMethod}
              applicationScope={currentResource.applicationScope}
              maxAmount={currentResource.maxAmount}
            />
          )}

          {currentResource.isDependsOnDifficulty && (
            <section className="relative grid grid-cols-5 grid-rows-[9] mt-[50px] w-full h-auto">
              <div className="grid grid-rows-1 grid-cols-5 col-span-5 w-full h-full">
                <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-y-2 border-l-2 border-[#2cc388] rounded-tl-[10px]">
                  <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
                    Уровень
                  </p>
                </div>

                <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-2 border-[#2cc388]">
                  <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
                    Первая миссия
                  </p>
                </div>

                <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-y-2 border-[#2cc388]">
                  <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
                    Вторая миссия
                  </p>
                </div>

                <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-2 border-[#2cc388]">
                  <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
                    Третья миссия
                  </p>
                </div>

                <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-y-2 border-r-2 border-[#2cc388] rounded-tr-[10px]">
                  <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
                    Всего
                  </p>
                </div>
              </div>
            </section>
          )}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
