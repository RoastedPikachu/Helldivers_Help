import React from "react";

import ThePageContent from "@/widgets/pageContents/ThePageContent";
import TheAdminContent from "@/widgets/pageContents/adminContent/TheAdminContent";

const Page = () => {
  return (
    <ThePageContent>
      <TheAdminContent />
    </ThePageContent>
  );
};

export default Page;
