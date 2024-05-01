import { King } from "./King/King.js";
import { Fighter } from "./Fighter/Fighter.js";
import { Squire } from "./Squire/Squire.js";
import { Adviser } from "./Adviser/Adviser.js";

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

export const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  bronn,
  tyronLannister,
];
