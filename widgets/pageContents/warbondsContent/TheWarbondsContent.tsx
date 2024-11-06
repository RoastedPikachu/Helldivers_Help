import React from "react";

import { warbonds } from "@/data/warbonds";

import EntitySection from "@/widgets/EntitySection";
import WarbondBanner from "@/entities/warbond/warbondBanner/WarbondBanner";

const TheWarbondsContent = () => {
  return (
    <main>
      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-1"}
      >
        {warbonds.map((warbond) => (
          <WarbondBanner
            key={warbond.id}
            id={warbond.id}
            image={warbond.image}
            title={warbond.title}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheWarbondsContent;
