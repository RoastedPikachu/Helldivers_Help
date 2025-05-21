import React from "react";

import Link from "next/link";

import "./adminContent.css";

const TheAdminContent = () => {
  return (
    <main>
      <section className="adminPages">
        <Link href="/admin/weaponry" className="adminPages-link">
          Вооружение
        </Link>

        <Link href="/admin/armor" className="adminPages-link">
          Броня
        </Link>

        <Link href="/admin/boosters" className="adminPages-link">
          Усилители
        </Link>

        <Link href="/admin/capes" className="adminPages-link">
          Плащи
        </Link>

        <Link href="/admin/playercards" className="adminPages-link">
          Карточки игрока
        </Link>

        <Link href="/admin/terminids" className="adminPages-link">
          Терминиды
        </Link>

        <Link href="/admin/automatons" className="adminPages-link">
          Автоматоны
        </Link>

        <Link href="/admin/illuminates" className="adminPages-link">
          Просветленные
        </Link>

        <Link href="/admin/stratagems" className="adminPages-link">
          Стратагемы
        </Link>

        <Link href="/admin/shipmodules" className="adminPages-link">
          Модули корабля
        </Link>

        <Link href="/admin/emotes" className="adminPages-link">
          Эмоции
        </Link>

        <Link href="/admin/progression" className="adminPages-link">
          Прогрессия
        </Link>

        <Link href="/admin/achievements" className="adminPages-link">
          Достижения
        </Link>

        <Link href="/admin/news" className="adminPages-link">
          Новости
        </Link>
      </section>
    </main>
  );
};

export default TheAdminContent;
