import { Component, OnInit } from '@angular/core';
import { IDataService } from 'src/app/Interfaces/IDataService';
import { IWeather } from 'src/app/Interfaces/IWeather';
import { IWeatherCurrent } from 'src/app/Interfaces/IWeatherCurrent';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  // myWeather: IWeather = { name: 'london' };
  weatherLocation: IWeather = {
    name: 'london',
    region: 'middlesex',
    country: 'uk',
  };
  theWeather: IWeatherCurrent = { temp_c: 0 };

  constructor(private service: WeatherDataService) {}

  ngOnInit(): void {
    this.service.weather$.subscribe((weatherLocationData: IDataService) => {
      this.weatherLocation = weatherLocationData.location;
    });
    this.service.locationOfWeather$.subscribe((weatherData: IDataService) => {
      this.theWeather = weatherData.current;
    });
    this.service.getData();
  }
}
