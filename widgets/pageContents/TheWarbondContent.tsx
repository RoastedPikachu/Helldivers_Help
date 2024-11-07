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
              image={"/static/warbonds/P4.png"}
            />

            <WarbondItem
              width={401}
              height={172}
              price={8}
              image={"/static/warbonds/SteeledVeteransEmote1.png"}
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
                image={"/static/warbonds/AR23C.png"}
              />
            </div>

            <WarbondItem
              width={401}
              height={351}
              price={18}
              image={"/static/warbonds/SA25Body.png"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={12}
                image={"/static/warbonds/SA25Helmet.png"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={8}
                image={"/static/warbonds/SteeledVeteransCoat1.png"}
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
                image={"/static/warbonds/SteeledVeteransEmote2.png"}
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
                image={"/static/warbonds/G10.png"}
              />

              <WarbondItem
                width={192}
                height={172}
                price={16}
                image={"/static/warbonds/SteeledVeteransCoat2.png"}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <WarbondItem
              width={401}
              height={351}
              price={45}
              image={"/static/warbonds/SA12Body.png"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={35}
                image={"/static/warbonds/SA12Helmet.png"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={16}
                image={"/static/warbonds/SteeledVeteransCoat3.png"}
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
                image={"/static/warbonds/SG225IE.png"}
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
              image={"/static/warbonds/SteeledVeteransEmote3.png"}
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
                image={"/static/warbonds/JAR5.png"}
              />
            </div>

            <WarbondItem
              width={401}
              height={351}
              price={64}
              image={"/static/warbonds/SA32Body.png"}
            />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem
                width={192}
                height={167}
                price={48}
                image={"/static/warbonds/SA32Helmet.png"}
              />

              <WarbondItem
                width={192}
                height={167}
                price={20}
                image={"/static/warbonds/SteeledVeteransCoat4.png"}
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

            <WarbondItem width={401} height={172} price={8} />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={7}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem width={401} height={172} price={20} />
            </div>

            <WarbondItem width={401} height={351} price={18} />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem width={192} height={167} price={12} />

              <WarbondItem width={192} height={167} price={8} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[17px] mx-auto w-[1000px] h-[540px]">
          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[401px] h-full">
            <WarbondItem width={401} height={172} price={15} />

            <WarbondItem
              width={192}
              height={351}
              price={5}
              image={"/static/PlayerCards/CuttingEdgeCard2.webp"}
            />

            <WarbondItem width={192} height={351} price={25} />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <WarbondItem width={401} height={351} price={45} />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem width={192} height={167} price={35} />

              <WarbondItem width={192} height={167} price={20} />
            </div>

            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={12}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem width={401} height={172} price={60} />
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

            <WarbondItem width={192} height={351} price={60} />

            <WarbondItem width={401} height={172} price={32} />
          </div>

          <div className="flex flex-wrap gap-x-[17px] gap-y-[17px] w-[610px] h-full">
            <div className="flex gap-x-[17px] w-full">
              <WarbondItem
                width={192}
                height={172}
                price={32}
                image={"/static/warbonds/SuperCredits.webp"}
              />

              <WarbondItem width={401} height={172} price={80} />
            </div>

            <WarbondItem width={401} height={351} price={64} />

            <div className="grid gap-y-[17px] h-auto">
              <WarbondItem width={192} height={167} price={48} />

              <WarbondItem width={192} height={167} price={30} />
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
