"use client";
import React from "react";

import { useParams } from "next/navigation";

import EntitySection from "@/widgets/EntitySection";

import WarbondItem from "@/entities/warbond/warbondItem/WarbondItem";

import "./TheWarbondContent.css";

const TheWarbondContent = () => {
  const params = useParams();

  const warbondsHtmlContent = {
    helldiversmobilize: (
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={1}
              image={"/static/playerCards/HelldiversMobilize1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={2}
              image={"/static/warbonds/weapons/vertical/G6.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={1}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize1.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={1}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={4}
              image={"/static/warbonds/weapons/horizontal/SG8.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={3}
              image={"/static/warbonds/armor/SC34Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={2}
              image={"/static/warbonds/armor/SC34Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={2}
              image={"/static/warbonds/coats/HelldiversMobilize1.webp"}
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={2}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize2.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={5}
              image={"/static/warbonds/weapons/vertical/P19.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={6}
              image={"/static/warbonds/armor/FS05Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={5}
              image={"/static/warbonds/armor/FS05Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={3}
              image={"/static/warbonds/coats/HelldiversMobilize2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={1}
              image={"/static/playerCards/HelldiversMobilize2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={2}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={8}
              image={"/static/warbonds/weapons/horizontal/R63.webp"}
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={2}
              image={"/static/playerCards/HelldiversMobilize3.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={15}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={8}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize3.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={3}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={15}
              image={"/static/warbonds/weapons/horizontal/SMG37.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={10}
              image={"/static/warbonds/armor/CE35Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={7}
              image={"/static/warbonds/armor/CE35Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={5}
              image={"/static/warbonds/coats/HelldiversMobilize3.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_4</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={20}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize4.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={20}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={15}
              image={"/static/warbonds/armor/CM09Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={12}
              image={"/static/warbonds/armor/CM09Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={8}
              image={"/static/warbonds/coats/HelldiversMobilize4.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={2}
              image={"/static/playerCards/HelldiversMobilize4.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={6}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/SG225.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_5</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={4}
              image={"/static/playerCards/HelldiversMobilize5.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={20}
              image={"/static/warbonds/weapons/vertical/G16.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={20}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize5.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={10}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={30}
              image={"/static/warbonds/weapons/horizontal/LAS5.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={25}
              image={"/static/warbonds/armor/DP40Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={20}
              image={"/static/warbonds/armor/DP40Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={12}
              image={"/static/warbonds/coats/HelldiversMobilize5.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_6</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={10}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize6.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={40}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={35}
              image={"/static/warbonds/armor/FS23Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={25}
              image={"/static/warbonds/armor/FS23Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={15}
              image={"/static/warbonds/coats/HelldiversMobilize6.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={6}
              image={"/static/playerCards/HelldiversMobilize6.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={15}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={40}
              image={"/static/warbonds/weapons/horizontal/AR23P.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_7</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={7}
              image={"/static/playerCards/HelldiversMobilize7.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={75}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={35}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize7.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={15}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={40}
              image={"/static/warbonds/weapons/horizontal/R63CS.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={50}
              image={"/static/warbonds/armor/SC30Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={35}
              image={"/static/warbonds/armor/SC30Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={15}
              image={"/static/warbonds/coats/HelldiversMobilize7.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_8</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={50}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize8.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={25}
              image={"/static/warbonds/weapons/vertical/G3.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={60}
              image={"/static/warbonds/armor/SA04Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={40}
              image={"/static/warbonds/armor/SA04Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={25}
              image={"/static/warbonds/coats/HelldiversMobilize8.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={10}
              image={"/static/playerCards/HelldiversMobilize8.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={20}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={60}
              image={"/static/warbonds/weapons/horizontal/SG8S.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_9</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={15}
              image={"/static/playerCards/HelldiversMobilize9.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={70}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={30}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize9.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={25}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={60}
              image={"/static/warbonds/weapons/horizontal/SG225P.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={70}
              image={"/static/warbonds/armor/CM14Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] right-0"}
              price={50}
              image={"/static/warbonds/armor/CM14Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={30}
              image={"/static/warbonds/coats/HelldiversMobilize9.webp"}
            />
          </div>
        </div>

        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_10</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 8
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={50}
              image={
                "/static/warbonds/emotes/horizontal/HelldiversMobilize10.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={150}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={100}
              image={"/static/warbonds/armor/DP11Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={75}
              image={"/static/warbonds/armor/DP11Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={40}
              image={"/static/warbonds/coats/HelldiversMobilize10.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={20}
              image={"/static/playerCards/HelldiversMobilize10.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={50}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={75}
              image={"/static/warbonds/weapons/horizontal/PLAS1.webp"}
            />
          </div>
        </div>
      </div>
    ),
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={2}
              image={"/static/playerCards/SteeledVeterans1.webp"}
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={15}
              image={
                "/static/warbonds/emotes/default/SteeledVeteransEmote2.webp"
              }
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
              image={"/static/playerCards/SteeledVeterans2.webp"}
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={16}
              image={"/static/playerCards/SteeledVeterans3.webp"}
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={2}
              image={"/static/playerCards/CuttingEdge1.webp"}
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
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
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
              image={"/static/playerCards/CuttingEdge2.webp"}
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
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={16}
              image={"/static/playerCards/CuttingEdge3.webp"}
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
    democraticdetonation: (
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={18}
              image={"/static/warbonds/armor/CE27Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={8}
              image={
                "/static/warbonds/emotes/horizontal/DemocraticDetonation1.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-[179px] left-[416px]"}
              price={12}
              image={"/static/warbonds/armor/CE27Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={8}
              image={"/static/warbonds/coats/DemocraticDetonation1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={2}
              image={"/static/playerCards/DemocraticDetonation1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={15}
              image={"/static/warbonds/weapons/vertical/G123.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/BR14.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={5}
              image={"/static/playerCards/DemocraticDetonation2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={60}
              image={"/static/warbonds/weapons/horizontal/R36.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={45}
              image={"/static/warbonds/armor/CE07Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={35}
              image={"/static/warbonds/armor/CE07Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-[208px]"}
              price={20}
              image={"/static/warbonds/coats/DemocraticDetonation2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={15}
              image={
                "/static/warbonds/emotes/horizontal/DemocraticDetonation2.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={55}
              image={"/static/warbonds/boosters/vertical/Booster.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={32}
              image={
                "/static/warbonds/emotes/horizontal/DemocraticDetonation3.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={16}
              image={"/static/playerCards/DemocraticDetonation3.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={60}
              image={"/static/warbonds/weapons/vertical/GP31D.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={64}
              image={"/static/warbonds/armor/FS55Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={48}
              image={"/static/warbonds/armor/FS55Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={30}
              image={"/static/warbonds/coats/DemocraticDetonation3.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={80}
              image={"/static/warbonds/weapons/horizontal/CB9.webp"}
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
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
              image={"/static/playerCards/PolarPatriots1.webp"}
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
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
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
              image={"/static/playerCards/PolarPatriots2.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
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
              image={"/static/playerCards/PolarPatriots3.webp"}
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
    vipercommandos: (
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={40}
              image={"/static/warbonds/armor/PH09Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={30}
              image={"/static/warbonds/armor/PH09Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] left-[416px]"}
              price={8}
              image={"/static/warbonds/coats/ViperCommandos1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/AR23A.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={2}
              image={"/static/playerCards/ViperCommandos1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={20}
              image={"/static/warbonds/hellpods/ViperCommandosHellpod.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={8}
              image={"/static/warbonds/emotes/horizontal/ViperCommandos1.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={15}
              image={"/static/warbonds/emotes/horizontal/ViperCommandos2.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={50}
              image={"/static/warbonds/weapons/horizontal/SG22.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={5}
              image={"/static/playerCards/ViperCommandos2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] left-[208px]"}
              price={20}
              image={"/static/warbonds/coats/ViperCommandos2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[179px] left-[416px]"}
              price={35}
              image={"/static/warbonds/armor/PH202Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={50}
              image={
                "/static/warbonds/shuttles/horizontal/ViperCommandosShuttle.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={45}
              image={"/static/warbonds/armor/PH202Body.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 6
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={70}
              image={"/static/warbonds/emotes/square/ViperCommandos3.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={20}
              image={"/static/warbonds/titles/ViperCommandosTitle.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={60}
              image={"/static/warbonds/weapons/vertical/K2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={80}
              image={"/static/warbonds/boosters/default/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={50}
              image={"/static/warbonds/mechs/ViperCommandosMech.webp"}
            />
          </div>
        </div>
      </div>
    ),
    freedomsflame: (
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={10}
              image={"/static/warbonds/hellpods/FreedomsFlameHellpod.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={2}
              image={"/static/playerCards/FreedomsFlame1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={20}
              image={"/static/warbonds/weapons/horizontal/SG451.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={18}
              image={"/static/warbonds/armor/I09Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={12}
              image={"/static/warbonds/armor/I09Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] right-0"}
              price={8}
              image={"/static/warbonds/coats/FreedomsFlame1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={8}
              image={"/static/warbonds/emotes/horizontal/FreedomsFlame1.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={15}
              image={"/static/warbonds/emotes/horizontal/FreedomsFlame2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={20}
              image={"/static/warbonds/coats/FreedomsFlame2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[188px] left-[416px]"}
              price={35}
              image={"/static/warbonds/armor/I102Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={45}
              image={"/static/warbonds/armor/I102Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={40}
              image={"/static/warbonds/weapons/horizontal/FLAM66.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={5}
              image={"/static/playerCards/FreedomsFlame2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-[188px] right-[208px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={25}
              image={
                "/static/warbonds/shuttles/horizontal/FreedomsFlameShuttle.webp"
              }
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 6
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={40}
              image={"/static/warbonds/mechs/FreedomsFlameMech.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={60}
              image={"/static/warbonds/boosters/default/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={45}
              image={"/static/warbonds/weapons/vertical/P72.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={35}
              image={"/static/warbonds/emotes/square/FreedomsFlame3.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={20}
              image={"/static/warbonds/titles/FreedomsFlameTitle.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />
          </div>
        </div>
      </div>
    ),
    chemicalagents: (
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={40}
              image={"/static/warbonds/armor/AF50Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={30}
              image={"/static/warbonds/armor/AF50Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-[179px] left-[416px]"}
              price={8}
              image={"/static/warbonds/coats/ChemicalAgents1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={30}
              image={"/static/warbonds/weapons/horizontal/G4.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={8}
              image={"/static/warbonds/emotes/horizontal/ChemicalAgents1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={2}
              image={"/static/playerCards/ChemicalAgents1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={20}
              image={"/static/warbonds/hellpods/ChemicalAgentsHellpod.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 7
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={85}
              image={
                "/static/warbonds/stratagems/horizontal/ChemicalAgentsStratagem1.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={5}
              image={"/static/playerCards/ChemicalAgents2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={50}
              image={
                "/static/warbonds/shuttles/square/ChemicalAgentsShuttle.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={45}
              image={"/static/warbonds/armor/AF02Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={20}
              image={"/static/warbonds/coats/ChemicalAgents2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={35}
              image={"/static/warbonds/armor/AF02Helmet.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 6
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={20}
              image={"/static/warbonds/titles/ChemicalAgentsTitle.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={110}
              image={
                "/static/warbonds/stratagems/square/ChemicalAgentsStratagem2.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={80}
              image={"/static/warbonds/weapons/vertical/P11.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={70}
              image={"/static/warbonds/emotes/default/ChemicalAgents2.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={50}
              image={"/static/warbonds/mechs/ChemicalAgentsMech.webp"}
            />
          </div>
        </div>
      </div>
    ),
    truthenforcers: (
      <div className="warbondContainer">
        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_1</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 5
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={20}
              image={"/static/warbonds/weapons/square/SG20.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={35}
              image={"/static/warbonds/boosters/horizontal/booster.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={10}
              image={"/static/warbonds/hellpods/TruthEnforcersHellpod.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={50}
              image={"/static/warbonds/mechs/TruthEnforcersMech.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 7
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={40}
              image={"/static/warbonds/weapons/horizontal/SMG32.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[416px]"}
              price={5}
              image={"/static/playerCards/TruthEnforcers1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={50}
              image={
                "/static/warbonds/shuttles/square/TruthEnforcersShuttle.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={45}
              image={"/static/warbonds/armor/UF50Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={20}
              image={"/static/warbonds/coats/TruthEnforcers1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={35}
              image={"/static/warbonds/armor/UF50Helmet.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={15}
              image={"/static/playerCards/TruthEnforcers2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={20}
              image={"/static/warbonds/titles/TruthEnforcersTitle.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={65}
              image={"/static/warbonds/armor/UF16Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={45}
              image={"/static/warbonds/armor/UF16Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={30}
              image={"/static/warbonds/coats/TruthEnforcers2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={45}
              image={"/static/warbonds/weapons/square/PLAS15.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={50}
              image={"/static/warbonds/emotes/default/TruthEnforcers1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />
          </div>
        </div>
      </div>
    ),
    urbanlegends: (
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
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={40}
              image={"/static/warbonds/armor/SR24Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={30}
              image={"/static/warbonds/armor/SR24Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={8}
              image={"/static/warbonds/coats/UrbanLegends1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={2}
              image={"/static/playerCards/UrbanLegends1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={75}
              image={
                "/static/warbonds/stratagems/horizontal/UrbanLegendsStratagem1.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={30}
              image={"/static/warbonds/weapons/vertical/CQC19.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={20}
              image={"/static/warbonds/hellpods/UrbanLegendsHellpod.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 8
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={55}
              image={"/static/warbonds/boosters/default/Booster.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={85}
              image={
                "/static/warbonds/stratagems/default/UrbanLegendsStratagem2.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={50}
              image={
                "/static/warbonds/shuttles/square/UrbanLegendsShuttle.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={45}
              image={"/static/warbonds/armor/SR18Body.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-[208px]"}
              price={20}
              image={"/static/warbonds/coats/UrbanLegends2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={35}
              image={"/static/warbonds/armor/SR18Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={5}
              image={"/static/playerCards/UrbanLegends2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 6
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={55}
              image={"/static/warbonds/cars/UrbanLegendsCar.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={50}
              image={"/static/warbonds/emotes/default/UrbanLegends1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[416px]"}
              price={110}
              image={
                "/static/warbonds/stratagems/vertical/UrbanLegendsStratagem3.webp"
              }
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={20}
              image={"/static/warbonds/titles/UrbanLegendsTitle.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={50}
              image={"/static/warbonds/mechs/UrbanLegendsMech.webp"}
            />
          </div>
        </div>
      </div>
    ),
    servantsoffreedom: (
      <div className="warbondContainer">
        <div className="warbondContainer-page">
          <div className="warbondContainer-page-top">
            <p className="warbondContainer-page-top-title">СТРАНИЦА_1</p>

            <div className="warbondContainer-page-right">
              <p className="warbondContainer-page-right-text">
                Всего предметов: 6
              </p>

              <div className="warbondContainer-page-right-itemsBought">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={30}
              image={"/static/warbonds/armor/IE3Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={8}
              image={"/static/warbonds/coats/vertical/ServantsOfFreedom1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={45}
              image={"/static/warbonds/armor/full/IE3Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-[208px]"}
              price={2}
              image={"/static/playerCards/ServantsOfFreedom1.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={7}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={35}
              image={"/static/warbonds/weapons/square/LAS17.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_2
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 6
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={12}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 left-[208px]"}
              price={45}
              image={"/static/warbonds/armor/IE12Helmet.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={40}
              image={"/static/warbonds/weapons/square/GP31.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[416px]"}
              price={55}
              image={"/static/warbonds/armor/full/IE12Body.webp"}
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={25}
              image={"/static/warbonds/coats/vertical/ServantsOfFreedom2.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 right-0"}
              price={7}
              image={"/static/playerCards/ServantsOfFreedom2.webp"}
            />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div className="relative flex justify-between items-center mb-[15px] w-full h-auto">
            <p className="text-white text-[1.5rem] text-left font-primary font-medium">
              СТРАНИЦА_3
            </p>

            <div className="flex items-center gap-x-[10px]">
              <p className="text-white text-[1.5rem] text-left font-primary font-medium">
                Всего предметов: 5
              </p>

              <div className="flex flex-wrap justify-start gap-[5px] w-[95px] h-auto">
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <div key={index + 1} className="w-[15px] h-[15px] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[539px]">
            <WarbondItem
              positionStyle={"top-0 left-0"}
              price={55}
              image={"/static/warbonds/emotes/square/ServantsOfFreedom1.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-0"}
              price={32}
              image={"/static/warbonds/SuperCredits.webp"}
            />

            <WarbondItem
              positionStyle={"bottom-0 left-[208px]"}
              price={110}
              image={
                "/static/warbonds/stratagems/horizontal/ServantsOfFreedomStratagem1.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 left-[416px]"}
              price={25}
              image={
                "/static/warbonds/titles/vertical/ServantsOfFreedomTitle.webp"
              }
            />

            <WarbondItem
              positionStyle={"top-0 right-0"}
              price={65}
              image={"/static/warbonds/weapons/full/G50.webp"}
            />
          </div>
        </div>
      </div>
    ),
  };

  const getTargetWarbond = () => {
    const warbondName = params.warbondName;

    // @ts-ignore
    return warbondsHtmlContent[warbondName];
  };
  return (
    <main>
      <EntitySection
        title={""}
        gridStyles={"mt-[10px] mlarge:mt-0 grid-cols-1"}
      >
        {getTargetWarbond()}
      </EntitySection>
    </main>
  );
};

export default TheWarbondContent;
