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

  constructor(private service: AnimalStorageService) {}

  ngOnInit(): void {
    this.service.animalList$.subscribe((animalData: Animal[]) => {
      this.animalList = animalData;
    });
  }
  hasBeenFed() {
    //Maybe make button unclickable after this
    console.log('Click on has been fed');
  }
}
