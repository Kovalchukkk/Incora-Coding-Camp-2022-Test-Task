export default class StreamingService {
  #name;
  #shows = [];
  // showName: views
  viewsByShowNames = new Map();

  constructor(name) {
    this.#name = name;
  }

  addShow(show) {
    this.#shows.push(show);
  }

  // getter for private attribute #name
  get name() {
    return this.#name;
  }

  // getter for private attribute #shows
  get shows() {
    return this.#shows;
  }

  getMostViewedShowsOfYear(year) {
    //TODO
  }

  getMostViewedShowsOfGenre(genre) {
    //TODO
  }
}
