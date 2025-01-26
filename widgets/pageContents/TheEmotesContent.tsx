import React from "react";

import { useTranslations } from "next-intl";

import { emotes } from "@/data/emotes";

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

      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-5 mlarge:grid-cols-2"}
      >
        {emotes
          .filter((emote) => emote.type === "emote")
          .map((emote) => (
            <Emote
              key={emote.id}
              id={emote.id}
              videoPreviewPath={emote.videoPreviewPath}
              videoPath={emote.videoPath}
              price={emote.price}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={"ПОБЕДНЫЕ ПОЗЫ"}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-5 mlarge:grid-cols-2"}
      >
        {emotes
          .filter((emote) => emote.type === "victoryPose")
          .map((emote) => (
            <Emote
              key={emote.id}
              id={emote.id}
              videoPreviewPath={emote.videoPreviewPath}
              videoPath={emote.videoPath}
              price={emote.price}
            />
          ))}
      </EntitySection>
    </main>
  );
};

export default TheEmotesContent;
