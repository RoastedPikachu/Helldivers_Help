import React from "react";

import { achievementsStore } from "@/store/AchievementsStore";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import EntitySection from "@/widgets/EntitySection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
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

        <EntitySection gridStyles={"mt-[50px]! grid-cols-2"}>
          {achievementsStore.achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              iconPath={achievement.iconPath}
              title={achievement.title}
              description={achievement.description}
              accomplishmentWay={achievement.accomplishmentWay}
            />
          ))}
        </EntitySection>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
