import React from "react";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import ArmorKit from "@/entities/armorKitsPage/armorKit/ArmorKit";

import "./ArmorKitsSection.css";

interface ArmorKitsSection {
  title: string;
  armorKitsArray: any[];
}

const ArmorKitsSection: React.FC<ArmorKitsSection> = ({
  title,
  armorKitsArray,
}) => {
  return (
    <section>
      <SectionTitle text={title} />

      <div className="armorCardsWrapper">
        {armorKitsArray.map((armorKit) => (
          <ArmorKit
            key={armorKit.id}
            id={armorKit.id}
            obtainingType={armorKit.obtainingType}
            imagePath={armorKit.imagePath}
            name={armorKit.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ArmorKitsSection;
