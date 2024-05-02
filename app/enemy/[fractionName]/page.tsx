import React from "react";

import { fractions } from "@/data/fractions";

import { enemiesStore } from "@/store/EnemiesStore";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Enemy from "@/entities/enemiesPage/enemy/Enemy";

import "@/app/pageSections.css";
import "./EnemyPage.css";

export function generateStaticParams() {
  return [{ fractionName: "terminids" }, { fractionName: "automatons" }];
}

const Page: React.FC<{ params: any }> = ({ params }) => {
  const getEnemyPageTitle = () => {
    return params.fractionName === "terminids" ? "терминиды" : "автоматоны";
  };
  return (
    <>
      <TopPageBlock />

      <TheScrollToUpButton />

      <main>
        <ThePageTitle title={getEnemyPageTitle()} additionalTitle={""} />

        {params.fractionName === "terminids" ? (
          <>
            <PageDescription
              description={
                "В битве с терминидами Адские Десантники должны быть готовы к опасности в любой момент. Эти насекомоподобные создания: быстрые охотники, свирепые воины, хитрые сталкеры, ужасные извергатели желчи — каждый из них имеет свой набор смертоносных приемов."
              }
            />

            <PageDescription
              description={
                "Извергатели желчи и громилы представляют особую опасность, а командиры роя и желчные титаны требуют мощного вооружения и продуманной тактики для их убийства."
              }
            />

            <PageDescription
              description={
                "Адские Десантники должны полагаться на свою подготовку, веру в демократию, командную работу и технологичное снаряжение, чтобы обеспечить победу Супер-Земли, выживание человечества и продвижение управляемой демократии в этой бесконечной битве."
              }
            />
          </>
        ) : (
          <>
            <PageDescription
              description={
                "Автоматоны олицетворяют угрозу всему демократическому человечеству, представляя страшную силу на поле боя. От неуклюжего чудовища Халка до слабого и архаичного танка, автоматоны - технологическая мощь, нуждающаяся в свободе."
              }
            />

            <PageDescription
              description={
                "Чтобы противостоять угрозе, исходящей от автоматов, Адские Десантники должны извлекать выгоду из присущих им недостатков и использовать их уязвимости при любой возможности. Победить механическую орду можно, используя правильную стратегию, решимость, разные тактики и мощнейшее вооружение."
              }
            />

            <PageDescription
              description={
                "Как передовые защитники Супер-Земли, Адские Десантники должны стойко переносить натиск автоматонов, стремясь преодолеть их тактику и технологии. Только упорство, хитрость, вера в свободу, процветание и демократию может помочь победить угрозу автоматонов, обеспечив дальнейшее продвижение демократии по всей галактике."
              }
            />
          </>
        )}

        <section className="pageGridSection grid-cols-3">
          {params.fractionName === "terminids"
            ? enemiesStore.terminids.map((terminid) => (
                <Enemy
                  key={terminid.id}
                  id={terminid.id}
                  iconPath={terminid.iconPath}
                  imageStyleScale={terminid.imageStyleScale}
                  fraction={fractions["2"]}
                  imagePlugStyles={"mt-[15px] text-[6rem]"}
                  title={terminid.title}
                  engTitle={terminid.engTitle}
                />
              ))
            : enemiesStore.automatons.map((automaton) => (
                <Enemy
                  key={automaton.id}
                  id={automaton.id}
                  iconPath={automaton.iconPath}
                  imageStyleScale={automaton.imageStyleScale}
                  fraction={automaton.fraction}
                  imagePlugStyles={"mt-[70px] h-[230px] text-[7rem]"}
                  title={automaton.title}
                  engTitle={automaton.engTitle}
                />
              ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
