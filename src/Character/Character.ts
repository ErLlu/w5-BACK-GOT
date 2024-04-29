/* eslint-disable @typescript-eslint/parameter-properties */
import { CharacterStructure } from "./types";

export class Character {
  public name: string;
  public lastName: string;
  public age: number;
  public isAlive = true;

  public constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  private die() {
    this.isAlive = false;
  }

  private speak() {
    return "";
  }
}
