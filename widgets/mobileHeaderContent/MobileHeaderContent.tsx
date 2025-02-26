"use client";
import React, { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { localeStore } from "@/store/LocaleStore";

import { pages } from "@/data/pages/pages";

import { ConfigProvider, Select } from "antd";

import Link from "next/link";

import "./MobileHeaderContent.css";

const MobileHeaderContent = () => {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("Header");
  const t1 = useTranslations("Pages");

  const [
    isAdditionalHeaderInfoOpened,
    changeIsAdditionalHeaderInfoOpenedStatus,
  ] = useState(false);

  const changeLanguage = (value: string) => {
    localeStore.setLocale(value);

    const clearPathname = pathname.slice(value.length + 1);

    router.push(`/${value}${clearPathname}`);
  };

  return (
    <header>
      <div className="flex justify-center items-center w-full h-[50px]">
        <button
          onClick={() =>
            changeIsAdditionalHeaderInfoOpenedStatus((prev) => !prev)
          }
          aria-label={`Кнопка: ${isAdditionalHeaderInfoOpened ? "Закрыть" : "Открыть"} меню с ссылками на другие страницы`}
          className="absolute flex justify-center items-center left-[2.5%] w-[50px] h-[50px]"
        >
          <div className="relative w-[35px] mmedium:w-[32.5px] msmall:w-[30px] h-[28px] mmedium:h-[25px] msmall:h-[23px] duration-[400ms] ease-in-out">
            <span
              className={`absolute left-0 w-full h-[5px] bg-theme rounded-[10px] duration-[250ms] ease-in-out ${isAdditionalHeaderInfoOpened ? "top-[11px] -rotate-45" : "top-0"}`}
            ></span>
            <span
              className={`absolute top-[11px] left-0 w-full h-[5px] bg-theme rounded-[10px] duration-[250ms] ease-in-out ${isAdditionalHeaderInfoOpened ? "w-0 opacity-0" : ""}`}
            ></span>
            <span
              className={`absolute left-0 w-full h-[5px] bg-theme rounded-[10px] duration-[250ms] ease-in-out ${isAdditionalHeaderInfoOpened ? "top-[11px] rotate-45" : "top-[22px]"}`}
            ></span>
          </div>
        </button>

        <Link href="/" className="headerLogoLink_Text">
          HELLDIVERS <b className="headerLogoLink_Text_Bold">help</b>
        </Link>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#ffe500",
              colorBorder: "#ffe500",
            },
            components: {
              Select: {
                selectorBg: "#1e1e1e",
                optionActiveBg: "transparent",
                optionSelectedBg: "transparent",
              },
            },
          }}
        >
          <Select
            defaultValue={localeStore.locale}
            options={[
              { value: "ru", label: "ru" },
              { value: "en", label: "en" },
            ]}
            onChange={changeLanguage}
            className="headerNavBlock_ChangeLanguageButton"
          />
        </ConfigProvider>
      </div>

      <div
        className={`fixed w-full bg-primary-bg duration-[400ms] ease-in-out overflow-y-scroll overscroll-contain z-40 ${window.location.href.includes("/stratagemtraining") ? "top-[65px] pb-[50px] h-[calc(100vh-50px)]" : "top-[115px] msmall:top-[110px] pb-[50px] h-[calc(100vh-115px)] msmall:h-[calc(100vh-110px)]"} ${isAdditionalHeaderInfoOpened ? "left-0" : "left-[-100vw]"}`}
      >
        <nav className="mt-[30px] px-[calc(2.5%+10px)]">
          <div className="relative grid gap-y-[10px] w-full h-auto">
            <Link
              href="/stratagemtraining"
              className="headerNavBlock_Link py-[10px] msmall:py-[5px] px-[15px] msmall:px-[10px] bg-[#1e1e1e] border-2 border-theme rounded-[10px]"
            >
              {getIntlArray(t("links"))[2]}
            </Link>

            {/*<img*/}
            {/*  src="/static/GeneralIcons/SkullIcon.svg"*/}
            {/*  alt=""*/}
            {/*  className="headerLogoLink_Icon"*/}
            {/*/>*/}

            <Link
              href="/war"
              className="headerNavBlock_Link py-[10px] msmall:py-[5px] px-[15px] msmall:px-[10px] bg-[#1e1e1e] border-2 border-theme rounded-[10px]"
            >
              {getIntlArray(t("links"))[1]}
            </Link>

            <Link
              href="/news"
              className="headerNavBlock_Link py-[10px] msmall:py-[5px] px-[15px] msmall:px-[10px] bg-[#1e1e1e] border-2 border-theme rounded-[10px]"
            >
              {getIntlArray(t("links"))[0]}
            </Link>
          </div>

          <div className="relative grid gap-y-[15px] mt-[30px] z-[40]">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={page.link}
                className="block text-[#ffffff] text-[1.25rem] msmall:text-[1.125rem] text-left font-['Exo2'] font-bold outline-none"
              >
                {getIntlArray(t1("links"))[page.id - 1].toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeaderContent;
