import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import Automaton from "@/entities/Automaton";

const Page = () => {
    const automatons = [
        {
            id: 1,
            imagePath: "/static/automatons/TrooperImage.png",
            title: "Кавалерист",
        },
        {
            id: 2,
            imagePath: "/static/automatons/ComissarImage.png",
            title: "Комиссар",
        },
        {
            id: 3,
            imagePath: "/static/automatons/BerserkerImage.png",
            title: "Берсерк",
        },
        {
            id: 4,
            imagePath: "/static/automatons/ScoutStriderImage.png",
            title: "Разведчик",
        },
        {
            id: 5,
            imagePath: "/static/automatons/HulkImage.png",
            title: "Глыба",
        },
        {
            id: 6,
            imagePath: "/static/automatons/TankImage.png",
            title: "Танк",
        },
        {
            id: 7,
            imagePath: "/static/automatons/DropshipImage.png",
            title: "Десантный корабль",
        },
        {
            id: 8,
            imagePath: "",
            title: "Сторожевая башня",
        },
    ];

    return (
        <>
            <TheHeader />

            <RunningLine />

            <main className="mt-[30px] pb-[65px] px-[5%] w-full h-auto">
                <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
                    АВТОМАТОНЫ
                </h2>

                <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
                    Автоматоны олицетворяют угрозу всему демократическому человечеству, представляя страшную силу на поле боя.
                    От неуклюжего чудовища Халка до слабого и архаичного танка, автоматоны - технологическая мощь, нуждающаяся в свободе.
                </p>

                <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
                    Чтобы противостоять угрозе, исходящей от автоматов, Адские Десантники должны извлекать выгоду из присущих им недостатков и использовать их уязвимости при любой возможности.
                    Победить механическую орду можно, используя правильную стратегию, решимость, разные тактики и мощнейшее вооружение.
                </p>

                <p className="mt-[20px] w-[80%] text-[#ffffff] text-[1.5rem] font-['Exo2'] font-medium brightness-75">
                    Как передовые защитники Супер-Земли, Адские Десантники должны стойко переносить натиск автоматонов, стремясь преодолеть их тактику и технологии.
                    Только упорство, хитрость, вера в свободу, процветание и демократию может помочь победить угрозу автоматонов, обеспечив дальнейшее продвижение демократии по всей галактике.
                </p>

                <section className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
                    {automatons.map((automaton) => (
                        <Automaton
                            key={automaton.id}
                            id={automaton.id}
                            imagePath={automaton.imagePath}
                            title={automaton.title}
                        />
                    ))}
                </section>
            </main>

            <TheFooter />
        </>
    );
};

export default Page;
