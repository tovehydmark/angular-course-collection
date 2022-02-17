export class Animal {
  type: string;
  name: string;
  diet: string;
  weight: number;
  hasBeenFed: boolean;
  constructor(type: string, name: string, diet: string, weight: number) {
    this.type = type;
    this.name = name;
    this.diet = diet;
    this.weight = weight;
    this.hasBeenFed = false;
  }
}
