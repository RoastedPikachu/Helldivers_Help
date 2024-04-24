import React from "react";

import "./TheFooter.css";

const TheFooter = () => {
  return (
    <footer>
      <div className="footerTop">
        <span className="footerTop_TextBlock">
          <h3 className="footerTop_TextBlock_Title">ССЫЛКИ</h3>

          <a
            href="https://t.me/helldivers_help_support"
            target="_blank"
            className="footerTop_TextBlock_RusLink"
          >
            Группа сайта
          </a>
        </span>

        <img
          src="/static/GeneralLogos/HelldiversLogo.png"
          alt="Логотип игры Helldivers 2"
          className="footerTop_Icon"
        />

        <span className="footerTop_TextBlock">
          <h3 className="footerTop_TextBlock_Title">ПОДДЕРЖАТЬ САЙТ</h3>

          <a
            href="https://boosty.to/helldivers.help"
            target="_blank"
            className="footerTop_TextBlock_Link_EngLink"
          >
            Boosty
          </a>
        </span>
      </div>

      <span className="footerBottom">
        <p>HELLDIVERS.HELP is independent of </p>
        <a
          href="https://www.arrowheadgamestudios.com/"
          target="_blank"
          className="footerBottom_Link"
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
