import StreamingService from './streaming-service';

export default class Subscription {
  // private attribute
  #streamingService;

  constructor(streamingService) {
    this.#streamingService = streamingService;
  }

  watch(showName) {
    console.log(`Watching ${showName}! `);

    let views = 0;
    if (this.#streamingService.viewsByShowNames.get(showName) !== undefined) {
      views = this.#streamingService.viewsByShowNames.get(showName) + 1;
      this.#streamingService.viewsByShowNames.set(showName, views);
      return;
    }
    this.#streamingService.viewsByShowNames.set(showName, 1);
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
