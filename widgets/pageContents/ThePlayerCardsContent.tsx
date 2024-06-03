import React from "react";

import { playerCards } from "@/data/playerCards";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import PlayerCard from "@/entities/playerCard/PlayerCard";

const ThePlayerCardsContent = () => {
  return (
    <main>
      <ThePageTitle title={"Карточки"} additionalTitle={"игрока"} />

      <PageDescription
        description={
          "Каждый Адский десантник может добавить себе оттенок индивидуальности выбрав себе одну из уникальных карточек игрока. Они будут лучше акцентировать внимание на вашей броне и выделять вас среди ваших боевых товарищей."
        }
      />

      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-6 mlarge:grid-cols-2"}
      >
        {playerCards.map((playerCard) => (
          <PlayerCard
            key={playerCard.id}
            name={playerCard.name}
            image={playerCard.image}
            price={playerCard.price}
            warbondName={playerCard.warbondName}
            warbondImage={playerCard.warbondImage}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default ThePlayerCardsContent;
