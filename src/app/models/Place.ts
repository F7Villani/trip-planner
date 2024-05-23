class Place {

  public city: string;
  public country: string;
  public urlPhoto: string;
  public latitude: number;
  public longitude: number;

  constructor(
    city?: string,
    country?: string,
    urlPhoto?: string,
    latitude?: number,
    longitude?: number
  ){
    this.city = city;
    this.country = country;
    this.urlPhoto = urlPhoto;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public isEmpty() : boolean{
    return !(this.city && this.country && this.urlPhoto);
  }

  public toString() {
    return this.city + ', ' + this.country;
  }

}

export default Place;