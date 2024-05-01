import { Character } from "../Character/Character.js";
import {
  type FighterStructure,
  type CharacterBasic,
  type Level,
} from "../Character/types.js";

export class Fighter extends Character implements FighterStructure {
  constructor(
    { name, lastName, age }: CharacterBasic,
    public weapon: string,
    public skillLevel: Level,
  ) {
    super(name, lastName, age);
  }

  speak() {
    return "Primero pego y luego pregunto";
  }
}
