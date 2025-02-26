"use client";
import React, { useEffect } from "react";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import MediaQuery from "react-responsive";

import { Observer, observer } from "mobx-react-lite";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { localeStore } from "@/store/LocaleStore";
import { mobileStore } from "@/store/MobileStore";

import { ConfigProvider, Select } from "antd";

import Link from "next/link";

import MobileHeaderContent from "@/widgets/mobileHeaderContent/MobileHeaderContent";

import "./TheHeader.css";

const TheHeader = observer(() => {
  const router = useRouter();

  const pathname = usePathname();

  const t = useTranslations("Header");

  const changeLanguage = (value: string) => {
    localeStore.setLocale(value);

    const clearPathname = pathname.slice(value.length + 1);

    router.push(`/${value}${clearPathname}`);
  };

  useEffect(() => {
    mobileStore.changeIsMobileDeviceStatus();
  }, []);
  return (
    <Observer>
      {() => (
        <MediaQuery maxWidth={480}>
          {(matches) =>
            matches ? (
              <MobileHeaderContent />
            ) : (
              <header>
                <Link
                  href={`/${localeStore.locale}`}
                  className="headerLogoLink"
                >
                  <img
                    src="/static/GeneralIcons/HelldiversHelmet.svg"
                    alt=""
                    className="headerLogoLink_Icon"
                  />

                  <p className="headerLogoLink_Text">
                    HELLDIVERS <b className="headerLogoLink_Text_Bold">help</b>
                  </p>
                </Link>

                <nav className="headerNavBlock">
                  <Link
                    href={`/${localeStore.locale}/news`}
                    className="headerNavBlock_Link mr-[50px]"
                  >
                    {getIntlArray(t("links"))[0]}
                  </Link>

                  <Link
                    href={`/${localeStore.locale}/war`}
                    className="headerNavBlock_Link mr-[50px]"
                  >
                    {getIntlArray(t("links"))[1]}
                  </Link>

                  <Link
                    href={`/${localeStore.locale}/stratagemtraining`}
                    className="headerNavBlock_Link col-span-2 mr-[50px]"
                  >
                    {getIntlArray(t("links"))[2]}
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
                </nav>
              </header>
            )
          }
        </MediaQuery>
      )}
    </Observer>
  );
});

export default TheHeader;
