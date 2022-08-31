import User from './entities/user';

const testUser = new User();

testUser.subscribe('Netflix');

console.log(testUser.subscriptions);
