import React from "react";

import { levels } from "@/improvised_db";

import Level from "@/entities/Level";

const LevelsSection = () => {
  return (
    <section className="relative grid grid-cols-3 grid-rows-[51] mt-[50px] w-[80%] h-auto">
      <div className="grid grid-rows-1 grid-cols-3 col-span-3 w-full h-full">
        <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-y-2 border-l-2 border-[#2cc388] rounded-tl-[10px]">
          <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
            Уровень
          </p>
        </div>

        <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-2 border-[#2cc388]">
          <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
            Требуется опыта
          </p>
        </div>

        <div className="flex justify-center items-center w-full h-[80px] bg-[#00293a] border-y-2 border-r-2 border-[#2cc388] rounded-tr-[10px]">
          <p className="text-[#2cc388] text-[1.75rem] font-['Exo2'] font-bold">
            Всего опыта
          </p>
        </div>
      </div>

      {levels.map((level) => (
        <Level
          key={level.id}
          id={level.id}
          xpRequired={level.xpRequired}
          xpTotal={level.xpTotal}
        />
      ))}
    </section>
  );
};

export default LevelsSection;
