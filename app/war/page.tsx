import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="w-full h-[calc(100vh-165px)]">
        <RunningLine />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
