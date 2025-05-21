"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { achievementsStore } from "@/store/AchievementsStore";

import axios from "axios";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Achievement from "@/entities/achievement/Achievement";

const TheAchievementsContent = () => {
  const t = useTranslations("AchievementsPage");

  const [achievements, setAchievements] = useState([] as any[]);

  const getAchievements = async () => {
    const result = await axios.get("/api/admin/achievements");

    setAchievements(result.data as unknown as any[]);
  };

  useEffect(() => {
    getAchievements();
  }, []);

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
        {achievements.length
          ? achievements
              .filter((achivement) => achivement.type === "easy")
              .map((achievement) => (
                <Achievement
                  key={achievement.id}
                  id={achievement.id}
                  iconPath={achievement.iconPath}
                  ruTitle={achievement.ruTitle}
                  enTitle={achievement.enTitle}
                  ruDescription={achievement.ruDescription}
                  enDescription={achievement.enDescription}
                />
              ))
          : achievementsStore.achievements
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
        {achievements.length
          ? achievements
              ?.filter((achivement) => achivement.type === "extreme")
              .map((achievement) => (
                <Achievement
                  key={achievement.id}
                  id={achievement.id}
                  iconPath={achievement.iconPath}
                />
              ))
          : achievementsStore.achievements
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
        title={t("thirdSectionTitle")}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievements.length
          ? achievements
              ?.filter((achivement) => achivement.type === "helldive")
              .map((achievement) => (
                <Achievement
                  key={achievement.id}
                  id={achievement.id}
                  iconPath={achievement.iconPath}
                />
              ))
          : achievementsStore.achievements
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
        title={t("fourthSectionTitle")}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievements.length
          ? achievements
              ?.filter((achivement) => achivement.type === "longWay")
              .map((achievement) => (
                <Achievement
                  key={achievement.id}
                  id={achievement.id}
                  iconPath={achievement.iconPath}
                />
              ))
          : achievementsStore.achievements
              .filter((achivement) => achivement.type === "easy")
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
