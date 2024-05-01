import { type Character as CharacterStrucure } from "./Character.js";

export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Message =
  | "Vais a morir todos"
  | "Primero pego y luego pregunto"
  | "No sé por qué, pero creo que voy a morir pronto"
  | "Soy un loser";

export type CharacterWithoutMethods = Omit<
  CharacterStrucure,
  "speak" | "die" | "isAlive"
>;

export interface CharacterBasic {
  name: string;
  lastName: string;
  age: number;
}

export interface CharacterStructure {
  isAlive: boolean;
  speak: () => string;
  die: () => void;
}

export interface KingStructre extends CharacterStrucure {
  yearsOfReign: number;
}

export interface FighterStructure extends CharacterStrucure {
  weapon: string;
  skillLevel: Level;
}

export interface AdviserStructure extends CharacterStrucure {
  characterWhomItAdvise: CharacterStructure;
}

export interface SquireStructure extends CharacterStrucure {
  characterWhomItServes: FighterStructure;
  flatteryLevel: Level;
}
