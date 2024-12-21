"use client";
import React from "react";

import type { TabsProps } from "antd";

import { ConfigProvider, Tabs } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Патчноуты",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Обновления сайта",
    children: "Content of Tab Pane 2",
  },
];

const TheNewsContent = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <main>
      <h1 className="text-[--color-white] text-[2.75rem] text-center font-ru-primary font-bold">
        Последние новости
      </h1>

      <section className="mx-auto w-full max-w-[900px]">
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
          <Tabs
            defaultActiveKey="1"
            centered
            items={items}
            onChange={onChange}
          />
        </ConfigProvider>
      </section>
    </main>
  );
};

export default TheNewsContent;
