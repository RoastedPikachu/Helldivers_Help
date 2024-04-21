"use client";
import React, { useState } from "react";

import { IResource, ResourceTableTitle } from "@/utils/generalInterfaces";
import { resources } from "@/data/resources/";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import ResourceTable from "@/widgets/resourceTable/ResourceTable";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Resource from "@/entities/Resource";
import CurrentResourceInfo from "@/entities/CurrentResourceInfo";

const Page = () => {
  const [currentResource, setCurrentResource] = useState({} as IResource);

  const handleResourceBlockClick = (id: number) => {
    setCurrentResource(resources.find((resource) => resource.id === id)!);
  };

  const getSpecificResourceTitles = (): ResourceTableTitle[] | undefined => {
    if (currentResource.id <= 3) {
      return [
        {
          id: 1,
          name: "Сложность",
        },
        {
          id: 2,
          name: "Количество",
        },
      ];
    } else if (currentResource.id === 5) {
      return [
        {
          id: 1,
          name: "Сложность",
        },
        {
          id: 2,
          name: "1 Миссия",
        },
        {
          id: 3,
          name: "2 Миссия",
        },
        {
          id: 4,
          name: "3 Миссия",
        },
        {
          id: 5,
          name: "Всего",
        },
      ];
    }
  };

  return (
    <>
      <TheHeader />

      <RunningLine />

      <TheScrollToUpButton />

      <main>
        <ThePageTitle title={"ресурсы"} additionalTitle={"галактики"} />

        <PageDescription
          description={
            "Ресурсы — это топливо для повышения вашей личной эффективности в борьбе за продвижение управляемой демократии, свободы и процветания по всей галактике."
          }
        />

        <PageDescription
          description={
            "Они позволяют улучшать корабль, покупать новое снаряжение и вооружение, а также открывать боевой пропуск."
          }
        />

        <section
          id="ResourceInfo"
          className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto"
        >
          {resources.map((resource) => (
            <Resource
              key={resource.id}
              id={resource.id}
              iconPath={resource.iconPath}
              title={resource.title}
              handleResourceBlockClick={handleResourceBlockClick}
            />
          ))}
        </section>

        <section className="mt-[50px]">
          {currentResource.id && (
            <CurrentResourceInfo
              title={currentResource.title}
              difficulties={currentResource.difficulties}
              prices={currentResource.prices}
              obtainingMethod={currentResource.obtainingMethod}
              applicationScope={currentResource.applicationScope}
              maxAmount={currentResource.maxAmount}
            />
          )}

          {currentResource.isDependsOnDifficulty && (
            <ResourceTable
              resourceId={currentResource.id}
              titles={getSpecificResourceTitles()!}
            />
          )}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
