import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/modules/Animal';
import { AnimalStorageService } from 'src/app/services/animal-storage.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  animalList: Animal[] = [];

  constructor(private service: AnimalStorageService) {}

  ngOnInit(): void {
    this.service.animalList$.subscribe((animalData: Animal[]) => {
      this.animalList = animalData;
    });
  }

  amountOfFedAnimals: number = 0;
  //Ha en funktion som plussar på animals när man klickar på has been fed
}
