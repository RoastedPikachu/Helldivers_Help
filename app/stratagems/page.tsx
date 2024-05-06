"use client";
import React from "react";

import { stratagemStore } from "@/store/StratagemStore";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";

import Stratagem from "@/entities/stratagem/Stratagem";

import "@/app/pageSections.css";
import "./StratagemsPage.css";
import EntitySection from "@/widgets/EntitySection";

const Page = () => {
  return (
    <>
      <TopPageBlock />

      <TheScrollToUpButton />

      <main>
        <h2 className="pageTitle">СТРАТАГЕМЫ</h2>

        <p className="pageDescription">
          Каждый Адский Десантник знает, что на безжалостных полях сражений
          выживание зависит не только от огневой мощи, но и от стратегии,
          хитрости и разумного использования стратагем.
        </p>

        <p className="pageDescription">
          Эти очень полезные в галактической войны «штучки» утверждают наше
          господство над инопланетной угрозой и отстаивают ценности свободы и
          управляемой демократии.
        </p>

        <p className="pageDescription">
          Когда мы сталкиваемся с превосходящими силами противника, стратагемы
          становятся средством, способным изменить ход битвы. Будь то нанесение
          точечных ударов, развертывание мощных турелей или получение снабжения,
          каждая стратагема служит важнейшей цели — обеспечению свободы и
          процветания в галактике.
        </p>

        <EntitySection title={"ОРУЖИЕ ПОДДЕРЖКИ"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.patrioticAdministrationCenter.map(
            (stratagem) => (
              <Stratagem
                key={stratagem.id}
                iconPath={stratagem.iconPath}
                videoPath={stratagem.videoPath}
                videoPreviewPath={stratagem.videoPreviewPath}
                name={stratagem.name}
                description={stratagem.description}
                price={stratagem.price}
                obtainingLevel={stratagem.obtainingLevel}
                callTime={stratagem.callTime}
                useCount={stratagem.useCount}
                reloadTime={stratagem.reloadTime}
                directions={stratagem.directions}
              />
            ),
          )}
        </EntitySection>

        <EntitySection title={"ОРБИТАЛЬНЫЕ"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.orbitalCannon.map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              name={stratagem.name}
              description={stratagem.description}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
        </EntitySection>

        <EntitySection title={"АНГАР"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.hangar.map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              name={stratagem.name}
              description={stratagem.description}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
        </EntitySection>

        <EntitySection title={"КАПИТАНСКИЙ МОСТИК"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.bridge.map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              name={stratagem.name}
              description={stratagem.description}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
        </EntitySection>

        <EntitySection title={"ИНЖЕНЕРНЫЙ ОТСЕК"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.engineerBay.map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              name={stratagem.name}
              description={stratagem.description}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
        </EntitySection>

        <EntitySection title={"МАСТЕРСКАЯ РОБОТОВ"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.roboticsWorkshop.map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              name={stratagem.name}
              description={stratagem.description}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
        </EntitySection>

        <EntitySection title={"ОБЩИЕ"} gridStyles={"grid-cols-1"}>
          {stratagemStore.stratagems.general.map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              iconPath={stratagem.iconPath}
              name={stratagem.name}
              description={stratagem.description}
              directions={stratagem.directions}
            />
          ))}
        </EntitySection>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
