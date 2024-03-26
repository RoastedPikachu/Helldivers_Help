import React from "react";

import { achievementsStore } from "@/store/AchievementsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Achievement from "@/entities/achievement/Achievement";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          ДОСТИЖЕНИЯ
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Для поощрения каждого десантника руководство Супер-Земли разработало
          список достижений, за выполнение которых вы будете получать почет и
          уважение от каждого жителя свободной и демократической галактики.
        </p>

        <section className="relative grid grid-cols-2 grid-rows-19 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {achievementsStore.achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              iconPath={achievement.iconPath}
              title={achievement.title}
              description={achievement.description}
              accomplishmentWay={achievement.accomplishmentWay}
            />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
