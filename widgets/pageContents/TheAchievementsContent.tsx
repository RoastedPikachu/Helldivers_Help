import React from "react";

import { useTranslations } from "next-intl";

import { achievementsStore } from "@/store/AchievementsStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Achievement from "@/entities/achievement/Achievement";

const TheAchievementsContent = () => {
  const t = useTranslations("AchievementsPage");

  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <EntitySection
        title={t("firstSectionTitle")}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements
          .filter((achivement) => achivement.type === "easy")
          .map((achievement) => (
            <Achievement
              key={achievement.id}
              id={achievement.id}
              iconPath={achievement.iconPath}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={t("secondSectionTitle")}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements
          .filter((achivement) => achivement.type === "extreme")
          .map((achievement) => (
            <Achievement
              key={achievement.id}
              id={achievement.id}
              iconPath={achievement.iconPath}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={t("thirdSectionTitle")}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements
          .filter((achivement) => achivement.type === "helldive")
          .map((achievement) => (
            <Achievement
              key={achievement.id}
              id={achievement.id}
              iconPath={achievement.iconPath}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={t("fourthSectionTitle")}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements
          .filter((achivement) => achivement.type === "longWay")
          .map((achievement) => (
            <Achievement
              key={achievement.id}
              id={achievement.id}
              iconPath={achievement.iconPath}
            />
          ))}
      </EntitySection>
    </main>
  );
};

export default TheAchievementsContent;
