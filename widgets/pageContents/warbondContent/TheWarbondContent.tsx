"use client";
import React from "react";

import { useParams } from "next/navigation";

import EntitySection from "@/widgets/EntitySection";

import WarbondItem from "@/entities/warbond/warbondItem/WarbondItem";

import "./TheWarbondContent.css";

const TheWarbondContent = () => {
  const params = useParams();

  const warbondsHtmlContent = {
    steeledveterans: (
      <div className="warbondContainer">
        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_1</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={2}
              image={"/static/PlayerCards/SteeledVeteransCard1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={15}
              image={"/static/warbonds/weapons/vertical/P4.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/AR23C.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={8}
              image={
                "/static/warbonds/emotes/horizontal/SteeledVeteransEmote1.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={18}
              image={"/static/warbonds/armor/SA25Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={12}
              image={"/static/warbonds/armor/SA25Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={8}
              image={"/static/warbonds/coats/SteeledVeteransCoat1.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_2</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 9
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={15}
              image={"/static/warbonds/emotes/SteeledVeteransEmote2.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={25}
              image={"/static/warbonds/weapons/vertical/G10.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={45}
              image={"/static/warbonds/armor/SA12Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={35}
              image={"/static/warbonds/armor/SA12Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={16}
              image={"/static/warbonds/coats/SteeledVeteransCoat3.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={5}
              image={"/static/PlayerCards/SteeledVeteransCard2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={16}
              image={"/static/warbonds/coats/SteeledVeteransCoat2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={60}
              image={"/static/warbonds/weapons/horizontal/SG225IE.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_3</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={16}
              image={"/static/PlayerCards/SteeledVeteransCard3.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={75}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={80}
              image={"/static/warbonds/weapons/horizontal/JAR5.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={32}
              image={
                "/static/warbonds/emotes/horizontal/SteeledVeteransEmote3.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={64}
              image={"/static/warbonds/armor/SA32Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={48}
              image={"/static/warbonds/armor/SA32Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={20}
              image={"/static/warbonds/coats/SteeledVeteransCoat4.webp"}
            />
          </div>
        </div>
      </div>
    ),
    cuttingedge: (
      <div className="warbondContainer">
        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_1</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={2}
              image={"/static/PlayerCards/CuttingEdgeCard1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={18}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/LAS16.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={8}
              image={
                "/static/warbonds/emotes/horizontal/CuttingEdgeEmote1.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={18}
              image={"/static/warbonds/armor/EX03Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={12}
              image={"/static/warbonds/armor/EX03Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={8}
              image={"/static/warbonds/coats/CuttingEdgeCoat1.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={15}
              image={
                "/static/warbonds/emotes/horizontal/CuttingEdgeEmote2.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={45}
              image={"/static/warbonds/armor/EX13Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={35}
              image={"/static/warbonds/armor/EX13Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={20}
              image={"/static/warbonds/coats/CuttingEdgeCoat2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={5}
              image={"/static/PlayerCards/CuttingEdgeCard2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={25}
              image={"/static/warbonds/weapons/vertical/G23.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={60}
              image={"/static/warbonds/weapons/horizontal/SG8P.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={16}
              image={"/static/PlayerCards/CuttingEdgeCard3.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={60}
              image={"/static/warbonds/weapons/vertical/LAS7.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={80}
              image={"/static/warbonds/weapons/horizontal/ARC12.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={32}
              image={
                "/static/warbonds/emotes/horizontal/CuttingEdgeEmote3.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={64}
              image={"/static/warbonds/armor/EX00Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={48}
              image={"/static/warbonds/armor/EX00Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={30}
              image={"/static/warbonds/coats/CuttingEdgeCoat3.webp"}
            />
          </div>
        </div>
      </div>
    ),
    polarpatriots: (
      <div className="warbondContainer">
        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_1</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={18}
              image={"/static/warbonds/armor/CW36Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={12}
              image={"/static/warbonds/armor/CW36Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] left-[416px]"}
              price={8}
              image={"/static/warbonds/coats/PolarPatriotsCoat1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={8}
              image={
                "/static/warbonds/emotes/horizontal/PolarPatriotsEmote1.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/AR61.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={2}
              image={"/static/PlayerCards/PolarPatriotsCard1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={15}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={60}
              image={"/static/warbonds/weapons/horizontal/SMG72.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={15}
              image={
                "/static/warbonds/emotes/horizontal/PolarPatriotsEmote2.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={25}
              image={"/static/warbonds/weapons/vertical/G13.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] left-[208px]"}
              price={35}
              image={"/static/warbonds/armor/CW22Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={20}
              image={"/static/warbonds/coats/PolarPatriotsCoat2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={45}
              image={"/static/warbonds/armor/CW22Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={5}
              image={"/static/PlayerCards/PolarPatriotsCard2.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-[--color-white] text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div
                    key={index + 1}
                    className="w-[15px] h-[15px] bg-[--color-white]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={64}
              image={"/static/warbonds/armor/CW4Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={48}
              image={"/static/warbonds/armor/CW4Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] left-[416px]"}
              price={30}
              image={"/static/warbonds/coats/PolarPatriotsCoat3.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={80}
              image={"/static/warbonds/weapons/horizontal/PLAS101.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={32}
              image={
                "/static/warbonds/emotes/horizontal/PolarPatriotsEmote3.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={16}
              image={"/static/PlayerCards/PolarPatriotsCard3.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={60}
              image={"/static/warbonds/weapons/vertical/P113.webp"}
            />
          </div>
        </div>
      </div>
    ),
  };

  const getTargetWarbond = () => {
    const warbondTitle = params.warbondTitle;

    // @ts-ignore
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
