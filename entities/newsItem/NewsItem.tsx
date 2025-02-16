"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import Link from "next/link";

import "./newsItem.css";

interface NewsItemProps {
  id: number;
  createdAt: Date;
  cover: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ id, createdAt, cover }) => {
  const t = useTranslations("news");

  const formatDate = () => {
    const day = createdAt.getDate();
    const month = createdAt.getMonth();
    const year = createdAt.getFullYear();

    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const formattedMonth = monthNames[month];

    return `${day} ${formattedMonth} ${year}`;
  };
  return (
    <Link href={`/news/${id}`}>
      <div className="newsItem">
        <span className="newsItem-head">
          <h4 className="newsItem-head-title">
            {getIntlArray(t("titles"))[id - 1]}
          </h4>

          <p className="newsItem-head-date">{formatDate()}</p>
        </span>

        <img src={cover} alt={""} className="newsItem-cover" />
      </div>
    </Link>
  );
};

export default NewsItem;
