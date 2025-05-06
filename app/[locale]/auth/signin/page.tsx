import React from "react";

import TheAuthPageContent from "@/widgets/pageContents/TheAuthPageContent";
import SignInContent from "@/widgets/pageContents/auth/signinContent/SignInContent";

const Page = () => {
  return (
    <TheAuthPageContent>
      <SignInContent />
    </TheAuthPageContent>
  );
};

export default Page;
