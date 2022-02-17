export class Animal {
  species: string;
  name: string;
  diet: string;
  weight: number;
  hasBeenFed: boolean;
  constructor(species: string, name: string, diet: string, weight: number) {
    this.species = species;
    this.name = name;
    this.diet = diet;
    this.weight = weight;
    this.hasBeenFed = false;
  }
}
