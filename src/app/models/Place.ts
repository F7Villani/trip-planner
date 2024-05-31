class Place {

  public city: string;
  public country: string;
  public urlPhoto: string;
  public latitude: number;
  public longitude: number;

  public isEmpty() : boolean{
    return !(this.city && this.country && this.urlPhoto && this.latitude && this.longitude);
  }

  public toString() : string {
    return this.city + ', ' + this.country;
  }

  public static fromJson(json: string) : Place{
    const data = JSON.parse(json);
    let place = new Place();
    place.city = data.city;
    place.country = data.country;
    place.urlPhoto = data.urlPhoto;
    place.latitude = data.latitude;
    place.longitude = data.longitude;
    return place;  
  }
}

export default Place;