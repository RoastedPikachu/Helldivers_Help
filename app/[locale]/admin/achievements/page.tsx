"use client";
import React, { useState } from "react";

import axios from "axios";

import ThePageContent from "@/widgets/pageContents/ThePageContent";

const Page = () => {
  const [iconPath, setIconPath] = useState("");
  const [type, setType] = useState("");
  const [ruTitle, setRuTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [ruDescription, setRuDescription] = useState("");
  const [enDescription, setEnDescription] = useState("");
  const [ruAccomplishmentWay, setRuAccomplishmentWay] = useState("");
  const [enAccomplishmentWay, setEnAccomplishmentWay] = useState("");

  const addAchievement = async () => {
    const emptyFields: string[] = [];

    if (!iconPath.trim()) emptyFields.push("iconPath");
    if (!type.trim()) emptyFields.push("type");
    if (!ruTitle.trim()) emptyFields.push("ruTitle");
    if (!enTitle.trim()) emptyFields.push("enTitle");
    if (!ruDescription.trim()) emptyFields.push("ruDescription");
    if (!enDescription.trim()) emptyFields.push("enDescription");
    if (!ruAccomplishmentWay.trim()) emptyFields.push("ruAccomplishmentWay");
    if (!enAccomplishmentWay.trim()) emptyFields.push("enAccomplishmentWay");

    if (emptyFields.length > 0) {
      alert(
        `Следующие поля обязательны для заполнения:\n${emptyFields.join("\n")}`,
      );
    } else {
      const response = axios.post("/api/admin/achievements", {
        iconPath,
        type,
        isCompleted: false,
        ruTitle,
        enTitle,
        ruDescription,
        enDescription,
        ruAccomplishmentWay,
        enAccomplishmentWay,
      });

      console.debug(response);

      setIconPath("");
      setType("");
      setRuTitle("");
      setEnTitle("");
      setRuDescription("");
      setEnDescription("");
      setRuAccomplishmentWay("");
      setEnAccomplishmentWay("");
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
            placeholder="Введите тип достижения (easy, extreme, helldive, longWay)"
            onChange={(e) => setType(e.target.value)}
            value={type}
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

          <input
            type="text"
            placeholder="Введите Ru путь получения"
            onChange={(e) => setRuAccomplishmentWay(e.target.value)}
            value={ruAccomplishmentWay}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите En путь получения"
            onChange={(e) => setEnAccomplishmentWay(e.target.value)}
            value={enAccomplishmentWay}
            className="p-[10px] w-[800px] outline-none"
          />

          <button
            type="button"
            onClick={() => addAchievement()}
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
