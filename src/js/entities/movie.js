import Show from './show';

export default class Movie extends Show {
  constructor({ name, genre, releaseDate, duration }) {
    super();
    this.name = name;
    this.genre[name] = genre;
    this.releaseDate = releaseDate;
    this.duration = duration;
  }

  getDuration() {
    return this.duration;
  }
}
