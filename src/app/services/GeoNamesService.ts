import Place from '../models/Place';
import IPlaceService from './interfaces/IPlaceService';
import axios, { AxiosInstance } from "axios";

class GeoNamesService implements IPlaceService {

  private _instance: AxiosInstance;
  private _username: string = process.env.NEXT_PUBLIC_GEONAMES_USERNAME;
  private _baseUrl: string = "http://api.geonames.org/";

  constructor() {
    this._instance = axios.create({
      baseURL: this._baseUrl,
    });
  }

  async getPlacesByText(text: string){
    let path = `searchJSON?q=${text}&maxRows=20&lang=pt-BR&featureClass=P&username=${this._username}`;

    let response = await this._instance.get(path);

    if (response.status === 200) {
      let places = [
        ...response.data.geonames.map((e) => {
          return new Place(e.name, e.countryName);
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

export default GeoNamesService;
