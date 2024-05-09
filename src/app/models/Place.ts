class Place {

  public city: string;
  public country: string;
  public urlPhoto: string;

  constructor(
    city?: string,
    country?: string,
    urlPhoto?: string
  ){
    this.city = city;
    this.country = country;
    this.urlPhoto = urlPhoto;
  }

  public isEmpty() : boolean{
    return !(this.city && this.country && this.urlPhoto);
  }

}

export default Place;