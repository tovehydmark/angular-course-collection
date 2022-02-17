import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/modules/Animal';
import { AnimalStorageService } from 'src/app/services/animal-storage.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss'],
})
export class AddAnimalComponent implements OnInit {
  newAnimalFromUser: Animal = new Animal('', '', '', 0);

  constructor(private service: AnimalStorageService) {}

  ngOnInit(): void {}

  saveAnimal(species: string, name: string, diet: string, weight: number) {
    this.newAnimalFromUser = new Animal(species, name, diet, weight);
    this.service.addAnimal(this.newAnimalFromUser);
  }
}
