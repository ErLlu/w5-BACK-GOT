import {
  type CharacterStructure,
  type AdviserStructure,
  type CharacterBasic,
} from "../Character/types";
import { Character } from "../Character/Character";

export class Adviser extends Character implements AdviserStructure {
  public characterWhomItAdvise: CharacterStructure;

  public constructor(
    character: CharacterBasic,
    characterWhomItAdvise: Character,
  ) {
    super(character.name, character.lastName, character.age);
  }

  speak() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
