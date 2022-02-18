import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalsComponent } from './components/animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    AnimalComponent,
    AnimalsComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
