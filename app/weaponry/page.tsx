"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { weaponsStore } from "@/store/WeaponsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Weapon from "@/entities/weapon/Weapon";
import CurrentWeapon from "@/entities/currentWeapon/CurrentWeapon";

const Page = observer(() => {
  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <main>
            <h2 className="mt-[20px] text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
              ВООРУЖЕНИЕ{" "}
              <b className="text-[#2cc388] font-bold">АДСКОГО ДЕСАНТНИКА</b>
            </h2>

            <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75"></p>

            <section className="relative w-full h-auto">
              <div className="relative w-full h-auto">
                {weaponsStore.currentWeapon.id && <CurrentWeapon />}

                <h3 className="mt-[20px] text-[#2cc388] text-[2.5rem] font-['Exo2'] font-bold">
                  ОСНОВНОЕ
                </h3>

                <div className="grid grid-rows-6 grid-cols-3 gap-x-[30px] gap-y-[30px] mt-[20px] w-full h-full">
                  {weaponsStore.primaryWeapons.map((primaryWeapon) => (
                    <Weapon
                      key={primaryWeapon.id}
                      id={primaryWeapon.id}
                      weaponType={1}
                      imagePath={primaryWeapon.imagePath}
                      name={primaryWeapon.name}
                    />
                  ))}
                </div>
              </div>

              <div className="relative w-full h-auto">
                <h3 className="mt-[20px] text-[#2cc388] text-[2.5rem] font-['Exo2'] font-bold">
                  ВТОРИЧНОЕ
                </h3>

                <div className="grid grid-rows-2 grid-cols-3 gap-x-[30px] gap-y-[30px] mt-[20px] w-full h-full">
                  {weaponsStore.secondaryWeapons.map((secondaryWeapon) => (
                    <Weapon
                      key={secondaryWeapon.id}
                      id={secondaryWeapon.id}
                      weaponType={2}
                      imagePath={secondaryWeapon.imagePath}
                      name={secondaryWeapon.name}
                    />
                  ))}
                </div>
              </div>

              <div className="relative w-full h-auto">
                <h3 className="mt-[20px] text-[#2cc388] text-[2.5rem] font-['Exo2'] font-bold">
                  ГРАНАТЫ
                </h3>

                <div className="grid grid-rows-2 grid-cols-4 gap-x-[30px] gap-y-[30px] mt-[20px] w-full h-full">
                  {weaponsStore.grenades.map((grenade) => (
                    <Weapon
                      key={grenade.id}
                      id={grenade.id}
                      weaponType={3}
                      imagePath={grenade.imagePath}
                      name={grenade.name}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
