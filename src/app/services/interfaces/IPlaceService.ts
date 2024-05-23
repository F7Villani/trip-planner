import Place from "../../models/Place";

interface IPlaceService {

  getPlacesByText(text: string) : Promise<Array<Place>>;
}

export default IPlaceService;