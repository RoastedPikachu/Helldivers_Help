"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { stratagemStore } from "@/store/StratagemStore";

import EntitySection from "@/widgets/EntitySection";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Stratagem from "@/entities/stratagem/Stratagem";

import "@/app/pageSections.css";

const TheStratagemsContent = () => {
  const t = useTranslations("StratagemsPage");
  return (
    <main>
      <ThePageTitle title={t("pageTitle")} additionalTitle={""} />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <PageDescription description={t("pageSecondAdditionalDescription")} />

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[0]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Оружие поддержки")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[1]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Орбитальные пушки")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[2]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Ангар")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[3]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Капитанский мостик")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[4]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Инженерный отсек")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[5]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Мастерская роботов")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[6]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Боевые заслуги")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              videoPath={stratagem.videoPath}
              videoPreviewPath={stratagem.videoPreviewPath}
              price={stratagem.price}
              obtainingLevel={stratagem.obtainingLevel}
              callTime={stratagem.callTime}
              useCount={stratagem.useCount}
              reloadTime={stratagem.reloadTime}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>

      <EntitySection
        title={getIntlArray(t("sectionTitles"))[7]}
        gridStyles={"grid-cols-1"}
      >
        {stratagemStore.stratagems
          .filter((stratagem) => stratagem.type.name === "Стратагемы миссий")
          .map((stratagem) => (
            <Stratagem
              key={stratagem.id}
              id={stratagem.id}
              iconPath={stratagem.iconPath}
              directions={stratagem.directions}
            />
          ))}
      </EntitySection>
    </main>
  );
};

export default TheStratagemsContent;
