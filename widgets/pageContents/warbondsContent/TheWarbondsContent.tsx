import React from "react";

import { warbonds } from "@/data/warbonds";

import Link from "next/link";

import EntitySection from "@/widgets/EntitySection";

const TheWarbondsContent = () => {
  return (
    <main>
      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-1"}
      >
        {warbonds.map((warbond) => (
          <Link
            key={warbond.id}
            href={""}
            className="mx-auto w-[1000px] h-[500px] border-2 border-[#95939e] hover:border-[#ffe500] hover:brightness-110 duration-300 ease-in-out"
          >
            <img src={warbond.image} alt="" className="w-full h-full" />
          </Link>
        ))}
      </EntitySection>
    </main>
  );
};

export default TheWarbondsContent;
