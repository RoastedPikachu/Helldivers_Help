"use client";
import React from "react";

import { shipModulesStore } from "@/store/ShipModulesStore";

import ShipModule from "@/entities/shipModule/ShipModule";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShipModulesSection = () => {
  return (
    <section className="relative mt-[20px] w-full h-auto">
      {shipModulesStore.shipModules.map((shipModule) => (
        <ShipModule
          key={shipModule.id}
          id={shipModule.id}
          title={shipModule.title}
          levelImages={shipModule.levelImages}
          improvementTitles={shipModule.improvementTitles}
          improvementDescriptions={shipModule.improvementDescriptions}
          improvementEffects={shipModule.improvementEffects}
          improvementPrices={shipModule.improvementPrices}
          improvementAffectedStratagems={
            shipModule.improvementAffectedStratagems
          }
        />
      ))}
    </section>
  );
};

export default ShipModulesSection;
