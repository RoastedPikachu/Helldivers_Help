"use client";
import React, { useState } from "react";

import "./newsForm.css";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");

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

  const addNewsItem = () => {
    console.log(title, cover, content);
  };

  return (
    <main>
      <form className="relative mx-auto w-full max-w-[900px]">
        <textarea
          placeholder="Введите заголовок новости"
          onChange={(event) => setTitle(event.target.value)}
          className="newsForm-titleInput"
        />

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

        <textarea
          placeholder="Введите текст новости"
          onChange={(event) => setContent(event.target.value)}
          className="newsForm-contentInput"
        />

        <button
          type="button"
          onClick={addNewsItem}
          className="newsForm-submitButton"
        >
          Создать
        </button>
      </form>
    </main>
  );
};

export default NewsForm;
