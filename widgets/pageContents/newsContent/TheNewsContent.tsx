import React from "react";

import NewsSection from "@/widgets/newsSection/NewsSection";

const TheNewsContent = () => {
  return (
    <main>
      <h1 className="text-[--color-white] text-[2.75rem] text-center font-ru-primary font-bold">
        Последние новости
      </h1>

      <NewsSection />
    </main>
  );
};

export default TheNewsContent;
