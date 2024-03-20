"use client";
import React from "react";

interface AutomatonProps {
    id: number;
    imagePath: string;
    title: string;
}

const Automaton: React.FC<AutomatonProps> = ({ id, imagePath, title }) => {
    return (
        <div className="grid justify-items-center px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px] cursor-pointer">
            {imagePath ? (
                <img src={`${imagePath}`} alt="" className={`w-full h-[300px] ${id == 6 ? "scale-x-125" : id == 7 ? "scale-x-100" : "scale-x-150"}`}/>
            ) : (
                <p className="mt-[70px] h-[230px] text-[#2cc388] text-[7rem] text-center font-['Insignia'] font-bold">
                    ?
                </p>
            )}

            <p className="mt-[20px] text-[#ffffff] text-[1.75rem] text-center font-['Exo2'] font-bold">
                {title}
            </p>
        </div>
    );
};

export default Automaton;
