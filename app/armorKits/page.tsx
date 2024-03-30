"use client";
import React from "react";

import { armorStore } from "@/store/ArmorKitsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import ArmorKit from "@/entities/armorKitsPage/armorKit/ArmorKit";

import "./ArmorKits.css";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <h2 className="pageTitle">
          КОМЛЕКТЫ БРОНИ <b className="pageTitle_Bold">АДСКОГО ДЕСАНТНИКА</b>
        </h2>

        <p className="pageDescription">
          Броня — это ключ к успеху для любого Адского Десантника. От дробовиков
          до энергетического оружия — все это инструменты, которые помогут вам
          распространять управляемую демократию в галактике.
        </p>

        <section className="pageSection">
          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ОБУЧЕНИЕ</h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 0)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">
              БОЕВОЙ ПРОПУСК «АДСКИЕ ДЕСАНТНИКИ, В БОЙ!»
            </h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 1)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">
              БОЕВОЙ ПРОПУСК «ЗАКАЛЕННЫЕ ВЕТЕРАНЫ»
            </h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 2)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">
              БОЕВОЙ ПРОПУСК «НА ОСТРИЕ»
            </h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 3)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">СУПЕРМАГАЗИН</h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 4)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ПРЕДЗАКАЗ</h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 5)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">SUPER CITIZEN EDITION</h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 6)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">TWITCH DROPS</h3>

            <div className="pageSection_Block_ArmorKitsWrapper">
              {armorStore.armorKits
                .filter((armorKit) => armorKit.obtainingType.typeNumber === 7)
                .map((armorKit) => (
                  <ArmorKit
                    key={armorKit.id}
                    imagePath={armorKit.imagePath}
                    type={armorKit.type}
                    name={armorKit.name}
                    obtainingMethod={armorKit.obtainingMethod}
                    description={armorKit.description}
                    price={armorKit.price}
                    armorRating={armorKit.armorRating}
                    speed={armorKit.speed}
                    staminaRegen={armorKit.staminaRegen}
                    bonus={armorKit.bonus}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
