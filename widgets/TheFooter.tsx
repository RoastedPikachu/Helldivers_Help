"use client";
import React, { useState, useEffect } from "react";

const TheFooter = () => {
  const [currentYear, setCurrentYear] = useState(2000);

  useEffect(() => {
    const currentDate = new Date();

    setCurrentYear(currentDate.getFullYear());
  }, []);

  return (
    <footer className="relative grid justify-items-center px-[5%] py-[20px] w-full h-auto bg-[#00293a] border-t-[1px] border-[#2cc384]">
      <div className="flex justify-between items-center w-[1090px] h-auto">
        <span className="relative w-auto mt-[5px] text-[#5a7f8f] text-[1.25rem]">
          <h3 className="pb-[10px] text-[#ffffff] text-[1.375rem] font-['Exo2'] font-medium">
            ССЫЛКИ
          </h3>

          <a
            href="https://t.me/helldivers_help_support"
            target="_blank"
            className="text-[#2cc388] font-['Exo2'] font-bold"
          >
            Чат поддержки
          </a>

          {/*<p className="flex items-center mt-[10px]">*/}
          {/*  <p className="font-['Exo2'] font-medium">Сайт создан</p>*/}

          {/*  <a*/}
          {/*    href="https://github.com/RoastedPikachu"*/}
          {/*    target="_blank"*/}
          {/*    className="mt-[2.5px] ml-[10px] text-[#2cc388] font-['Insignia']"*/}
          {/*  >*/}
          {/*    RoastedPikachu*/}
          {/*  </a>*/}
          {/*</p>*/}
        </span>

        <img
          src="/static/generalIcons/FooterSkullIcon.png"
          alt=""
          className="w-[75px] h-[75px]"
        />

        <span className="relative w-auto mt-[5px] text-[#5a7f8f] text-[1.25rem]">
          <h3 className="pb-[10px] text-[#ffffff] text-[1.375rem] text-right font-['Exo2'] font-medium">
            ПОДДЕРЖАТЬ САЙТ
          </h3>

          <a
            href="https://boosty.to/korobkaboris"
            target="_blank"
            className="block w-full text-[#2cc388] text-right font-['Insignia']"
          >
            Boosty
          </a>
        </span>
      </div>

      <span className="flex items-center mt-[15px] w-auto text-[#5a7f8f] text-[1.25rem] font-['Insignia'] font-medium">
        <p>HELLDIVER.HELP is independent of </p>
        <a
          href="https://www.arrowheadgamestudios.com/"
          target="_blank"
          className="ml-[10px] text-[#ffffff] underline"
        >
          Arrowhead game Studios and Sony.
        </a>
        <p className="ml-[10px]">
          Trademarks belong to their respective owners.
        </p>
      </span>
    </footer>
  );
};

export default TheFooter;
