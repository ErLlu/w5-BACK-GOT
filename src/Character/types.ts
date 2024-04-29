export interface CharacterStructure {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  message: () => string;
  die: () => boolean;
}
