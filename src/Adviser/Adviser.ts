import {
  type CharacterStructure,
  type AdviserStructure,
  type CharacterBasic,
} from "../Character/types";
import { Character } from "../Character/Character";

export class Adviser extends Character implements AdviserStructure {
  constructor(
    { name, lastName, age }: CharacterBasic,
    public characterWhomItAdvise: Character,
  ) {
    super(name, lastName, age);
  }

  speak() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
