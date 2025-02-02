"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { fromSlug, getIntlArray } from "@/utils/generalFunctions";

import { armorStore } from "@/store/ArmorKitsStore";
import { useTranslations } from "next-intl";
import ArmorInfoSection from "@/widgets/armor/armorInfoSection/ArmorInfoSection";

const TheSpecificArmorContent = () => {
  const params = useParams();

  const t = useTranslations("armor");

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
      <ArmorInfoSection currentArmor={currentArmor} />

      <section>
        <div className="w-[360px] h-[620px] border-2 border-theme rounded-[12.5px] overflow-hidden">
          <img
            src={currentArmor ? currentArmor.imagePath : ""}
            alt={
              getIntlArray(t("names"))[currentArmor ? currentArmor.id - 1 : 0]
            }
            className="w-full h-full"
          />
        </div>
      </section>
    </main>
  );
};

export default TheSpecificArmorContent;
