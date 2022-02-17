import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal } from '../modules/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalStorageService {
  private animalList: Animal[] = [];
  animalList$: Observable<Animal[]> = of(this.animalList);

  private hasBeenFedList: number[] = [];

  constructor() {}

  addAnimal(newAnimalFromUser: Animal) {
    this.animalList.push(newAnimalFromUser);
  }

  hasBeenFedData(i: number) {
    this.hasBeenFedList.push(i);
  }
}
