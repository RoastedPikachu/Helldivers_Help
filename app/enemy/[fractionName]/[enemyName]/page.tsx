import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import "./EnemyAdditionalInfo.css";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="flex">
        <section className="w-full h-[300px]"></section>

        <aside>
          <img
            src=""
            alt=""
            className="w-[400px] h-[400px] border-2 border-[#2cc388] rounded-[10px]"
          />
        </aside>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
