import { Character } from "../Character/Character.js";
import {
  type FighterStructure,
  type CharacterBasic,
  type Level,
} from "../Character/types.js";

export class Fighter extends Character implements FighterStructure {
  public weapon: string;
  public skillLevel: Level;

  public constructor(
    character: CharacterBasic,
    weapon: string,
    skillLevel: Level,
  ) {
    super(character.name, character.lastName, character.age);
    this.weapon = weapon;
    this.skillLevel = skillLevel;
  }

  speak() {
    return "Primero pego y luego pregunto";
  }
}
