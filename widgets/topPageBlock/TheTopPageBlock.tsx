"use client";
import React, { useMemo } from "react";

import { useParams, usePathname } from "next/navigation";

import { useTranslations } from "next-intl";

import { Observer, observer } from "mobx-react-lite";

import { fromSlug, getIntlArray } from "@/utils/generalFunctions";

import { weapons } from "@/data/weapons";
import { armorKits } from "@/data/armor";
import { capes } from "@/data/capes";
import { terminids } from "@/data/enemies/terminids";
import { automatons } from "@/data/enemies/automatons";
import { illuminates } from "@/data/enemies/illuminates";
import { news } from "@/data/news";

import { localeStore } from "@/store/LocaleStore";
import { mobileStore } from "@/store/MobileStore";

import { Breadcrumb, ConfigProvider } from "antd";

import Link from "next/link";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TheTopPageBlock.css";
import { warbonds } from "@/data/warbonds";

const TheTopPageBlock = observer(() => {
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations("WeaponryPage");
  const t1 = useTranslations("weapons");
  const t2 = useTranslations("EquipmentPage");
  const t3 = useTranslations("ArmorPage");
  const t4 = useTranslations("armor");
  const t5 = useTranslations("CustomizationPage");
  const t6 = useTranslations("PlayerCardsPage");
  const t7 = useTranslations("BoostersPage");
  const t8 = useTranslations("CapesPage");
  const t9 = useTranslations("capes");
  const t10 = useTranslations("EnemiesPage");
  const t12 = useTranslations("NewsPage");
  const t13 = useTranslations("news");
  const t14 = useTranslations("WarbondsPage");
  const t15 = useTranslations("data");

  const isRunningLineShowed = useMemo(() => {
    if (mobileStore.isMobileDevice) {
      return pathname !== "/stratagemTraining/";
    }
    return true;
  }, [pathname]);

  const getItems = () => {
    if (typeof window !== "undefined") {
      if (pathname.includes("weaponry") && Object.entries(params).length > 1) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/weaponry`}>
                {`${t("pageTitle")} ${t("pageAdditionalTitle")}`.toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t1("names"))[
              weapons.find(
                (weapon) =>
                  weapon.devName.toLowerCase() ===
                  fromSlug(params.weaponName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("armor") &&
        Object.entries(params).length < 2
      ) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment`}>
                {t2("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title:
              `${t3("pageTitle")} ${t3("pageAdditionalTitle")}`.toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("boosters") &&
        Object.entries(params).length < 2
      ) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment`}>
                {t2("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: t7("pageTitle").toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("capes") &&
        Object.entries(params).length < 2
      ) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment`}>
                {t2("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: t8("pageTitle").toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("armor") &&
        Object.entries(params).length > 1
      ) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment`}>
                {t2("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment/armor`}>
                {`${t3("pageTitle")} ${t3("pageAdditionalTitle")}`.toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t4("names"))[
              armorKits.find(
                (armor) =>
                  armor.devName.toLowerCase() ===
                  fromSlug(params.armorName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("capes") &&
        Object.entries(params).length > 1
      ) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment`}>
                {t2("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: (
              <Link href={`/${localeStore.locale}/equipment/capes`}>
                {t8("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t9("names"))[
              capes.find(
                (cape) =>
                  cape.devName.toLowerCase() ===
                  fromSlug(params.capeName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (
        pathname.includes("customization") &&
        pathname.includes("playercards")
      ) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/customization`}>
                {`${t2("pageTitle")}`.toUpperCase()}
              </Link>
            ),
          },
          {
            title:
              `${t6("pageTitle")} ${t6("pageAdditionalTitle")}`.toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("enemies") &&
        Object.entries(params).length > 1 &&
        Object.entries(params).length < 3
      ) {
        const t11 = useTranslations(params.fractionName);

        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/enemies`}>
                {t10("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: t11("pageTitle" as never).toUpperCase(),
          },
        ];
      }

      if (pathname.includes("enemies") && Object.entries(params).length === 3) {
        const t11 = useTranslations(params.fractionName);

        const getCorrectEnemyArray = () => {
          switch (params.fractionName) {
            case "terminids":
              return terminids;
            case "automatons":
              return automatons;
            case "illuminates":
              return illuminates;
          }
        };

        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/enemies`}>
                {t10("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: (
              <Link
                href={`/${localeStore.locale}/enemies/${params.fractionName}`}
              >
                {t11("pageTitle" as never).toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t11("names" as never))[
              getCorrectEnemyArray()!.find(
                (enemy) =>
                  enemy.devName.toLowerCase() ===
                  fromSlug(params.enemyName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (pathname.includes("news") && Object.entries(params).length > 1) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/news`}>
                {t12("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t13("titles" as never))[
              news!.find((newsItem) => newsItem.id === Number(params.id))!.id -
                1
            ],
          },
        ];
      }

      if (pathname.includes("warbonds") && Object.entries(params).length > 1) {
        return [
          {
            title: (
              <Link href={`/${localeStore.locale}/warbonds`}>
                {t14("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t15("warbonds" as never))[
              warbonds!.find((warbond) => warbond.title === params.warbondName)!
                .id - 1
            ],
          },
        ];
      }
    }
  };
  return (
    <Observer>
      {() => (
        <>
          <section className="topPageSection">
            <TheHeader />

            {isRunningLineShowed && <RunningLine />}

            <ConfigProvider
              theme={{
                components: {
                  Breadcrumb: {
                    itemColor: "#9e9e9e",
                    linkColor: "#9e9e9e",
                    linkHoverColor: "#ffffff",
                    lastItemColor: "#ffffff",
                    separatorColor: "#ffffff",
                  },
                },
              }}
            >
              <Breadcrumb
                items={getItems()}
                className={`topPageSection-breadcrumb mt-[20px] ${pathname.includes("news") ? "ml-[calc((100%-900px)/2)] w-[900px]" : pathname.includes("warbonds") ? "ml-[calc((100%-1024px)/2)] w-[1024px]" : "deskWide:ml-[calc((100%-1440px)/2)] w-full"} desktop`}
              />
            </ConfigProvider>
          </section>

          <ConfigProvider
            theme={{
              components: {
                Breadcrumb: {
                  itemColor: "#9e9e9e",
                  linkColor: "#9e9e9e",
                  linkHoverColor: "#ffffff",
                  lastItemColor: "#ffffff",
                  separatorColor: "#ffffff",
                },
              },
            }}
          >
            <Breadcrumb
              items={getItems()}
              className={`topPageSection-breadcrumb pt-[135px] mobile`}
            />
          </ConfigProvider>
        </>
      )}
    </Observer>
  );
});

export default TheTopPageBlock;
