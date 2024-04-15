import React from "react";

import { ranks } from "@/data/ranks";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import EntitySection from "@/widgets/EntitySection";
import LevelsSection from "@/widgets/LevelsSection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Rank from "@/entities/Rank";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <TheScrollToUpButton />

      <main>
        <ThePageTitle title={"ранги"} additionalTitle={"адского десантника"} />

        <PageDescription
          description={
            "Когда вы отправляетесь в битву, помните, что ваше мужество и преданность будут отмечены. Благодаря вашему усердию и верности делу Супер-Земли, вы получите повышение и почетные звания за ваши героические подвиги в продвижении управляемой демократии."
          }
        />

        <PageDescription
          description={
            "Начиная с кадетского звания, вам нужно продемонстрировать вашу верность, проявив себя на поле боя как истинный защитник демократии. Каждое полученное звание отражает ваше стремление к величию через подвиги, храбрость и мастерство. Пусть ваше имя станет символом мощи, которая потрясет галактику!"
          }
        />

        <EntitySection gridStyles={"grid-cols-1"}>
          {ranks.map((rank) => (
            <Rank
              key={rank.id}
              iconPath={rank.iconPath}
              title={rank.title}
              fromLevel={rank.fromLevel}
              xpCount={rank.xpCount}
            />
          ))}
        </EntitySection>

        <LevelsSection />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
