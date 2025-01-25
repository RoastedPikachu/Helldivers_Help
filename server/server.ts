import express from "express";

import cors from "cors";

import bodyParser from "body-parser";

import db from "./database";

const app = express();
const PORT = 3002;

app.use(bodyParser.json({ limit: "20mb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/news", (req: any, res: any) => {
  const query = "SELECT * FROM news ORDER BY createdAt DESC";

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Ошибка при получении новостей:", err.message);
      return res.status(500).json({ error: "Ошибка при получении новостей" });
    }

    res.status(200).json(rows);
  });
});

app.post("/news", (req: any, res: any) => {
  const { ruTitle, enTitle, cover, ruContent, enContent } = req.body;

  if (!ruTitle || !enTitle || !ruContent || !enContent) {
    return res.status(400).json({ error: "Требуется заголовок и контент" });
  }

  const createdAt = new Date().toISOString();

  const query = `
    INSERT INTO news (createdAt, ruTitle, enTitle, cover, ruContent, enContent)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [createdAt, ruTitle, enTitle, cover, ruContent, enContent],
    function (err) {
      if (err) {
        console.error("Ошибка при добавлении новости:", err.message);

        return res.status(500).json({ error: "Ошибка создания новости" });
      }

      res.status(201).json({
        message: "Новость успешно создана",
        newsId: this.lastID,
      });
    },
  );
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
