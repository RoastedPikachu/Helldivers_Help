import React from "react";

import Link from "next/link";

import "./TheHeader.css";

const TheHeader = () => {
  return (
    <header>
      <Link href="/" className="headerLogoLink">
        <img
          src="/static/GeneralIcons/SkullIcon.svg"
          alt=""
          className="headerLogoLink_Icon"
        />

        <p className="headerLogoLink_Text">
          HELLDIVERS <b className="headerLogoLink_Text_Bold">help</b>
        </p>
      </Link>

      <nav className="headerNavBlock">
        <Link href="/code" className="headerNavBlock_Link">
          КОДЕКС
        </Link>

        <Link href="/war" className="headerNavBlock_Link">
          ВОЙНА
        </Link>

        <Link
          href="/stratagemTraining"
          className="headerNavBlock_Link col-span-2"
        >
          ТРЕНИРОВКА СТРАТАГЕМ
        </Link>
      </nav>
    </header>
  );
};

export default TheHeader;
