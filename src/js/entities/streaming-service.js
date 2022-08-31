export default class StreamingService {
  #name;
  #shows = [];
  // showName: views
  viewsByShowNames = new Map();

  constructor(name, shows) {
    this.#name = name;
    this.#shows = [...shows];
  }
}
