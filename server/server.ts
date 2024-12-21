import express from "express";

import cors from "cors";

import bodyParser from "body-parser";

import db from "./database";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
