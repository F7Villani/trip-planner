import { Dayjs } from "dayjs"

class TripDate {
  public departureDay: Dayjs;
  public leaveDay: Dayjs;

  public isEmpty(){
    return this.departureDay == null && this.leaveDay == null;
  }

  public toString(){
    let format = "DD/MM/YYYY";
    return `${this.departureDay.format(format)} até ${this.leaveDay.format(format)}`
  }

}

export default TripDate;