import Place from '../models/Place';
import PlaceService from './PlaceService';
import axios, { AxiosInstance } from "axios";

class GeoNamesService implements PlaceService {

  private _instance: AxiosInstance;
  private _username: string;

  constructor() {
    this._instance = axios.create({
      baseURL: "http://api.geonames.org/",
    });
    this._username = "f7villani";
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
