import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="w-full h-[calc(100vh-165px)]"></main>

      <TheFooter />
    </>
  );
};

export default Page;
