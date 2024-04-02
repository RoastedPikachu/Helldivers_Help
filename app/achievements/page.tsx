import React from "react";

import { achievementsStore } from "@/store/AchievementsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Achievement from "@/entities/achievement/Achievement";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <TheScrollToUpButton />

      <main>
        <ThePageTitle title={"достижения"} additionalTitle={""} />

        <PageDescription
          description={
            "Для поощрения каждого десантника руководство Супер-Земли разработало список достижений, за выполнение которых вы будете получать почет и уважение от каждого жителя свободной и демократической галактики."
          }
        />

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
