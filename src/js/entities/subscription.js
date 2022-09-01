export default class Subscription {
  // private attribute
  #streamingService;

  constructor(streamingService) {
    this.#streamingService = streamingService;
  }

  // getter for private attribute #streamingService
  get streamingService() {
    return this.#streamingService;
  }

  watch(showName) {
    if (this.#streamingService.shows.find(show => show.name === showName)) {
      let views = 0;
      if (this.#streamingService.viewsByShowNames.get(showName) !== undefined) {
        views = this.#streamingService.viewsByShowNames.get(showName) + 1;
        this.#streamingService.viewsByShowNames.set(showName, views);
        return;
      }
      this.#streamingService.viewsByShowNames.set(showName, 1);
    } else {
      console.log(
        `Can't find '${showName}' in streaming service ${
          this.#streamingService.name
        }`
      );
    }
  }

  getRecommendationTrending() {
    const randomNumber = Math.floor(Math.random() * 10);
    const shows = this.#streamingService.getMostViewedShowsOfYear(2022);

    if (shows[randomNumber] !== undefined) {
      return shows[randomNumber];
    }
    return 'There are no shows right now!';
  }

  getRecommendationByGenre(genre) {
    const randomNumber = Math.floor(Math.random() * 10);
    const shows = this.#streamingService.getMostViewedShowsOfGenre(genre);

    if (shows[randomNumber] !== undefined) {
      return shows[randomNumber];
    }
    return 'There are no shows right now!';
  }
}
