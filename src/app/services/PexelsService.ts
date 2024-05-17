import axios, { AxiosInstance } from "axios";
import IPhotoService from "./interfaces/IPhotoService";


class PexelsService implements IPhotoService{
  
  private _apiKey : string = process.env.NEXT_PUBLIC_PEXELS_APIKEY;
  private _baseUrl : string = "https://api.pexels.com/v1/search";
  private _instance : AxiosInstance;

  constructor(){
    this._instance = axios.create({
      headers: { Authorization: this._apiKey },
      baseURL: this._baseUrl,
    });
  }

  async getUrlPhotoByText(text: string): Promise<string> {

    let response = await this._instance.get('/',
      {
        params: {
          query: text,
          orientation: 'landscape',
          size: 'medium'
        }
      }
    );

    if(response.status === 200){
      const urlPhoto = response.data.photos[0].src.landscape;
      return urlPhoto;
    }
    else{
      return '';
    }
  }
}

export default PexelsService;