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

      <main className="mt-[30px] deskWide:ml-[calc((100%-1440px)/2)] pb-[100px] px-[5%] w-full max-w-[1440px] h-auto">
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
