import React from "react";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheNewsContent from "@/widgets/pageContents/newsContent/TheNewsContent";

const Page = () => {
  return (
    <ThePageContent>
      <TheNewsContent />
    </ThePageContent>
  );
};

export default Page;
