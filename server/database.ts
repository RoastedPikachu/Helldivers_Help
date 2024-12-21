import sqlite3 from "sqlite3";

import path from "path";

const dbPath = path.resolve(process.cwd(), "server", "main.db");

const db = new sqlite3.Database(dbPath, (err: any) => {
  if (err) {
    console.error("Ошибка подключения к базе данных:", err.message);
  } else {
    console.log("Подключение к SQLite базе данных успешно.");
  }
});

db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createdAt TEXT NOT NULL,
      title TEXT NOT NULL,
      cover TEXT,
      content TEXT NOT NULL
    )
  `,
    (err: Error) => {
      if (err) {
        console.error("Ошибка при создании таблицы news:", err.message);
      } else {
        console.log("Таблица news успешно создана или уже существует.");
      }
    },
  );
});

export default db;
