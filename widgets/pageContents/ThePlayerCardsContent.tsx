import React from "react";

import { playerCards } from "@/data/playerCards";

import EntitySection from "@/widgets/EntitySection";
import LegendSection from "@/widgets/legendSection/LegendSection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import PlayerCard from "@/entities/playerCard/PlayerCard";
import SearchBar from "@/widgets/searchBar/SearchBar";
import { useTranslations } from "next-intl";

const ThePlayerCardsContent = () => {
  const t = useTranslations("PlayerCardsPage");

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
        {playerCards.map((playerCard) => (
          <PlayerCard
            key={playerCard.id}
            id={playerCard.id}
            image={playerCard.image}
            price={playerCard.price}
            warbondImage={playerCard.warbondImage}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default ThePlayerCardsContent;
