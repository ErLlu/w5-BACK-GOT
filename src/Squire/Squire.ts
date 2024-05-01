import { Character } from "../Character/Character.js";
import { type SquireStructure } from "../Character/types";
import { type Level } from "../Character/types";
import { type FighterStructure } from "../Character/types";
import { type CharacterBasic } from "../Character/types";

export class Squire extends Character implements SquireStructure {
  public characterWhomItServes: FighterStructure;
  public flatteryLevel: Level;

  public constructor(
    character: CharacterBasic,
    characterWhomItServes: FighterStructure,
    flatteryLevel: Level,
  ) {
    super(character.name, character.lastName, character.age);
    this.characterWhomItServes = characterWhomItServes;
    this.flatteryLevel = flatteryLevel;
  }

  speak() {
    return "Soy un loser";
  }
}
