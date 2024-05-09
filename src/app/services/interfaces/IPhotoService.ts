interface IPhotoService {

  getUrlPhotoByText(text: string): Promise<string>;

}

export default IPhotoService;