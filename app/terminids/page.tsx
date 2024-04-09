"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { fractions } from "@/data/fractions";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import EnemyType from "@/entities/enemiesPage/enemyType/EnemyType";
import EnemyTypeAdditionalInfoModalWindow from "@/entities/enemiesPage/enemyTypeAdditionalInfoModalWindow/EnemyTypeAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "./Terminids.css";

const Page = observer(() => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [swiper, setSwiper] = useState(null as any);

  const handleCurrentSlideChange = (id: number) => {
    swiper.slideTo(id - 1);
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper?.activeIndex);
  };

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
              <div
                className={`pageSection_Block_SliderWrapper ${enemyTypeStore.currentEnemyType.id ? "flex" : "hidden"}`}
              >
                <div className="pageSection_Block_SliderWrapper_DarkBackground"></div>

                <Swiper
                  spaceBetween={150}
                  slidesPerView={1}
                  loop={true}
                  centeredSlides={false}
                  modules={[Navigation]}
                  navigation={true}
                  onSwiper={(swiper) => setSwiper(swiper)}
                  onSlideChange={handleSlideChange}
                  className="pageSection_Block_SliderWrapper_Slider"
                >
                  {getTargetEnemyTypeArray()?.map((enemy) => (
                    <SwiperSlide
                      key={enemy.id}
                      className="pageSection_Block_SliderWrapper_Slider_Slide"
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
                </Swiper>
              </div>

              {enemyTypeStore.terminids.map((terminid) => (
                <EnemyType
                  key={terminid.id}
                  id={terminid.id}
                  iconPath={terminid.iconPath}
                  rootBlockStyles={"w-[300px] h-[170px]"}
                  fraction={fractions["2"]}
                  imagePlugStyles={"mt-[15px] text-[6rem]"}
                  title={terminid.title}
                  handleCurrentSlideChange={handleCurrentSlideChange}
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
