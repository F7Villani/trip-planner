import Weather from "../../models/Weather";

interface IWeatherService {

  getHistoricalWeatherByPeriod(latitude: number, longitude: number, startDate: Date, endDate: Date) : Promise<Weather[]>;

  getHistoricalWeatherByPeriodAndYears(latitude: number, longitude: number, startDate: Date, endDate: Date, yearsAgo: number) : Promise<Weather[][]>;

}

export default IWeatherService;