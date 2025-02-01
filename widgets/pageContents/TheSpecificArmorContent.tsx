"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { fromSlug } from "@/utils/generalFunctions";

import { armorStore } from "@/store/ArmorKitsStore";

const TheSpecificArmorContent = () => {
  const params = useParams();

  const [currentArmor, setCurrentArmor] = useState({} as any);

  useEffect(() => {
    setCurrentArmor(
      armorStore.armorKits.find(
        (armor) => armor.devName === fromSlug(params.armorName as string),
      ),
    );
  }, []);
  return <main></main>;
};

export default TheSpecificArmorContent;
