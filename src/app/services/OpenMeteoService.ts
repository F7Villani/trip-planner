import Place from '../models/Place';
import IPlaceService from './interfaces/IPlaceService';
import axios, { AxiosInstance } from "axios";
import IWeatherService from './interfaces/IWeatherService';
import Weather from '../models/Weather';
import dayjs from 'dayjs';

class OpenMeteoService implements IPlaceService, IWeatherService {

  private _geoInstance: AxiosInstance;
  private _weatherInstance: AxiosInstance;
  private _geoBaseUrl: string = "https://geocoding-api.open-meteo.com/v1/";
  private _weatherBaseUrl: string = "https://archive-api.open-meteo.com/v1/";

  private _dailyVariables = ['temperature_2m_max','temperature_2m_min','temperature_2m_mean','precipitation_sum'];

  constructor() {
    this._geoInstance = axios.create({
      baseURL: this._geoBaseUrl,
    });
    this._weatherInstance = axios.create({
      baseURL: this._weatherBaseUrl,
    });
  }
  
  async getHistoricalWeatherByPeriod(latitude: number, longitude: number, startDate: Date, endDate: Date): Promise<Weather[]> {
    
    let formattedStartDate = dayjs(startDate).format("YYYY-MM-DD");
    let formattedEndDate = dayjs(endDate).format("YYYY-MM-DD");

    let dailyVariables = this._dailyVariables.concat(',')

    let path = `archive?latitude=${latitude}&longitude=${longitude}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&daily=${dailyVariables}`;
    
    let response = await this._weatherInstance.get(path);
    if(response.status === 200){
      let weathers = response.data.daily.time.map((day, index) => {
        let variables = response.data.daily;
        let weather = new Weather();
        
        weather.date = day;
        weather.maxTemperature = variables.temperature_2m_max[index];
        weather.minTemperature = variables.temperature_2m_min[index];
        weather.meanTemperature = variables.temperature_2m_mean[index];
        weather.preciptition = variables.precipitation_sum[index];

        return weather;
      });

      return weathers;
    }
    else {
      return [];
    }
  }

  async getHistoricalWeatherByPeriodAndYears(latitude: number, longitude: number, startDate: Date, endDate: Date, yearsAgo: number): Promise<Weather[][]> {

    let response : Weather[][] = [];

    for (let i = 1; i <= yearsAgo; i++) {
      let startDateYearsAgo = dayjs(startDate).subtract(i, 'year').toDate();
      let endDateYearsAgo = dayjs(endDate).subtract(i, 'year').toDate();

      let weatherYearsAgo = await this.getHistoricalWeatherByPeriod(latitude, longitude, startDateYearsAgo, endDateYearsAgo);

      response.push(weatherYearsAgo);
      
    }

    return response;
  }

  async getPlacesByText(text: string){

    let path = `search?name=${text}`;

    let response = await this._geoInstance.get(path);

    if (response.status === 200) {
      let places = response.data.results.map((e) => {
          let place = new Place();
          place.city = e.name;
          place.country = e.country;
          place.latitude = e.latitude;
          place.longitude = e.longitude;
          return place;
        })
      ;

      places = places.filter((value, index) => places.indexOf(value) === index);

      places = places.slice(0,5);

      return places;
    } else {
      return [];
    }
  }
}

export default OpenMeteoService;
