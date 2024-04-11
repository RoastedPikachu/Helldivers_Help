"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { fractions } from "@/data/fractions";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import EnemyType from "@/entities/enemiesPage/enemyType/EnemyType";
import EnemyTypeAdditionalInfoModalWindow from "@/entities/enemiesPage/enemyTypeAdditionalInfoModalWindow/EnemyTypeAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/modalsSlider.css";

const Page = observer(() => {
  const getTargetEnemyTypeArray = () => {
    if (enemyTypeStore.currentEnemyType.fraction === fractions["2"]) {
      return enemyTypeStore.terminids;
    }

    return enemyTypeStore.automatons;
  };
  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <TheScrollToUpButton />

          <main>
            <ThePageTitle title={"терминиды"} additionalTitle={""} />

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

            <section className="pageSection">
              <ModalSlider
                currentEntityId={enemyTypeStore.currentEnemyType.id}
                children={getTargetEnemyTypeArray()?.map((enemy) => (
                  <SwiperSlide
                    key={enemy.id}
                    className="pageContentSection_Block_SliderWrapper_Slider_Slide"
                  >
                    <EnemyTypeAdditionalInfoModalWindow
                      id={enemy.id}
                      fraction={enemy.fraction}
                      iconPath={enemy.iconPath}
                      title={enemy.title}
                      dangerous={enemy.dangerous}
                      tactics={enemy.tactics}
                      difficulties={enemy.difficulties}
                    />
                  </SwiperSlide>
                ))}
              />

              {enemyTypeStore.terminids.map((terminid) => (
                <EnemyType
                  key={terminid.id}
                  id={terminid.id}
                  iconPath={terminid.iconPath}
                  rootBlockStyles={"w-[300px] h-[170px]"}
                  fraction={fractions["2"]}
                  imagePlugStyles={"mt-[15px] text-[6rem]"}
                  title={terminid.title}
                />
              ))}
            </section>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
