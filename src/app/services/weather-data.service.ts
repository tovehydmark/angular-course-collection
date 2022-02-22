import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { weatherUrl } from 'src/environments/environment';
import { IDataService } from '../Interfaces/IDataService';
import { IWeather } from '../Interfaces/IWeather';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private weather = new Subject<IDataService>();
  weather$ = this.weather.asObservable();

  private locationOfWeather = new Subject<IDataService>();
  locationOfWeather$ = this.locationOfWeather.asObservable();

  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get<IDataService>(
        'http://api.weatherapi.com/v1/current.json?key=e70673cd2b084817b0c125713221802&q=London&aqi=no'
      )
      .subscribe((response: IDataService) => {
        this.weather.next(response);
        this.locationOfWeather.next(response);
      });
  }
}
