"use client";
import React, { useState } from "react";

import axios from "axios";

import ThePageContent from "@/widgets/pageContents/ThePageContent";

const Page = () => {
  const [iconPath, setIconPath] = useState("");
  const [price, setPrice] = useState("");
  const [ruTitle, setRuTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [ruDescription, setRuDescription] = useState("");
  const [enDescription, setEnDescription] = useState("");

  const addBooster = () => {
    const emptyFields: string[] = [];

    if (!iconPath.trim()) emptyFields.push("iconPath");
    if (!price.trim()) emptyFields.push("price");
    if (!ruTitle.trim()) emptyFields.push("ruTitle");
    if (!enTitle.trim()) emptyFields.push("enTitle");
    if (!ruDescription.trim()) emptyFields.push("ruDescription");
    if (!enDescription.trim()) emptyFields.push("enDescription");

    if (emptyFields.length > 0) {
      alert(
        `Следующие поля обязательны для заполнения:\n${emptyFields.join("\n")}`,
      );
    } else {
      const response = axios.post("/api/admin/boosters", {
        iconPath,
        price: Number(price),
        isCompleted: false,
        ruTitle,
        enTitle,
        ruDescription,
        enDescription,
      });

      console.debug(response);

      setIconPath("");
      setPrice("");
      setRuTitle("");
      setEnTitle("");
      setRuDescription("");
      setEnDescription("");
    }
  };
  return (
    <ThePageContent>
      <main>
        <form className="grid justify-items-center grid-rows-7 gap-y-[20px]">
          <input
            type="text"
            placeholder="Введите ссылку на иконку"
            onChange={(e) => setIconPath(e.target.value)}
            value={iconPath}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите цену"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите Ru заголовок"
            onChange={(e) => setRuTitle(e.target.value)}
            value={ruTitle}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите En заголовок"
            onChange={(e) => setEnTitle(e.target.value)}
            value={enTitle}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите Ru описание"
            onChange={(e) => setRuDescription(e.target.value)}
            value={ruDescription}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите En описание"
            onChange={(e) => setEnDescription(e.target.value)}
            value={enDescription}
            className="p-[10px] w-[800px] outline-none"
          />

          <button
            type="button"
            onClick={() => addBooster()}
            className="flex justify-center items-center w-[200px] h-[50px] bg-transparent border-2 border-theme rounded-[10px] text-theme"
          >
            Добавить
          </button>
        </form>
      </main>
    </ThePageContent>
  );
};

export default Page;
