import React from "react";

import { emotes } from "@/data/emotes";

import LegendSection from "@/widgets/legendSection/LegendSection";
import SearchBar from "@/widgets/searchBar/SearchBar";
import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Emote from "@/entities/emote/Emote";
import { victoryPoses } from "@/data/victoryPoses";

const TheEmotesContent = () => {
  return (
    <main>
      <ThePageTitle title={"эмоции"} additionalTitle={"адского десантника"} />

      <PageDescription
        description={
          "Во время боев любой Адский Десантник накапливает определенную долю впечатлений или переживаний. Их можно легко выплеснуть в эмоциях! А победу и успешное возвращение отпраздновать красивой победной позой. Покажите всем свои мускулы или обнимите любимого товарища, главное сохраняйте рассудок для дальнейшего продолжения распространения демократии по всей галактике."
        }
      />

      <LegendSection />

      <SearchBar />

      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-6 mlarge:grid-cols-2"}
      >
        {emotes.map((emote) => (
          <Emote
            key={emote.id}
            name={emote.name}
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
            name={victoryPose.name}
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
