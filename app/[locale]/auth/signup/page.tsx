import React from "react";

import TheAuthPageContent from "@/widgets/pageContents/TheAuthPageContent";
import SignUpContent from "@/widgets/pageContents/auth/signupContent/SignUpContent";

const Page = () => {
  return (
    <TheAuthPageContent>
      <SignUpContent />
    </TheAuthPageContent>
  );
};

export default Page;
