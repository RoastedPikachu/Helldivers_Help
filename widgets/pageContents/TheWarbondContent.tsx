"use client";
import React from "react";

import { useParams } from "next/navigation";

import EntitySection from "@/widgets/EntitySection";

import WarbondItem from "@/entities/warbond/warbondItem/WarbondItem";

const TheWarbondContent = () => {
  const params = useParams();

  const warbondsHtmlContent = {
    steeledveterans: (
      <>
        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              width={192}
              height={351}
              price={2}
              image={"/static/PlayerCards/SteeledVeteransCard1.webp"}
            />

            <WarbondItem
              width={192}
              height={351}
              price={15}
              image={"/static/warbonds/weapons/P4.webp"}
            />

            <WarbondItem
              width={401}
              height={172}
              price={8}
              image={"/static/warbonds/emotes/SteeledVeteransEmote1.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={7}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                width={401}
                height={172}
                price={20}
                image={"/static/warbonds/weapons/AR23C.webp"}
              />
            </div>

            <WarbondItem
              width={401}
              height={351}
              price={18}
              image={"/static/warbonds/armor/SA25Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={12}
                image={"/static/warbonds/armor/SA25Helmet.webp"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={8}
                image={"/static/warbonds/coats/SteeledVeteransCoat1.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <div className="grid gap-y-[17px] w-[192px] h-full">
              <WarbondItem
                width={192}
                height={172}
                price={15}
                image={"/static/warbonds/emotes/SteeledVeteransEmote2.webp"}
              />

              <WarbondItem
                width={192}
                height={351}
                price={5}
                image={"/static/PlayerCards/SteeledVeteransCard2.webp"}
              />
            </div>

            <div className="grid gap-y-[17px] w-[192px] h-full">
              <WarbondItem
                width={192}
                height={351}
                price={25}
                image={"/static/warbonds/weapons/G10.webp"}
              />

              <WarbondItem
                width={192}
                height={172}
                price={16}
                image={"/static/warbonds/coats/SteeledVeteransCoat2.webp"}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <WarbondItem
              width={401}
              height={351}
              price={45}
              image={"/static/warbonds/armor/SA12Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={35}
                image={"/static/warbonds/armor/SA12Helmet.webp"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={16}
                image={"/static/warbonds/coats/SteeledVeteransCoat3.webp"}
              />
            </div>

            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={12}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                width={401}
                height={172}
                price={60}
                image={"/static/warbonds/weapons/SG225IE.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              width={192}
              height={351}
              price={16}
              image={"/static/PlayerCards/SteeledVeteransCard3.webp"}
            />

            <WarbondItem
              width={192}
              height={351}
              price={75}
              image={"/static/warbonds/Booster.webp"}
            />

            <WarbondItem
              width={401}
              height={172}
              price={32}
              image={"/static/warbonds/emotes/SteeledVeteransEmote3.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={32}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                width={401}
                height={172}
                price={80}
                image={"/static/warbonds/weapons/JAR5.webp"}
              />
            </div>

            <WarbondItem
              width={401}
              height={351}
              price={64}
              image={"/static/warbonds/armor/SA32Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={48}
                image={"/static/warbonds/armor/SA32Helmet.webp"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={20}
                image={"/static/warbonds/coats/SteeledVeteransCoat4.webp"}
              />
            </div>
          </div>
        </div>
      </>
    ),
    cuttingedge: (
      <>
        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              width={192}
              height={351}
              price={2}
              image={"/static/PlayerCards/CuttingEdgeCard1.webp"}
            />

            <WarbondItem
              width={192}
              height={351}
              price={18}
              image={"/static/warbonds/Booster.webp"}
            />

            <WarbondItem
              width={401}
              height={172}
              price={8}
              image={"/static/warbonds/emotes/CuttingEdgeEmote1.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={7}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                width={401}
                height={172}
                price={20}
                image={"/static/warbonds/weapons/LAS16.webp"}
              />
            </div>

            <WarbondItem
              width={401}
              height={351}
              price={18}
              image={"/static/warbonds/armor/EX03Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={12}
                image={"/static/warbonds/armor/EX03Helmet.webp"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={8}
                image={"/static/warbonds/coats/CuttingEdgeCoat1.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              width={401}
              height={172}
              price={15}
              image={"/static/warbonds/emotes/CuttingEdgeEmote2.webp"}
            />

            <WarbondItem
              width={192}
              height={351}
              price={5}
              image={"/static/PlayerCards/CuttingEdgeCard2.webp"}
            />

            <WarbondItem
              width={192}
              height={351}
              price={25}
              image={"/static/warbonds/weapons/G23.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <WarbondItem
              width={401}
              height={351}
              price={45}
              image={"/static/warbonds/armor/EX13Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={35}
                image={"/static/warbonds/armor/EX13Helmet.webp"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={20}
                image={"/static/warbonds/coats/CuttingEdgeCoat2.webp"}
              />
            </div>

            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={12}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                width={401}
                height={172}
                price={60}
                image={"/static/warbonds/weapons/SG8P.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              width={192}
              height={351}
              price={16}
              image={"/static/PlayerCards/CuttingEdgeCard3.webp"}
            />

            <WarbondItem
              width={192}
              height={351}
              price={60}
              image={"/static/warbonds/weapons/LAS7.webp"}
            />

            <WarbondItem
              width={401}
              height={172}
              price={32}
              image={"/static/warbonds/emotes/CuttingEdgeEmote3.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={32}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                width={401}
                height={172}
                price={80}
                image={"/static/warbonds/weapons/ARC12.webp"}
              />
            </div>

            <WarbondItem
              width={401}
              height={351}
              price={64}
              image={"/static/warbonds/armor/EX00Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={48}
                image={"/static/warbonds/armor/EX00Helmet.webp"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={30}
                image={"/static/warbonds/coats/CuttingEdgeCoat3.webp"}
              />
            </div>
          </div>
        </div>
      </>
    ),
  };

  const getTargetWarbond = () => {
    const warbondTitle = params.warbondTitle as string;

    return warbondsHtmlContent[warbondTitle];
  };
  return (
    <main>
      <EntitySection
        title={""}
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-1"}
      >
        {getTargetWarbond()}
      </EntitySection>
    </main>
  );
};

export default TheWarbondContent;
