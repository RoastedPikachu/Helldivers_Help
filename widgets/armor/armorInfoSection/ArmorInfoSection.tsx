import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./armorInfoSection.css";

interface ArmorInfoSectionProps {
  currentArmor: any;
}

const ArmorInfoSection: React.FC<ArmorInfoSectionProps> = ({
  currentArmor,
}) => {
  const t = useTranslations("armor");
  const t1 = useTranslations("SpecificArmorPage");

  return (
    <section className="armorInfoSection">
      <div className="armorInfoSection-top">
        <h1>{getIntlArray(t("names"))[currentArmor.id - 1]}</h1>

        <div className="armorInfoSection-top-right">
          <p className="armorInfoSection-top-right-divider">/</p>

          <p className="armorInfoSection-top-right-text">
            {currentArmor
              ? getIntlArray(t("types"))[currentArmor.typeIndex]
              : "Armor Type"}
          </p>
        </div>
      </div>

      <div className="armorInfoSection-mainInfoContainer">
        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[0]} </h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.price : "Armor price"}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[1]}</h3>

          <p className="blockText">
            {getIntlArray(t("descriptions"))[currentArmor.id - 1]}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithText">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[2]}</h3>

          <p className="blockText">
            {currentArmor.bonus ? currentArmor.bonus.name : "Armor effect"}
          </p>

          <p className="blockText">
            {currentArmor.bonus
              ? currentArmor.bonus.description
              : "Armor effect description"}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[3]}</h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.armorRating : "Armor rating"}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[4]}</h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.speed : "Armor speed"}
          </p>
        </div>

        <div className="armorInfoSection-mainInfoContainer-blockWithNumber">
          <h3 className="blockTitle">{getIntlArray(t1("titles"))[5]}</h3>

          <p className="blockNumber">
            {currentArmor ? currentArmor.staminaRegen : "Armor stamina regen"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArmorInfoSection;
