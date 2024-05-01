import { Character } from "../Character/Character.js";
import { type SquireStructure } from "../Character/types";
import { type Level } from "../Character/types";
import { type FighterStructure } from "../Character/types";
import { type CharacterBasic } from "../Character/types";

export class Squire extends Character implements SquireStructure {
  constructor(
    { name, lastName, age }: CharacterBasic,
    public characterWhomItServes: FighterStructure,
    public flatteryLevel: Level,
  ) {
    super(name, lastName, age);
  }

  speak() {
    return "Soy un loser";
  }
}
