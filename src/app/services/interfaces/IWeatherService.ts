import Weather from "../../models/Weather";

interface IWeatherService {

  getHistoricalWeatherByGeo(latitude: number, longitude: number, startDate: Date, endDate: Date, yearsAgo: number) : Promise<Weather[]>;

}

export default IWeatherService;