import { Character } from "../Character/Character.js";

export class King extends Character {
  public yearsOfReign: number;

  constructor(
    name: string,
    familyName: string,
    age: number,
    yearsOfReign: number,
  ) {
    super(name, familyName, age);
    this.yearsOfReign = yearsOfReign;
  }

  public speak() {
    return "Vais a morir todos";
  }

  public die() {
    this.isAlive = false;
  }
}
