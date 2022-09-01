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
    // filtering shows by year
    const showsFilteredByYear = this.#shows.filter(
      show => show.releaseDate.getFullYear() === year
    );

    // filtering Map by year
    const showsName = showsFilteredByYear.map(show => show.name);
    const viewsByShowNamesFiltered = new Map();
    this.viewsByShowNames.forEach((value, key) => {
      if (showsName.includes(key)) {
        viewsByShowNamesFiltered.set(key, value);
      }
    });

    // sorting Map in descending order by value (views)
    if (viewsByShowNamesFiltered.size !== 0) {
      const sortMap = new Map(
        [...viewsByShowNamesFiltered.entries()].sort((a, b) => b[1] - a[1])
      );

      const resultShows = [];
      const sortedShowNames = this.#getMapKeys(sortMap);

      for (let i = 0; i < showsFilteredByYear.length; i++) {
        if (sortedShowNames.includes(showsFilteredByYear[i].name)) {
          resultShows.push(showsFilteredByYear[i]);
        }
      }

      if (resultShows.length > 10) {
        resultShows = resultShows.slice(0, 10);
        return resultShows;
      }
      return resultShows;
    } else {
      console.log('There is no shows released in this year');
    }
  }

  getMostViewedShowsOfGenre(genre) {
    //TODO
  }

  #getMapKeys(map) {
    const keys = [];
    for (let showName of map.keys()) {
      keys.push(showName);
    }

    if (keys.length > 10) {
      keys = keys.slice(0, 10);
    }

    return keys;
  }
}
