export abstract class Character {
  public isAlive = true;

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  public die(): void {
    this.isAlive = false;
  }

  public abstract speak(): string;
}
