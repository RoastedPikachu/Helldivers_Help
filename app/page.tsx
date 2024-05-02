"use client";
import React from "react";

import { useRouter } from "next/navigation";

import { pages } from "@/data/pages/pages";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import ManualSection from "@/entities/ManualSection";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <TopPageBlock />

      <TheScrollToUpButton />

      <main>
        <div className="relative mb-[40px] py-[20px] px-[30px] w-full h-[400px] bg-[url('/static/HelldiversBackgroundImage.png')] bg-no-repeat bg-cover border-2 border-[--theme-color] rounded-[10px]">
          <h1 className="text-[#ffffff] text-[3rem] font-['Insignia'] font-bold brightness-125">
            HELLDIVERS
            <b className="text-[--theme-color] font-bold">.HELP</b>
          </h1>

          <p className="w-[35%] text-[#ffffff] text-[2rem] font-['Exo2'] font-semibold brightness-125">
            Снаряжение, стратагемы, бестиарий и многое другое
          </p>
        </div>

        <ThePageTitle
          title={"справочник"}
          additionalTitle={"адского десантника"}
        />

        <PageDescription
          description={
            "Добро пожаловать в справочник по Helldivers 2! Приготовьтесь погрузиться в захватывающий мир глобальной войны с враждебными захватчиками: автоматонами и терминидами. В этом руководстве вы найдете всю необходимую информацию, чтобы легче ориентироваться в особенностях вашего снаряжения, противников и планет галактики и выходить победителем из всех выполняемых вами миссий."
          }
        />

        <section className="relative grid grid-cols-4 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {pages.map((page) => (
            <ManualSection
              key={page.id}
              id={page.id}
              link={page.link}
              title={page.title}
            />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;

//   return (
//     <>
//       <TheHeader />
//
//       <RunningLine />
//
//       <main className="mt-[30px] w-full h-auto">
//         <section className="grid justify-items-center relative w-full h-auto">
//           <h2 className="text-[#ffffff] text-[2.5rem] text-center font-['Exo2'] font-bold">
//             Отработка стратагем
//           </h2>
//
//           <div className="relative flex mt-[50px] mx-auto w-[1300px] h-auto">
//             <div className="w-[150px] h-auto">
//               {/*<p className="text-[#ffffff] text-[1.5rem] text-center font-bold">*/}
//               {/*  {currentStratagem.name}*/}
//               {/*</p>*/}
//
//               <img
//                 src={`${stratagemStore.currentStratagem.image}`}
//                 alt=""
//                 className="w-[150px] h-[150px] bg-[#000000] rounded-[10px]"
//               />
//
//               <img
//                 src={`${stratagemStore.nextStratagem.image}`}
//                 alt=""
//                 className="mt-[50px] mx-[20px] w-[110px] h-[110px] bg-[#000000] rounded-[10px] brightness-[0.25]"
//               />
//             </div>
//
//             <div className="relative grid justify-items-center ml-[50px] w-[900px] h-auto">
//               <div
//                 className={`flex justify-center w-full h-[150px] bg-[#00293a] ${
//                   stratagemStore.isStratagemInputFail
//                     ? "border-4 border-[#f44336]"
//                     : stratagemStore.isStratagemInputSuccessful
//                       ? "border-4 border-[#66bb6a]"
//                       : ""
//                 } rounded-[10px]`}
//               >
//                 <div className="relative flex items-center pl-[50px] pr-[10px] w-auto h-[150px]">
//                   {stratagemStore.currentStratagem.directions?.map((direction) => (
//                     <img
//                       src={`${
//                         direction.isPressed
//                           ? "/static/GeneralIcons/PressedArrowIcon.svg"
//                           : "/static/GeneralIcons/ArrowIcon.svg"
//                       }`}
//                       alt=""
//                       key={direction.id}
//                       className={`mr-[40px] w-[65px] h-[60px] ${getTargetRotate(
//                         direction.orientation,
//                       )}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//
//               <div className="relative flex items-center mt-[50px] pl-[50px] pr-[10px] w-auto h-[110px] bg-[#00293a] rounded-[10px] brightness-[0.25]">
//                 {stratagemStore.nextStratagem.directions?.map((direction) => (
//                   <img
//                     src="/static/GeneralIcons/ArrowIcon.svg"
//                     alt=""
//                     key={direction.id}
//                     className={`mr-[40px] w-[55px] h-[50px] ${getTargetRotate(
//                       direction.orientation,
//                     )}`}
//                   />
//                 ))}
//               </div>
//             </div>
//
//             {!stratagemStore.isStratagemTrainingStarted ? (
//               <button
//                 onClick={() => stratagemStore.handleStratagemTrainingStart()}
//                 className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"
//               >
//                 <img
//                   src="/static/GeneralIcons/StartIcon.svg"
//                   alt=""
//                   className="w-[75px] h-[75px]"
//                 />
//               </button>
//             ) : (
//               <button
//                 onClick={() => stratagemStore.handleStratagemTrainingRestart()}
//                 className="flex justify-center items-center ml-[50px] w-[150px] h-[150px] bg-[#2cc384] rounded-[10px] outline-none"
//               >
//                 <img
//                   src="/static/GeneralIcons/RestartIcon.svg"
//                   alt=""
//                   className="w-[100px] h-[100px]"
//                 />
//               </button>
//             )}
//           </div>
//         </section>
//       </main>
//
//       <TheFooter />
//     </>
//   );
// }
