"use client";
import React from "react";

import { stratagemStore } from "@/store/StratagemStore";

import EntitySection from "@/widgets/EntitySection";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Stratagem from "@/entities/stratagem/Stratagem";

import "@/app/pageSections.css";

const TheStratagemsContent = () => {
  return (
    <main>
      <ThePageTitle title={"стратагемы"} additionalTitle={""} />

      <PageDescription
        description={
          "Каждый Адский Десантник знает, что на безжалостных полях сражений выживание зависит не только от огневой мощи, но и от стратегии, хитрости и разумного использования стратагем."
        }
      />

      <PageDescription
        description={
          "Эти очень полезные в галактической войны «штучки» утверждают наше господство над инопланетной угрозой и отстаивают ценности свободы и управляемой демократии."
        }
      />

      <PageDescription
        description={
          "Когда мы сталкиваемся с превосходящими силами противника, стратагемы становятся средством, способным изменить ход битвы. Будь то нанесение точечных ударов, развертывание мощных турелей или получение снабжения, каждая стратагема служит важнейшей цели — обеспечению свободы и процветания в галактике."
        }
      />

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
  );
};

export default TheStratagemsContent;
