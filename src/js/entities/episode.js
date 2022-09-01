import Show from './show';

export default class Episode extends Show {
  constructor({ name, releaseDate, duration }) {
    super();
    this.name = name;
    this.releaseDate = releaseDate;
    this.duration = duration;
  }

  getDuration() {
    return this.duration;
  }
}
