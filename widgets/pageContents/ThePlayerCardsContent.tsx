"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";

import EntitySection from "@/widgets/EntitySection";
import LegendSection from "@/widgets/legendSection/LegendSection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import PlayerCard from "@/entities/playerCard/PlayerCard";
import SearchBar from "@/widgets/searchBar/SearchBar";
import { useTranslations } from "next-intl";

const ThePlayerCardsContent = () => {
  const t = useTranslations("PlayerCardsPage");

  const [playerCards, setPlayerCards] = useState([] as any[]);

  const getPlayerCards = async () => {
    const result = await axios.get("/api/admin/playercards");

    setPlayerCards(result.data as unknown as any[]);
  };

  useEffect(() => {
    getPlayerCards();
  }, []);

  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-6 mlarge:grid-cols-2"}
      >
        {playerCards.length
          ? playerCards.map((playerCard) => (
              <PlayerCard
                key={playerCard.id}
                id={playerCard.id}
                image={playerCard.image}
                price={playerCard.price}
                ruTitle={playerCard.ruTitle}
                enTitle={playerCard.enTitle}
              />
            ))
          : ""}
      </EntitySection>
    </main>
  );
};

export default ThePlayerCardsContent;
