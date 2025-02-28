"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";

import { IResource, ResourceTableTitle } from "@/utils/generalInterfaces";

import { resources } from "@/data/resources";

import ResourceTable from "@/widgets/resourceTable/ResourceTable";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Resource from "@/entities/resource/Resource";
import CurrentResourceInfo from "@/entities/currentResourceInfo/CurrentResourceInfo";
import { getIntlArray } from "@/utils/generalFunctions";

const TheResourcesContent = () => {
  const t = useTranslations("ResourcesPage");
  const t1 = useTranslations("resources");

  const [currentResource, setCurrentResource] = useState({} as IResource);

  const handleResourceBlockClick = (id: number) => {
    setCurrentResource(resources.find((resource) => resource.id === id)!);
  };

  const getSpecificResourceTitles = (): ResourceTableTitle[] | undefined => {
    if (currentResource.id <= 3) {
      return [
        {
          id: 1,
          name: getIntlArray(t1("tablesTitles"))[0],
        },
        {
          id: 2,
          name: getIntlArray(t1("tablesTitles"))[1],
        },
      ];
    } else if (currentResource.id === 5) {
      return [
        {
          id: 1,
          name: getIntlArray(t1("tablesTitles"))[0],
        },
        {
          id: 2,
          name: getIntlArray(t1("tablesTitles"))[2],
        },
        {
          id: 3,
          name: getIntlArray(t1("tablesTitles"))[3],
        },
        {
          id: 4,
          name: getIntlArray(t1("tablesTitles"))[4],
        },
        {
          id: 5,
          name: getIntlArray(t1("tablesTitles"))[5],
        },
      ];
    }
  };
  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={t("pageAdditionalDescription")} />

      <section
        id="ResourceInfo"
        className="relative grid grid-cols-3 mlarge:grid-cols-1 gap-y-[30px] mlarge:gap-y-[25px] mmedium:gap-y-[20px] msmall:gap-y-[15px] gap-x-[30px] mlarge:gapy-x-[25px] mmedium:gap-x-[20px] msmall:gap-x-[15px] mt-[50px] mlarge:mt-[30px] w-full h-auto"
      >
        {resources.map((resource) => (
          <Resource
            key={resource.id}
            id={resource.id}
            iconPath={resource.iconPath}
            handleResourceBlockClick={handleResourceBlockClick}
          />
        ))}
      </section>

      <section className="mt-[50px] mlarge:mt-[30px]">
        {currentResource.id && (
          <CurrentResourceInfo
            id={currentResource.id}
            prices={currentResource.prices}
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
  );
};

export default TheResourcesContent;
