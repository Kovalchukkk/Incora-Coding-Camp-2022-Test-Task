export default class Subscription {
  // private attribute
  #streamingService;

  constructor(streamingService) {
    this.#streamingService = streamingService;
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
    //TODO
    // getMostViewedShowsOfYear();
  }

  getRecommendationByGenre(genre) {
    //TODO
    // getMostViewedShowsOfGenre();
  }
}
