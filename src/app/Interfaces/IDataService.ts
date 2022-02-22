import { IWeather } from './IWeather';
import { IWeatherCurrent } from './IWeatherCurrent';

export interface IDataService {
  location: IWeather;
  current: IWeatherCurrent;
}
