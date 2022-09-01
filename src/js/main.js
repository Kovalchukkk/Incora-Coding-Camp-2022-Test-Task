import User from './entities/user';
import StreamingService from './entities/streaming-service';
import Movie from './entities/movie';
import Series from './entities/series';
import Episode from './entities/episode';

const testMovie = new Movie({
  name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
  genre: 'fantasy',
  releaseDate: new Date('July 9, 2003'),
  duration: 143,
});

const testSeries = new Series({
  name: 'Rick and Morty',
  genre: 'science fiction sitcom',
  releaseDate: new Date('December 2, 2013'),
});

const episodeFirst = new Episode({
  name: 'Pilot',
  releaseDate: new Date('December 2, 2013'),
  duration: 15,
});

const episodeSecond = new Episode({
  name: 'Lawnmower Dog',
  releaseDate: new Date('December 9, 2013'),
  duration: 17,
});

const episodeThird = new Episode({
  name: 'Anatomy Park',
  releaseDate: new Date('December 16, 2013'),
  duration: 13,
});

const episodes = [episodeFirst, episodeSecond, episodeThird];

testSeries.setEpisodes(episodes);

// console.log(testSeries.getDuration()); // 45

const testStreamingService = new StreamingService('Netflix');

testStreamingService.addShow(testMovie);
testStreamingService.addShow(testSeries);

const testUser = new User();

testUser.subscribe(testStreamingService);

testUser.subscriptions[0].watch(testMovie.name);
testUser.subscriptions[0].watch(testMovie.name);
testUser.subscriptions[0].watch(testMovie.name);
testUser.subscriptions[0].watch('Very interesting show');
testUser.subscriptions[0].watch(testSeries.name);

console.log(testStreamingService.viewsByShowNames);
console.log(testStreamingService.shows);

console.log(testStreamingService.getMostViewedShowsOfYear(2003)); // [Movie]
console.log(
  testStreamingService.getMostViewedShowsOfGenre('science fiction sitcom')
); // [Series]
