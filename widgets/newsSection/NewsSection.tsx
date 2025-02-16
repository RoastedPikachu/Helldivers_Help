"use client";
import React from "react";

import { news } from "@/data/news";

import { ConfigProvider, Tabs, TabsProps } from "antd";

import NewsItem from "@/entities/newsItem/NewsItem";

import "./newsSection.css";

const NewsSection = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Новости игры",
      children: (
        <div className="newsSection-itemsContainer">
          {news
            .filter((news) => news.typeIndex === 0)
            .map((news) => (
              <NewsItem
                key={news.id}
                id={news.id}
                createdAt={news.createdAt}
                cover={news.cover}
              />
            ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Обновления сайта",
      children: (
        <div className="newsSection-itemsContainer">
          {news
            .filter((news) => news.typeIndex === 1)
            .map((news) => (
              <NewsItem
                key={news.id}
                id={news.id}
                createdAt={news.createdAt}
                cover={news.cover}
              />
            ))}
        </div>
      ),
    },
  ];

  // const getAllNews = async () => {
  //   setGameNews(await getGameNews());
  // };

  // useEffect(() => {
  //   getAllNews();
  //
  //   const gameNewsFetchInterval = setInterval(
  //     async () => setGameNews(await getGameNews()),
  //     60000,
  //   );
  //   const siteNewsFetchInterval = setInterval(() => {}, 60000);
  //
  //   return () => {
  //     clearInterval(gameNewsFetchInterval);
  //     clearInterval(siteNewsFetchInterval);
  //   };
  // }, []);
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
