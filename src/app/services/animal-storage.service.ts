import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal } from '../modules/Animal';
import { hasBeenFedClass } from '../modules/HasBeenFedClass';

@Injectable({
  providedIn: 'root',
})
export class AnimalStorageService {
  private animalList: Animal[] = [
    new Animal('Horse', 'Biztro', 'Hay', 240),
    new Animal('Rabbit', 'Skutte', 'Pellets', 2),
    new Animal('Dog', 'Frankie', 'Chicken and rice', 3),
    new Animal('Human', 'Esteban', 'Carrots', 80),
  ];
  animalList$: Observable<Animal[]> = of(this.animalList);

  private hasBeenFedTotal: hasBeenFedClass = new hasBeenFedClass(0);
  hasBeenFedTotal$: Observable<hasBeenFedClass> = of(this.hasBeenFedTotal);

  constructor() {}

  addAnimal(newAnimalFromUser: Animal) {
    this.animalList.push(newAnimalFromUser);
  }

  hasBeenFedData(numberOfFedAnimals: number) {
    this.hasBeenFedTotal.fed = numberOfFedAnimals;
  }
}
