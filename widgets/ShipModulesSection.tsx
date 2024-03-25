"use client";
import React from "react";

import { shipModules } from "@/data/shipModules";

import ShipModule from "@/entities/shipModule/ShipModule";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShipModulesSection = () => {
  return (
    <section className="relative grid grid-cols-1 grid-rows-6 gap-y-[30px] mt-[50px] w-full h-auto">
      {shipModules.map((shipModule) => (
        <ShipModule
          key={shipModule.id}
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
