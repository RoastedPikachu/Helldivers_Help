"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { IResource, ResourceTableTitle } from "@/utils/generalInterfaces";

import { resources } from "@/data/resources";

import Link from "next/link";

import ResourceTable from "@/widgets/resourceTable/ResourceTable";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Resource from "@/entities/resource/Resource";
import CurrentResourceInfo from "@/entities/currentResourceInfo/CurrentResourceInfo";

const TheResourcesContent = () => {
  const t = useTranslations("ResourcesPage");

  const [currentResource, setCurrentResource] = useState({} as IResource);

  const [additionalDescription, setAdditionalDescription] = useState("" as any);

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

  useEffect(() => {
    navigator.language === "ru-RU"
      ? setAdditionalDescription(
          <p>
            Они позволяют улучшать{" "}
            <Link href={"/shipModules"} className="pageDescription-link">
              корабль
            </Link>
            , покупать новое{" "}
            <Link href={"/armorKits"} className="pageDescription-link">
              снаряжение
            </Link>{" "}
            и{" "}
            <Link href={"/weaponry"} className="pageDescription-link">
              вооружение
            </Link>
            , а также открывать{" "}
            <Link href={"/warbonds"} className="pageDescription-link">
              боевые заслуги
            </Link>
            .
          </p>,
        )
      : setAdditionalDescription(
          <p>
            They allow you to upgrade your{" "}
            <Link href={"/shipModules"} className="pageDescription-link">
              ship
            </Link>
            , buy new{" "}
            <Link href={"/armorKits"} className="pageDescription-link">
              equipment,
            </Link>{" "}
            <Link href={"/weaponry"} className="pageDescription-link">
              weapons
            </Link>
            , and{" "}
            <Link href={"/warbonds"} className="pageDescription-link">
              warbonds
            </Link>
            .
          </p>,
        );
  }, []);
  return (
    <main>
      <ThePageTitle
        title={t("pageTitle")}
        additionalTitle={t("pageAdditionalTitle")}
      />

      <PageDescription description={t("pageDescription")} />

      <PageDescription description={additionalDescription} />

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
