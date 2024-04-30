import { Character } from "../Character/Character.js";

export class King extends Character {
  public yearsOfReign: number;

  constructor(
    name: string,
    lastName: string,
    age: number,
    yearsOfReign: number,
  ) {
    super(name, lastName, age);
    this.yearsOfReign = yearsOfReign;
  }

  speak() {
    return "Vais a morir todos";
  }
}
