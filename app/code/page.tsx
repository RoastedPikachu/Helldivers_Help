import React from "react";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import CodeRule from "@/entities/CodeRule";
import EntitySection from "@/widgets/EntitySection";

const Page = () => {
  const codeRules = [
    { id: 1, text: "Вначале миссия — потом второстепенные задачи и лут" },
    {
      id: 2,
      text: "Не улетайте без своих тиммейтов, заходите в шаттл только тогда, когда все тиммейты смогут успеть сесть в него",
    },
    {
      id: 3,
      text: "Самый главный лут на карте — образцы. Собирайте их все, а также не забывайте подбирать с мертвых тиммейтов",
    },
    {
      id: 4,
      text: "Не кидайте атакующие стратагемы на союзников. Они вам за это спасибо не скажут",
    },
    {
      id: 5,
      text: "Не берите специальное оружие или снаряжение союзников без спроса",
    },
    {
      id: 6,
      text: "Если у вас другой стиль прохождения, не мешайте союзникам, потому что это помешает распространению управляемой демократии по всей галактике",
    },
    {
      id: 7,
      text: "Вызывайте своих союзников в безопасную область, в крайнем случае в сторону их кончины",
    },
    {
      id: 8,
      text: "Пополнение боеприпасов cуществует для всех. Не надо использовать эту стратагему в индивидуальных целях",
    },
  ];

  return (
    <>
      <TopPageBlock />

      <TheScrollToUpButton />

      <main>
        <ThePageTitle title={"кодекс"} additionalTitle={"адского десантника"} />

        <PageDescription
          description={
            "Каждый адский десантник, перед тем, как приступить к обороне управляемой демократии, должен ознакомиться со свободом правил, составленным самым гениальным и демократическим руководством Супер-Земли."
          }
        />

        <EntitySection
          title={""}
          gridStyles={
            "mt-[50px] mlarge:mt-[30px] grid-cols-4 mlarge:grid-cols-1"
          }
        >
          {codeRules.map((rule) => (
            <CodeRule key={rule.id} id={rule.id} text={rule.text} />
          ))}
        </EntitySection>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
