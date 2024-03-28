import React from "react";

import { galaxySectors } from "@/data/galaxySectors";
import { planets } from "@/data/planets";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Planet from "@/entities/planet/Planet";

import "./Planets.css";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <h2 className="pageTitle">
          ГЛОССАРИЙ <b className="pageTitle_Bold">ПЛАНЕТ</b>
        </h2>

        <p className="pageDescription">
          Глоссарий планет содержит информацию о мирах, вовлеченных в
          галактический конфликт. Каждая планета имеет свои особенности,
          проблемы и стратегическое значение. Изучите уникальные характеристики
          этих небесных тел, чтобы лучше понять динамику текущей борьбы за
          свободу, процветание и управляемую демократию.
        </p>

        <section className="pageContentSection">
          {Object.values(galaxySectors).map((value, i) => (
            <div key={i} className="pageContentSection_Block">
              <h3 className="pageContentSection_Block_Title">{value}</h3>

              <div className="pageContentSection_Block_PlanetWrapper">
                {Object.values(planets)
                  .filter((planetValue) => planetValue.sector === value)
                  .map((planet) => (
                    <Planet
                      name={planet.name}
                      biome={planet.biome}
                      weatherConditions={planet.weatherConditions}
                    />
                  ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
