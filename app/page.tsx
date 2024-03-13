import Image from "next/image";

import TheHeader from "@/shared/TheHeader";
import TheFooter from "@/shared/TheFooter";

export default function Home() {
  return (
    <>
      <TheHeader />

      <main className="w-full h-[850px]"></main>

      <TheFooter />
    </>
  );
}
