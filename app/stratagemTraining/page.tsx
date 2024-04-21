"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";

const Page = observer(() => {
  const getTargetRotate = (direction: number) => {
    let rotationAngle = "";

    switch (direction) {
      case 2:
        rotationAngle = "rotate-90";
        break;
      case 3:
        rotationAngle = "rotate-180";
        break;
      case 4:
        rotationAngle = "rotate-[270deg]";
        break;
    }

    return rotationAngle;
  };
  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <TheScrollToUpButton />

          <main>
            <div className="flex justify-center items-center w-full h-[550px] deskWide:h-[650px]">
              <h2 className="text-[#ffffff] text-[3rem] font-['Exo2'] font-bold ">
                Эта страница сайта находится в разработке
              </h2>

              <img
                src="/static/GeneralIcons/BuildIcon.svg"
                alt=""
                className="ml-[40px] w-[54px] h-[54px]"
              />
            </div>

            {/*<section className="grid justify-items-center relative w-full h-auto">*/}
            {/*  <h2 className="text-[#ffffff] text-[2.5rem] text-center font-['Exo2'] font-bold">*/}
            {/*    Тренировка стратагем*/}
            {/*  </h2>*/}

            {/*  <div className="relative flex mt-[50px] mx-auto w-[1300px] h-auto">*/}
            {/*    <div className="w-[150px] h-auto">*/}
            {/*      /!*<p className="text-[#ffffff] text-[1.5rem] text-center font-bold">*!/*/}
            {/*      /!*  {currentStratagem.name}*!/*/}
            {/*      /!*</p>*!/*/}

            {/*      <img*/}
            {/*        src={`${stratagemStore.currentStratagem.iconPath}`}*/}
            {/*        alt=""*/}
            {/*        className="w-[150px] h-[150px] bg-[#000000] rounded-[10px]"*/}
            {/*      />*/}

            {/*      <img*/}
            {/*        src={`${stratagemStore.nextStratagem.iconPath}`}*/}
            {/*        alt=""*/}
            {/*        className="mt-[50px] mx-[20px] w-[110px] h-[110px] bg-[#000000] rounded-[10px] brightness-[0.25]"*/}
            {/*      />*/}
            {/*    </div>*/}

            {/*    <div className="relative grid justify-items-center ml-[50px] w-[900px] h-auto">*/}
            {/*      <div*/}
            {/*        className={`flex justify-center w-full h-[150px] bg-[#00293a] ${*/}
            {/*          stratagemStore.isStratagemInputFail*/}
            {/*            ? "border-4 border-[#f44336]"*/}
            {/*            : stratagemStore.isStratagemInputSuccessful*/}
            {/*              ? "border-4 border-[#66bb6a]"*/}
            {/*              : ""*/}
            {/*        } rounded-[10px]`}*/}
            {/*      >*/}
            {/*        <div className="relative flex items-center pl-[50px] pr-[10px] w-auto h-[150px]">*/}
            {/*          {stratagemStore.currentStratagem.directions?.map(*/}
            {/*            (direction) => (*/}
            {/*              <img*/}
            {/*                src={`${*/}
            {/*                  direction.isPressed*/}
            {/*                    ? "/static/GeneralIcons/PressedArrowIcon.svg"*/}
            {/*                    : "/static/GeneralIcons/ArrowIcon.svg"*/}
            {/*                }`}*/}
            {/*                alt=""*/}
            {/*                key={direction.id}*/}
            {/*                className={`mr-[40px] w-[65px] h-[60px] ${getTargetRotate(*/}
            {/*                  direction.orientation,*/}
            {/*                )}`}*/}
            {/*              />*/}
            {/*            ),*/}
            {/*          )}*/}
            {/*        </div>*/}
            {/*      </div>*/}

            {/*      <div className="relative flex items-center mt-[50px] pl-[50px] pr-[10px] w-auto h-[110px] bg-[#00293a] rounded-[10px] brightness-[0.25]">*/}
            {/*        {stratagemStore.nextStratagem.directions?.map(*/}
            {/*          (direction) => (*/}
            {/*            <img*/}
            {/*              src="/static/GeneralIcons/ArrowIcon.svg"*/}
            {/*              alt=""*/}
            {/*              key={direction.id}*/}
            {/*              className={`mr-[40px] w-[55px] h-[50px] ${getTargetRotate(*/}
            {/*                direction.orientation,*/}
            {/*              )}`}*/}
            {/*            />*/}
            {/*          ),*/}
            {/*        )}*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    {!stratagemStore.isStratagemTrainingStarted ? (*/}
            {/*      <button*/}
            {/*        onClick={() =>*/}
            {/*          stratagemStore.handleStratagemTrainingStart()*/}
            {/*        }*/}
            {/*        className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"*/}
            {/*      >*/}
            {/*        <img*/}
            {/*          src="/static/GeneralIcons/StartIcon.svg"*/}
            {/*          alt=""*/}
            {/*          className="w-[75px] h-[75px]"*/}
            {/*        />*/}
            {/*      </button>*/}
            {/*    ) : (*/}
            {/*      <button*/}
            {/*        onClick={() =>*/}
            {/*          stratagemStore.handleStratagemTrainingRestart()*/}
            {/*        }*/}
            {/*        className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"*/}
            {/*      >*/}
            {/*        <img*/}
            {/*          src="/static/GeneralIcons/RestartIcon.svg"*/}
            {/*          alt=""*/}
            {/*          className="w-[100px] h-[100px]"*/}
            {/*        />*/}
            {/*      </button>*/}
            {/*    )}*/}
            {/*  </div>*/}
            {/*</section>*/}
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
