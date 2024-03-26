"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import EnemyType from "@/entities/enemyType/EnemyType";
import CurrentEnemyType from "@/entities/CurrentEnemyType";

const Page = observer(() => {
  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <main>
            <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
              ТЕРМИНИДЫ
            </h2>

            <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
              В битве с терминидами Адские Десантники должны быть готовы к
              опасности в любой момент. Эти насекомоподобные создания: быстрые
              охотники, свирепые воины, хитрые сталкеры, ужасные извергатели
              желчи — каждый из них имеет свой набор смертоносных приемов.
            </p>

            <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
              Извергатели желчи и громилы представляют особую опасность, а
              командиры роя и желчные титаны требуют мощного вооружения и
              продуманной тактики для их убийства.
            </p>

            <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
              Адские Десантники должны полагаться на свою подготовку, веру в
              демократию, командную работу и технологичное снаряжение, чтобы
              обеспечить победу Супер-Земли, выживание человечества и
              продвижение управляемой демократии в этой бесконечной битве.
            </p>

            <section className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
              {enemyTypeStore.terminids.map((terminid) => (
                <EnemyType
                  key={terminid.id}
                  id={terminid.id}
                  iconPath={terminid.iconPath}
                  rootBlockStyles={"w-[300px] h-[170px]"}
                  fractionType={1}
                  imagePlugStyles={"mt-[15px] text-[6rem]"}
                  title={terminid.title}
                />
              ))}

              {enemyTypeStore.currentEnemyType.id && (
                <CurrentEnemyType rootBlockStyles={"w-[400px] h-[230px]"} />
              )}
            </section>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
