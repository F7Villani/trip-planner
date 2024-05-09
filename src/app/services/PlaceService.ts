import Place from "../models/Place";

interface PlaceService {

  getPlacesByText(text: string) : Promise<Array<Place>>;
}

export default PlaceService;