import React from "react";

const TheFooter = () => {
  return (
    <footer className="relative grid justify-items-center py-[20px] px-[5%] deskWide:px-[calc((100%-1440px)/2)] w-full h-auto bg-[#00293a] border-t-[1px] border-[#2cc384]">
      <div className="flex justify-between items-center w-full h-auto">
        <span className="relative w-auto mt-[5px] text-[#5a7f8f] text-[1.25rem]">
          <h3 className="mt-[-15px] pb-[10px] text-[#ffffff] text-[1.375rem] font-['Exo2'] font-medium">
            ССЫЛКИ
          </h3>

          <a
            href="https://t.me/helldivers_help_support"
            target="_blank"
            className="text-[--theme-color] font-['Exo2'] font-bold"
          >
            Чат поддержки
          </a>
        </span>

        <img
          src="/static/GeneralLogos/HelldiversLogo.png"
          alt=""
          className="w-[200px] h-[75px]"
        />

        <span className="relative w-auto mt-[5px] text-[#5a7f8f] text-[1.25rem]">
          <h3 className="mt-[-15px] pb-[10px] text-[#ffffff] text-[1.375rem] text-right font-['Exo2'] font-medium">
            ПОДДЕРЖАТЬ САЙТ
          </h3>

          <a
            href="https://boosty.to/helldivers.help"
            target="_blank"
            className="block w-full text-[--theme-color] text-right font-['Insignia']"
          >
            Boosty
          </a>
        </span>
      </div>

      <span className="flex items-center mt-[15px] w-auto text-[#5a7f8f] text-[1.25rem] font-['Insignia'] font-medium">
        <p>HELLDIVERS.HELP is independent of </p>
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
