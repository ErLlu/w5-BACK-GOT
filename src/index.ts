import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";
import { Squire } from "./Squire/Squire.js";
import { Adviser } from "./Adviser/Adviser.js";
import express, { type Response } from "express";
import { type Character } from "./Character/Character.js";
import { type Characters } from "./Character/types.js";

const joffreyBaratheon = new King("Joffrey", "Baratheon", 14, 2);

const jaimeLannister = new Fighter(
  { name: "Jaime", lastName: "Lannister", age: 34 },
  "Sword",
  8,
);

const daenerysTargaryen = new Fighter(
  { name: "Daenerys", lastName: "Targaryen", age: 25 },
  "Fire bow",
  9,
);

const bronn = new Squire(
  { name: "Bronn", lastName: "", age: 42 },
  jaimeLannister,
  8,
);

const tyronLannister = new Adviser(
  { name: "Tyron", lastName: "Lannister", age: 30 },
  daenerysTargaryen,
);

export const characters: Character[] = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  bronn,
  tyronLannister,
];

const app = express();

app.listen(4000, () => {
  console.log("Server listening on 'http://localhost:4000/'");
});

app.get("/characters", (_req, res: Response<Characters>) => {
  res.status(200).json({ characters });
});

app.use((_req, res) => {
  res.status(404).json({ error: "page not found" });
});

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});
