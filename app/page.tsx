import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import ManualSection from "@/entities/ManualSection";
import RunningLine from "@/shared/RunningLine";

const Page = () => {
  const manualSections = [
    { id: 1, link: "/weaponry", title: "Вооружение" },
    {
      id: 2,
      link: "/",
      title: "Снаряжение",
    },
    {
      id: 3,
      link: "/boosters",
      title: "Усилители",
    },
    {
      id: 4,
      link: "/resources",
      title: "Ресурсы",
    },
    {
      id: 5,
      link: "/shipModules",
      title: "Модули корабля",
    },
    {
      id: 6,
      link: "/ranks",
      title: "Ранги",
    },
    {
      id: 7,
      link: "/achievements",
      title: "Достижения",
    },
    {
      id: 8,
      link: "/terminids",
      title: "Терминиды",
    },
    {
      id: 9,
      link: "/automatons",
      title: "Автоматоны",
    },
    {
      id: 10,
      link: "/missions",
      title: "Миссии",
    },
    {
      id: 11,
      link: "/planets",
      title: "Планеты",
    },
  ];

  return (
    <>
      <TheHeader />

      <RunningLine />

      <main>
        <div className="relative py-[20px] px-[30px] w-full h-[400px] bg-[url('/static/HelldiversBackgroundImage.png')] bg-no-repeat bg-cover border-2 border-[#2cc388] rounded-[10px]">
          <h1 className="text-[#ffffff] text-[3rem] font-['Insignia'] font-bold brightness-125">
            HELLDIVERS
            <b className="text-[#2cc388] font-bold">.HELP</b>
          </h1>

          <p className="w-[35%] text-[#ffffff] text-[2rem] font-['Exo2'] font-semibold brightness-125">
            Снаряжение, стратагемы, бестиарий и многое другое
          </p>
        </div>

        <h2 className="mt-[20px] text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
          СПРАВОЧНИК{" "}
          <b className="text-[#2cc388] font-bold">АДСКОГО ДЕСАНТНИКА</b>
        </h2>

        <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
          Добро пожаловать в справочник по Helldivers 2! Приготовьтесь
          погрузиться в захватывающий мир глобальной войны с враждебными
          захватчиками: автоматонами и терминидами. В этом руководстве вы
          найдете всю необходимую информацию, чтобы легче ориентироваться в
          особенностях вашего снаряжения, противников и планет галактики и
          выходить победителем из всех выполняемых вами миссий.
        </p>

        <section className="relative grid grid-cols-4 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
          {manualSections.map((section) => (
            <ManualSection
              key={section.id}
              id={section.id}
              link={section.link}
              title={section.title}
            />
          ))}
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;

// "use client";
// import React from "react";
//
// import {stratagemStore} from "@/store/StratagemStore";
//
// import TheHeader from "@/widgets/TheHeader";
// import TheFooter from "@/widgets/TheFooter";
//
// import RunningLine from "@/shared/RunningLine";
//
//
// export default function Home() {
//
//   const getTargetRotate = (direction: number) => {
//     let rotationAngle = "";
//
//     switch (direction) {
//       case 2:
//         rotationAngle = "rotate-90";
//         break;
//       case 3:
//         rotationAngle = "rotate-180";
//         break;
//       case 4:
//         rotationAngle = "rotate-[270deg]";
//         break;
//     }
//
//     return rotationAngle;
//   };
//
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
//                           ? "/static/generalIcons/PressedArrowIcon.svg"
//                           : "/static/generalIcons/ArrowIcon.svg"
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
//                     src="/static/generalIcons/ArrowIcon.svg"
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
//                   src="/static/generalIcons/StartIcon.svg"
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
//                   src="/static/generalIcons/RestartIcon.svg"
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
