import User from './entities/user';
import StreamingService from './entities/streaming-service';
import Movie from './entities/movie';

const testMovie = new Movie({
  name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
  genre: 'fantasy',
  releaseDate: new Date('July 9, 2003'),
  duration: 143,
});

const testStreamingService = new StreamingService('Netflix');

testStreamingService.addShow(testMovie);

const testUser = new User();

testUser.subscribe(testStreamingService);

testUser.subscriptions[0].watch(testMovie.name);
testUser.subscriptions[0].watch(testMovie.name);
testUser.subscriptions[0].watch('Very interesting show');

console.log(testStreamingService.viewsByShowNames);
