import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import CodeRule from "@/entities/CodeRule";

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
      <TheHeader />

      <main className="mt-[65px] pb-[65px] px-[5%] w-full h-auto">
        <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          КОДЕКС <b className="text-[#2cc388] font-bold">АДСКОГО ДЕСАНТНИКА</b>
        </h2>

        <p className="mt-[20px] w-[40%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Каждый адский десантник, перед тем, как приступить к обороне
          управляемой демократии, должен ознакомиться со свободом правил,
          составленным самым гениальным и демократическим руководством
          Супер-Земли.
        </p>

        <section className="relative grid grid-cols-4 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {codeRules.map((rule) => (
            <CodeRule key={rule.id} id={rule.id} text={rule.text} />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
