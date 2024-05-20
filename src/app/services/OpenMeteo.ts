import Place from '../models/Place';
import IPlaceService from './interfaces/IPlaceService';
import axios, { AxiosInstance } from "axios";

class OpenMeteo implements IPlaceService {

  private _instance: AxiosInstance;
  private _baseUrl: string = "https://geocoding-api.open-meteo.com/v1";

  constructor() {
    this._instance = axios.create({
      baseURL: this._baseUrl,
    });
  }

  async getPlacesByText(text: string){
    let path = `search?name=${text}`;

    let response = await this._instance.get(path);

    if (response.status === 200) {
      let places = [
        ...response.data.results.map((e) => {
          return new Place(e.name, e.country, null, e.latitude, e.longitude);
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

export default OpenMeteo;
