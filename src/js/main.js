import User from './entities/user';
import StreamingService from './entities/streaming-service';

const testStreamingService = new StreamingService('Netflix', [
  'DED PULL',
  'Jack Sparrow',
]);

// console.log(testStreamingService);

const testUser = new User();

testUser.subscribe(testStreamingService);

testUser.subscriptions[0].watch('Jack Sparrow');
testUser.subscriptions[0].watch('Jack Sparrow');
testUser.subscriptions[0].watch('Jack Sparrow');

console.log(testStreamingService.viewsByShowNames);
