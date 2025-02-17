"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import { news } from "@/data/news";

const TheSpecificNewsContent = () => {
  const params = useParams();

  const t = useTranslations("news");

  const [currentNews, setCurrentNews] = useState({} as any);

  const unwrapText = (text: string) => {
    if (text) {
      return text.replace(/\|/g, "<br/>");
    }

    return "";
  };

  useEffect(() => {
    setCurrentNews(news.find((newsItem) => newsItem.id === Number(params.id)));
  }, []);
  return (
    <section className="mx-auto pb-[50px] w-full max-w-[900px]">
      <img
        src={currentNews ? currentNews.cover : ""}
        alt={""}
        className="mt-[20px] w-full h-[450px] border-[2px] border-[--color-theme] rounded-[10px] object-cover duration-300 ease-in-out overflow-hidden"
      />

      <p
        className="mt-[30px] text-white text-[1.25rem] font-primary font-medium brightness-[0.7]"
        dangerouslySetInnerHTML={{
          __html: unwrapText(getIntlArray(t("texts"))[currentNews.id - 1]),
        }}
      ></p>
    </section>
  );
};

export default TheSpecificNewsContent;
