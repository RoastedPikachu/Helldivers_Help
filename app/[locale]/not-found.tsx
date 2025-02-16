"use client";
import React from "react";

import { useTranslations } from "next-intl";

import Link from "next/link";

import "./NotFoundPage.css";

const NotFound = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="flex justify-center items-center mt-0 w-screen h-screen">
      <div className="contentBlock">
        <h1 className="contentBlock_Title">{t("pageTitle")}</h1>

        <div className="contentBlock_Bottom">
          <h2 className="contentBlock_Bottom_Title">
            {t("errorText")}{" "}
            <b className="contentBlock_Bottom_Title_Bold">404</b>
          </h2>

          <p className="contentBlock_Bottom_Text">{t("pageDescription")}</p>

          <Link href="/" className="contentBlock_Bottom_LinkButton">
            {t("linkText")}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
