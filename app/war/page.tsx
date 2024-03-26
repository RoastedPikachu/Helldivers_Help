import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main></main>

      <TheFooter />
    </>
  );
};

export default Page;
