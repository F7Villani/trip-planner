import Place from '../models/Place';
import IPlaceService from './interfaces/IPlaceService';
import axios, { AxiosInstance } from "axios";

class WeatherService implements IPlaceService {

  private _instance: AxiosInstance;
  private _apiKey: string;
  private _baseUrl: string = "http://api.weatherapi.com/v1";

  constructor() {
    this._instance = axios.create({
      baseURL: this._baseUrl,
      headers: { Authorization: this._apiKey },
    });
    this._apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
  }

  async getPlacesByText(text: string){
    let path = `search.json?q=${text}&key=${this._apiKey}`;

    let response = await this._instance.get(path);

    if (response.status === 200) {
      let places = [
        ...response.data.map((e) => {
          return new Place(e.name, e.country, null, e.lat, e.lon);
        }),
      ];

      places = places.filter((value, index) => places.indexOf(value) === index);

      places = places.slice(0,5);

      return places;
    } else {
      return [];
    }
  }
}

export default WeatherService;
