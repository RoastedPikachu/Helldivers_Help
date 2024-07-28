import React from "react";

import Link from "next/link";

import "./NotFoundPage.css";

const NotFound = () => {
  return (
    <main className="flex justify-center items-center mt-0 w-screen h-screen">
      <div className="contentBlock">
        <h1 className="contentBlock_Title">Упс!</h1>

        <div className="contentBlock_Bottom">
          <h2 className="contentBlock_Bottom_Title">
            Ошибка <b className="contentBlock_Bottom_Title_Bold">404</b>
          </h2>

          <p className="contentBlock_Bottom_Text">
            Похоже что страница, которую вы искали, не найдена.
          </p>

          <Link href="/" className="contentBlock_Bottom_LinkButton">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
