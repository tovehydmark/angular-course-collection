import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalsComponent } from './components/animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    AnimalComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
