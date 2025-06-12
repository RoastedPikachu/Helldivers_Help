"use client";
import React, { useState } from "react";

import ThePageContent from "@/widgets/pageContents/ThePageContent";

const Page = () => {
  const [iconPath, setIconPath] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [videoPreviewPath, setVideoPreviewPath] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [obtainingLevel, setObtainingLevel] = useState("");
  const [callTime, setCallTime] = useState("");
  const [useCount, setUseCount] = useState("");
  const [reloadTime, setReloadTime] = useState("");
  const [keyCodes, setKeyCodes] = useState("");

  return (
    <ThePageContent>
      <main>
        <form className="grid justify-items-center grid-rows-7 gap-y-[20px]">
          <input
            type="text"
            placeholder="Введите ссылку на иконку стратагемы"
            onChange={(e) => setIconPath(e.target.value)}
            value={iconPath}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите ссылку на видео"
            onChange={(e) => setVideoPath(e.target.value)}
            value={videoPath}
            className="p-[10px] w-[800px] outline-none"
          />

          <input
            type="text"
            placeholder="Введите ссылку на обложку видео"
            onChange={(e) => setVideoPreviewPath(e.target.value)}
            value={videoPreviewPath}
            className="p-[10px] w-[800px] outline-none"
          />

          {/*<input*/}
          {/*  type="text"*/}
          {/*  placeholder="Введите En заголовок"*/}
          {/*  onChange={(e) => setEnTitle(e.target.value)}*/}
          {/*  value={enTitle}*/}
          {/*  className="p-[10px] w-[800px] outline-none"*/}
          {/*/>*/}

          {/*<button*/}
          {/*  type="button"*/}
          {/*  onClick={() => addPlayerCard()}*/}
          {/*  className="flex justify-center items-center w-[200px] h-[50px] bg-transparent border-2 border-theme rounded-[10px] text-theme"*/}
          {/*>*/}
          {/*  Добавить*/}
          {/*</button>*/}
        </form>
      </main>
    </ThePageContent>
  );
};

export default Page;
