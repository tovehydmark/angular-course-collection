import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal } from '../modules/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalStorageService {
  private animalList: Animal[] = [];
  animalList$: Observable<Animal[]> = of(this.animalList);

  constructor() {}

  addAnimal(newAnimalFromUser: Animal) {
    this.animalList.push(newAnimalFromUser);
  }
}
