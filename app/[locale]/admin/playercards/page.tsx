"use client";
import React, { useState } from "react";

import axios from "axios";

import ThePageContent from "@/widgets/pageContents/ThePageContent";

const Page = () => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [ruTitle, setRuTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");

  const addPlayerCard = () => {
    const emptyFields: string[] = [];

    if (!image.trim()) emptyFields.push("image");
    if (!price.trim()) emptyFields.push("price");
    if (!ruTitle.trim()) emptyFields.push("ruTitle");
    if (!enTitle.trim()) emptyFields.push("enTitle");

    if (emptyFields.length > 0) {
      alert(
        `Следующие поля обязательны для заполнения:\n${emptyFields.join("\n")}`,
      );
    } else {
      const response = axios.post("/api/admin/playercards", {
        image,
        price: Number(price),
        ruTitle,
        enTitle,
      });

      console.debug(response);

      setImage("");
      setPrice("");
      setRuTitle("");
      setEnTitle("");
    }
  };
  return (
    <ThePageContent>
      <main>
        <form className="grid justify-items-center grid-rows-7 gap-y-[20px]">
          <input
            type="text"
            placeholder="Введите ссылку на изображение карточки"
            onChange={(e) => setImage(e.target.value)}
            value={image}
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

          <button
            type="button"
            onClick={() => addPlayerCard()}
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
