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

import "./Automatons.css";

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
            <ThePageTitle title={"автоматоны"} additionalTitle={""} />

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

              {enemyTypeStore.automatons.map((automaton) => (
                <EnemyType
                  key={automaton.id}
                  id={automaton.id}
                  iconPath={automaton.iconPath}
                  rootBlockStyles={"w-full h-[300px]"}
                  fraction={automaton.fraction}
                  imagePlugStyles={"mt-[70px] h-[230px] text-[7rem]"}
                  title={automaton.title}
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
