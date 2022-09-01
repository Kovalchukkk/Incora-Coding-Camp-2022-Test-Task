import Show from './show';

export default class Series extends Show {
  // private attribute
  #episodes = [];

  constructor({ name, genre, releaseDate }) {
    super();
    this.name = name;
    this.genre[name] = genre;
    this.releaseDate = releaseDate;
  }

  setEpisodes(episodes) {
    this.#episodes = [...episodes];
  }

  // getter for private attribute #episodes
  get episodes() {
    return this.#episodes;
  }

  getDuration() {
    this.duration = this.#calculateDuration();
    return this.duration;
  }

  #calculateDuration() {
    const duration = this.#episodes.reduce((prev, episode) => {
      return prev + episode.duration;
    }, 0);
    return duration;
  }
}
