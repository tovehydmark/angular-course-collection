import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/modules/Animal';
import { hasBeenFedClass } from 'src/app/modules/HasBeenFedClass';
import { AnimalStorageService } from 'src/app/services/animal-storage.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  animalList: Animal[] = [];
  hasBeenFedTotal: hasBeenFedClass = new hasBeenFedClass(2);

  constructor(private service: AnimalStorageService) {}

  ngOnInit(): void {
    this.service.animalList$.subscribe((animalData: Animal[]) => {
      this.animalList = animalData;
    });

    this.service.hasBeenFedTotal$.subscribe(
      (fedAnimalsData: hasBeenFedClass) => {
        this.hasBeenFedTotal = fedAnimalsData;
      }
    );
  }
}
