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
              price={2}
              image={"/static/PlayerCards/SteeledVeteransCard1.webp"}
            />

            <WarbondItem
              price={15}
              image={"/static/warbonds/weapons/vertical/P4.webp"}
            />

            <WarbondItem
              price={8}
              image={"/static/warbonds/emotes/SteeledVeteransEmote1.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                price={7}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                price={20}
                image={"/static/warbonds/weapons/horizontal/AR23C.webp"}
              />
            </div>

            <WarbondItem
              price={18}
              image={"/static/warbonds/armor/SA25Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                price={12}
                image={"/static/warbonds/armor/SA25Helmet.webp"}
              />

              <WarbondItem
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
                price={15}
                image={"/static/warbonds/emotes/SteeledVeteransEmote2.webp"}
              />

              <WarbondItem
                price={5}
                image={"/static/PlayerCards/SteeledVeteransCard2.webp"}
              />
            </div>

            <div className="grid gap-y-[17px] w-[192px] h-full">
              <WarbondItem
                price={25}
                image={"/static/warbonds/weapons/vertical/G10.webp"}
              />

              <WarbondItem
                price={16}
                image={"/static/warbonds/coats/SteeledVeteransCoat2.webp"}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <WarbondItem
              price={45}
              image={"/static/warbonds/armor/SA12Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                price={35}
                image={"/static/warbonds/armor/SA12Helmet.webp"}
              />

              <WarbondItem
                price={16}
                image={"/static/warbonds/coats/SteeledVeteransCoat3.webp"}
              />
            </div>

            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                price={12}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                price={60}
                image={"/static/warbonds/weapons/horizontal/SG225IE.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              price={16}
              image={"/static/PlayerCards/SteeledVeteransCard3.webp"}
            />

            <WarbondItem
              price={75}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              price={32}
              image={"/static/warbonds/emotes/SteeledVeteransEmote3.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                price={32}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                price={80}
                image={"/static/warbonds/weapons/horizontal/JAR5.webp"}
              />
            </div>

            <WarbondItem
              price={64}
              image={"/static/warbonds/armor/SA32Body.webp"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                price={48}
                image={"/static/warbonds/armor/SA32Helmet.webp"}
              />

              <WarbondItem
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
              price={2}
              image={"/static/PlayerCards/CuttingEdgeCard1.webp"}
            />

            <WarbondItem
              price={18}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              price={8}
              image={
                "/static/warbonds/emotes/horizontal/CuttingEdgeEmote1.webp"
              }
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                price={7}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                price={20}
                image={"/static/warbonds/weapons/horizontal/LAS16.webp"}
              />
            </div>

            <WarbondItem
              price={18}
              image={"/static/warbonds/armor/EX03Body.webp"}
            />

            <div className="grid gap-y-[7px] h-auto">
              <WarbondItem
                price={12}
                image={"/static/warbonds/armor/EX03Helmet.webp"}
              />

              <WarbondItem
                price={8}
                image={"/static/warbonds/coats/CuttingEdgeCoat1.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              price={15}
              image={
                "/static/warbonds/emotes/horizontal/CuttingEdgeEmote2.webp"
              }
            />

            <WarbondItem
              price={5}
              image={"/static/PlayerCards/CuttingEdgeCard2.webp"}
            />

            <WarbondItem
              price={25}
              image={"/static/warbonds/weapons/vertical/G23.webp"}
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <WarbondItem
              price={45}
              image={"/static/warbonds/armor/EX13Body.webp"}
            />

            <div className="grid gap-y-[7px] h-auto">
              <WarbondItem
                price={35}
                image={"/static/warbonds/armor/EX13Helmet.webp"}
              />

              <WarbondItem
                price={20}
                image={"/static/warbonds/coats/CuttingEdgeCoat2.webp"}
              />
            </div>

            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                price={12}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                price={60}
                image={"/static/warbonds/weapons/horizontal/SG8P.webp"}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem
              price={16}
              image={"/static/PlayerCards/CuttingEdgeCard3.webp"}
            />

            <WarbondItem
              price={60}
              image={"/static/warbonds/weapons/vertical/LAS7.webp"}
            />

            <WarbondItem
              price={32}
              image={
                "/static/warbonds/emotes/horizontal/CuttingEdgeEmote3.webp"
              }
            />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                price={32}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem
                price={80}
                image={"/static/warbonds/weapons/horizontal/ARC12.webp"}
              />
            </div>

            <WarbondItem
              price={64}
              image={"/static/warbonds/armor/EX00Body.webp"}
            />

            <div className="grid gap-y-[7px] h-auto">
              <WarbondItem
                price={48}
                image={"/static/warbonds/armor/EX00Helmet.webp"}
              />

              <WarbondItem
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
