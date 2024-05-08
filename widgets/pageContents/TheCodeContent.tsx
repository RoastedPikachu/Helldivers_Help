import React from "react";

import { codeRules } from "@/data/codeRules";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import CodeRule from "@/entities/CodeRule";

const TheCodeContent = () => {
  return (
    <main>
      <ThePageTitle title={"кодекс"} additionalTitle={"адского десантника"} />

      <PageDescription
        description={
          "Каждый адский десантник, перед тем, как приступить к обороне управляемой демократии, должен ознакомиться со свободом правил, составленным самым гениальным и демократическим руководством Супер-Земли."
        }
      />

      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-4 mlarge:grid-cols-1"}
      >
        {codeRules.map((rule) => (
          <CodeRule key={rule.id} id={rule.id} text={rule.text} />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheCodeContent;
