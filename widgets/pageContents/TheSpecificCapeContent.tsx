"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { fromSlug, getIntlArray, toSlug } from "@/utils/generalFunctions";

import { capes } from "@/data/capes";

import Link from "next/link";

import CapeInfoSection from "@/widgets/capes/capeInfoSection/CapeInfoSection";

const TheSpecificCapeContent = () => {
  const params = useParams();

  const t = useTranslations("capes");

  const [currentCape, setCurrentCape] = useState({} as any);

  const getPreviousCapeLink = () => {
    if (Object.entries(currentCape).length) {
      let targetIndex: number;

      if (capes.indexOf(currentCape) - 1 < 0) {
        targetIndex = capes.length - 1;
      } else {
        targetIndex = capes.indexOf(currentCape) - 1;
      }

      return capes.find((cape, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getNextCapeLink = () => {
    if (Object.entries(currentCape).length) {
      let targetIndex: number;

      if (capes.indexOf(currentCape) + 1 === capes.length) {
        targetIndex = 0;
      } else {
        targetIndex = capes.indexOf(currentCape) + 1;
      }

      return capes.find((cape, index) => index === targetIndex)!.devName;
    }

    return "";
  };

  const getPreviousCapeName = () => {
    if (Object.entries(currentCape).length) {
      let targetIndex: number;

      if (capes.indexOf(currentCape) - 1 < 0) {
        targetIndex = capes.length - 1;
      } else {
        targetIndex = capes.indexOf(currentCape) - 1;
      }

      return getIntlArray(t("names" as never))[
        capes.find((cape, index) => index === targetIndex)!.id - 1
      ];
    }

    return "";
  };

  const getNextCapeName = () => {
    if (Object.entries(currentCape).length) {
      let targetIndex: number;

      if (capes.indexOf(currentCape) + 1 === capes.length) {
        targetIndex = 0;
      } else {
        targetIndex = capes.indexOf(currentCape) + 1;
      }

      return getIntlArray(t("names" as never))[
        capes.find((cape, index) => index === targetIndex)!.id - 1
      ];
    }

    return "";
  };

  useEffect(() => {
    setCurrentCape(
      capes.find(
        (cape) =>
          cape.devName.toLowerCase() === fromSlug(params.capeName as string),
      ),
    );
  }, []);
  return (
    <main className="relative h-auto">
      <section className="flex mlarge:block items-start gap-x-[120px]">
        <div className="w-[80%] h-[300px] border-2 border-theme rounded-[12.5px] overflow-hidden mobile">
          <img
            src={currentCape ? currentCape.imagePath : ""}
            alt={getIntlArray(t("names"))[currentCape ? currentCape.id - 1 : 0]}
            className="w-full h-full"
          />
        </div>

        <CapeInfoSection currentCape={currentCape} />

        <div className="w-[360px] h-[620px] border-2 border-theme rounded-[12.5px] overflow-hidden desktop">
          <img
            src={currentCape ? currentCape.imagePath : ""}
            alt={getIntlArray(t("names"))[currentCape ? currentCape.id - 1 : 0]}
            className="w-full h-full"
          />
        </div>
      </section>

      <div className="col-span-3 flex justify-between items-center mt-[50px] mlarge:mt-[30px] h-[55px]">
        <Link
          href={`/equipment/capes/${toSlug(getPreviousCapeLink())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px]"
          />

          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold ml-[10px] mlarge:ml-[5px] mlarge:text-right">
            {getPreviousCapeName()}
          </p>
        </Link>

        <Link
          href={`/equipment/capes/${toSlug(getNextCapeLink())}`}
          className="flex items-center py-[7.5px] mlarge:py-[5px] px-[25px] mlarge:px-[10px] mlarge:w-[42.5%] msmall:max-w-[calc(42.5%+10px)] mlarge:h-[60px] bg-primary-bg border-2 border-theme rounded-[10px]"
        >
          <p className="mlarge:w-full text-theme text-[1.375rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-primary font-semibold mr-[10px] mlarge:mr-[5px] mlarge:text-left">
            {getNextCapeName()}
          </p>

          <img
            src="/static/GeneralIcons/LeftArrowIcon.svg"
            alt=""
            className="mlarge:w-[35px] mmedium:w-[32.5px] msmall:w-[30px] mlarge:h-[35px] mmedium:h-[32.5px] msmall:h-[30px] rotate-180"
          />
        </Link>
      </div>
    </main>
  );
};

export default TheSpecificCapeContent;
