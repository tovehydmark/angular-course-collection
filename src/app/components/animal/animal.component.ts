import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/modules/Animal';
import { AnimalStorageService } from 'src/app/services/animal-storage.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  animalList: Animal[] = [];
  numberOfFedAnimals: number = 0;

  constructor(private service: AnimalStorageService) {}

  ngOnInit(): void {
    this.service.animalList$.subscribe((animalData: Animal[]) => {
      this.animalList = animalData;
    });
  }

  hasBeenFed() {
    this.numberOfFedAnimals++;
    this.service.hasBeenFedData(this.numberOfFedAnimals);
  }

  removeAnimalFunction(i: number) {
    this.service.removeAnimal(i);
  }
}
