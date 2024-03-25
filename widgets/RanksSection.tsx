import React from "react";

import { ranks } from "@/data/ranks";

import Rank from "@/entities/Rank";

const RanksSection = () => {
  return (
    <section className="relative grid grid-cols-1 grid-rows-12 gap-y-[30px] mt-[50px] pr-[20%] w-full h-auto">
      {ranks.map((rank) => (
        <Rank
          key={rank.id}
          iconPath={rank.iconPath}
          title={rank.title}
          fromLevel={rank.fromLevel}
          xpCount={rank.xpCount}
        />
      ))}
    </section>
  );
};

export default RanksSection;
