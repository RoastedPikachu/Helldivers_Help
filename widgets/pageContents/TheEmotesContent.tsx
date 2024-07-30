import React from "react";

import { useTranslations } from "next-intl";

import { emotes } from "@/data/emotes";
import { victoryPoses } from "@/data/victoryPoses";

import LegendSection from "@/widgets/legendSection/LegendSection";
import SearchBar from "@/widgets/searchBar/SearchBar";
import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Emote from "@/entities/emote/Emote";

const TheEmotesContent = () => {
  const t = useTranslations("EmotesPage");

  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <LegendSection />

      <SearchBar />

      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-6 mlarge:grid-cols-2"}
      >
        {emotes.map((emote) => (
          <Emote
            key={emote.id}
            id={emote.id}
            videoPreviewPath={emote.videoPreviewPath}
            videoPath={emote.videoPath}
            price={emote.price}
            warbondIcon={emote.warbondIcon}
          />
        ))}
      </EntitySection>

      <EntitySection
        title={"ПОБЕДНЫЕ ПОЗЫ"}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-6 mlarge:grid-cols-2"}
      >
        {victoryPoses.map((victoryPose) => (
          <Emote
            key={victoryPose.id}
            id={victoryPose.id}
            videoPreviewPath={victoryPose.videoPreviewPath}
            videoPath={victoryPose.videoPath}
            price={victoryPose.price}
            warbondIcon={victoryPose.warbondIcon}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheEmotesContent;
