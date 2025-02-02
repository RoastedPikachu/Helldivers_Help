"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fromSlug, getIntlArray } from "@/utils/generalFunctions";

import { armorStore } from "@/store/ArmorKitsStore";

const TheSpecificArmorContent = () => {
  const params = useParams();

  const t = useTranslations("armor");
  const t1 = useTranslations("SpecificArmorPage");

  const [currentArmor, setCurrentArmor] = useState({} as any);

  useEffect(() => {
    setCurrentArmor(
      armorStore.armorKits.find(
        (armor) =>
          armor.devName.toLowerCase() === fromSlug(params.armorName as string),
      ),
    );
  }, []);
  return (
    <main className="flex items-start gap-x-[120px]">
      <section className="w-[calc(100%-480px)]">
        <div className="flex items-center gap-x-[15px]">
          <h1 className="text-theme text-[2.5rem] font-primary font-bold">
            {getIntlArray(t("names"))[currentArmor.id - 1]}
          </h1>

          <div className="flex items-center gap-x-[15px] mt-[11px]">
            <p className="text-white text-[1.5rem]">/</p>

            <p className="text-white text-[1.5rem] font-primary font-medium">
              {currentArmor
                ? getIntlArray(t("types"))[currentArmor.typeIndex]
                : "Armor Type"}
            </p>
          </div>
        </div>

        <div className="grid justify-items-start gap-y-[20px] mt-[30px]">
          <div className="flex items-center gap-x-[15px]">
            <h3 className="text-theme text-[1.5rem] font-primary font-semibold">
              {getIntlArray(t1("titles"))[0]}{" "}
            </h3>

            <p className="mt-[4px] text-white text-[1.625rem] font-secondary font-bold">
              {currentArmor ? currentArmor.price : "Armor price"}
            </p>
          </div>

          <div className="grid gap-y-[5px]">
            <h3 className="text-theme text-[1.5rem] font-primary font-semibold">
              {getIntlArray(t1("titles"))[1]}
            </h3>

            <p className="text-white text-[1.5rem] font-primary font-medium brightness-[0.7]">
              {getIntlArray(t("descriptions"))[currentArmor.id - 1]}
            </p>
          </div>

          <div className="grid gap-y-[5px]">
            <h3 className="text-theme text-[1.5rem] font-primary font-semibold">
              {getIntlArray(t1("titles"))[2]}
            </h3>

            <p className="text-white text-[1.5rem] font-primary font-medium brightness-[0.7]">
              {currentArmor.bonus ? currentArmor.bonus.name : "Armor effect"}
            </p>

            <p className="text-white text-[1.5rem] font-primary font-medium brightness-[0.7]">
              {currentArmor.bonus
                ? currentArmor.bonus.description
                : "Armor effect description"}
            </p>
          </div>

          <div className="flex items-center gap-x-[15px]">
            <h3 className="text-theme text-[1.5rem] font-primary font-semibold">
              {getIntlArray(t1("titles"))[3]}
            </h3>

            <p className="mt-[4px] text-white text-[1.625rem] font-secondary font-bold">
              {currentArmor ? currentArmor.armorRating : "Armor rating"}
            </p>
          </div>

          <div className="flex items-center gap-x-[15px]">
            <h3 className="text-theme text-[1.5rem] font-primary font-semibold">
              {getIntlArray(t1("titles"))[4]}
            </h3>

            <p className="mt-[4px] text-white text-[1.625rem] font-secondary font-bolde">
              {currentArmor ? currentArmor.speed : "Armor speed"}
            </p>
          </div>

          <div className="flex items-center gap-x-[15px]">
            <h3 className="text-theme text-[1.5rem] font-primary font-semibold">
              {getIntlArray(t1("titles"))[5]}
            </h3>

            <p className="mt-[4px] text-white text-[1.625rem] font-secondary font-bold">
              {currentArmor ? currentArmor.staminaRegen : "Armor stamina regen"}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[360px] h-[620px] border-2 border-theme rounded-[12.5px] overflow-hidden">
          <img
            src={currentArmor.imagePath}
            alt={getIntlArray(t("names"))[currentArmor.id - 1]}
            className="w-full h-full"
          />
        </div>
      </section>
    </main>
  );
};

export default TheSpecificArmorContent;
