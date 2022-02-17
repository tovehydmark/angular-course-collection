import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal } from '../modules/Animal';
import { hasBeenFedClass } from '../modules/HasBeenFedClass';

@Injectable({
  providedIn: 'root',
})
export class AnimalStorageService {
  private animalList: Animal[] = [];
  animalList$: Observable<Animal[]> = of(this.animalList);

  private hasBeenFedTotal: hasBeenFedClass = new hasBeenFedClass(0);
  hasBeenFedTotal$: Observable<hasBeenFedClass> = of(this.hasBeenFedTotal);

  constructor() {}

  addAnimal(newAnimalFromUser: Animal) {
    this.animalList.push(newAnimalFromUser);
    console.log(this.animalList);
  }

  hasBeenFedData(numberOfFedAnimals: number) {
    this.hasBeenFedTotal.fed = numberOfFedAnimals;

    console.log(this.hasBeenFedTotal);
  }
}
