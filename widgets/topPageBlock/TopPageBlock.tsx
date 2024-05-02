import React from "react";
import TheHeader from "@/widgets/header/TheHeader";
import RunningLine from "@/shared/RunningLine";

const TopPageBlock = () => {
  return (
    <section className="fixed top-0 w-screen h-auto z-[40]">
      <TheHeader />

      <RunningLine />
    </section>
  );
};

export default TopPageBlock;
