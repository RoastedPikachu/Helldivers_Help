"use client";
import React, { useState } from "react";

import { createNewsItem } from "@/utils/api/routes/news";

import { ConfigProvider, Tabs, TabsProps } from "antd";

import "./newsForm.css";

const NewsForm = () => {
  const [ruTitle, setRuTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [cover, setCover] = useState("");
  const [ruContent, setRuContent] = useState("");
  const [enContent, setEnContent] = useState("");

  const titleItems: TabsProps["items"] = [
    {
      key: "1",
      label: "RU",
      children: (
        <textarea
          placeholder="Введите заголовок новости"
          onChange={(event) => setRuTitle(event.target.value)}
          className="newsForm-titleInput"
        />
      ),
    },
    {
      key: "2",
      label: "EN",
      children: (
        <textarea
          placeholder="Введите заголовок новости"
          onChange={(event) => setEnTitle(event.target.value)}
          className="newsForm-titleInput"
        />
      ),
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "RU",
      children: (
        <textarea
          placeholder="Введите текст новости"
          onChange={(event) => setRuContent(event.target.value)}
          className="newsForm-contentInput"
        />
      ),
    },
    {
      key: "2",
      label: "EN",
      children: (
        <textarea
          placeholder="Введите текст новости"
          onChange={(event) => setEnContent(event.target.value)}
          className="newsForm-contentInput"
        />
      ),
    },
  ];

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader() as any;
    reader.onloadend = () => {
      setCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main>
      <form className="relative mx-auto w-full max-w-[900px]">
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
          <Tabs defaultActiveKey="1" items={titleItems} />
        </ConfigProvider>

        <label className="newsForm-coverInput">
          <input
            type="file"
            placeholder="Загрузите обложку"
            onChange={handleImageChange}
          />

          {!cover ? (
            <>
              <p className="newsForm-coverInput-icon">+</p>

              <p className="newsForm-coverInput-text">Добавить обложку</p>
            </>
          ) : (
            <img src={cover} alt="" className="newsForm-coverInput-preview" />
          )}
        </label>

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
          <Tabs defaultActiveKey="1" items={items} />
        </ConfigProvider>

        <button
          type="button"
          onClick={() =>
            createNewsItem(ruTitle, enTitle, cover, ruContent, enContent)
          }
          className="newsForm-submitButton"
        >
          Создать
        </button>
      </form>
    </main>
  );
};

export default NewsForm;
