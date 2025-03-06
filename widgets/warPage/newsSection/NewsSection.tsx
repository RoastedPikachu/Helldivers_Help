import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import axios from "axios";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./newsSection.css";
import NewsItem from "@/entities/war/newsItem/NewsItem";

const NewsSection = () => {
  const params = useParams();

  const [news, setNews] = useState({} as any);

  const getNews = () => {
    // "https://api.helldivers2.dev/raw/api/v2/Assignment/War/801"
    // "https://api.diveharder.com/raw/items"
    axios
      .get("https://api.helldivers2.dev/api/v1/dispatches", {
        headers: {
          "Accept-Language": params.locale === "ru" ? "ru-RU" : "en-EN",
          "X-Super-Client": "Helldivers Help",
          "X-Super-Contact": "gh/RoastedPikachu",
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data.length === 0) {
          return;
        }

        setNews(
          response.data.map((item: any) => ({
            id: item.id,
            text: item.message,
            date: item.published,
          })),
        );
        // changeMajorOrderReceiveErrorStatus(false);
        // changeMajorOrderLoadStatus(true);
      })
      .catch((error) => {
        // changeMajorOrderReceiveErrorStatus(true);
      });
  };

  useEffect(() => {
    getNews();

    let newsInterval = setInterval(() => getNews(), 300000) as any;

    return () => {
      newsInterval = null;
    };
  }, []);
  return (
    <section className="newsSection">
      <SectionTitle text={"НОВОСТИ"} />

      {news.length &&
        news.map((newsItem: any) => (
          <NewsItem
            key={newsItem.id}
            text={newsItem.text}
            date={newsItem.date}
          />
        ))}
    </section>
  );
};

export default NewsSection;
