"use client";
import React, { useEffect, useState } from "react";

import { getGameNews } from "@/utils/api/routes/news";

import { ConfigProvider, Tabs, TabsProps } from "antd";

import NewsItem from "@/entities/newsItem/NewsItem";

import "./newsSection.css";

const NewsSection = () => {
  const [gameNews, setGameNews] = useState([]);
  const [siteNews, setSiteNews] = useState([]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Новости игры",
      children: (
        <div className="newsSection-itemsContainer">
          {getInternationalizedNews(gameNews)}
        </div>
      ),
    },
    {
      key: "2",
      label: "Обновления сайта",
      children: (
        <div className="newsSection-itemsContainer">
          {getInternationalizedNews(siteNews)}
        </div>
      ),
    },
  ];

  function getInternationalizedNews(news: any[]) {
    let userLanguage = "";

    if (typeof window !== "undefined") {
      if (navigator.languages && navigator.languages.length > 0) {
        userLanguage = navigator.languages[0];
      } else if (navigator.language) {
        userLanguage = navigator.language;
      } else {
        userLanguage = "ru-RU";
      }

      return news
        .map((newsItem) =>
          userLanguage === "ru-RU"
            ? {
                id: newsItem.id,
                title: newsItem.ruTitle,
                createdAt: newsItem.createdAt,
                cover: newsItem.cover,
                content: newsItem.ruContent,
              }
            : {
                id: newsItem.id,
                title: newsItem.enTitle,
                createdAt: newsItem.createdAt,
                cover: newsItem.cover,
                content: newsItem.enContent,
              },
        )
        .map((newsItem: any) => (
          <NewsItem
            key={newsItem.id}
            title={newsItem.title}
            createdAt={newsItem.createdAt}
            cover={newsItem.cover}
          />
        ));
    }
  }

  const getAllNews = async () => {
    setGameNews(await getGameNews());
  };

  useEffect(() => {
    getAllNews();

    const gameNewsFetchInterval = setInterval(
      async () => setGameNews(await getGameNews()),
      60000,
    );
    const siteNewsFetchInterval = setInterval(() => {}, 60000);

    return () => {
      clearInterval(gameNewsFetchInterval);
      clearInterval(siteNewsFetchInterval);
    };
  }, []);
  return (
    <section className="newsSection">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ffe500",
          },
          components: {
            Tabs: {
              itemColor: "#ffffff",
              titleFontSize: 20,
            },
          },
        }}
      >
        <Tabs defaultActiveKey="1" centered items={items} />
      </ConfigProvider>
    </section>
  );
};

export default NewsSection;
