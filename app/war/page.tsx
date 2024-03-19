import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="w-full h-[calc(100vh-165px)]"></main>

      <TheFooter />
    </>
  );
};

export default Page;
