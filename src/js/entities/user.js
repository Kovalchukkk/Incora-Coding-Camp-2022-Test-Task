import Subscription from './subscription';

export default class User {
  // private attribute
  #subscriptions = [];

  subscribe(streamingService) {
    const subscription = new Subscription(streamingService);
    this.#subscriptions.push(subscription);
    return subscription;
  }

  // getter for private attribute #subscriptions
  get subscriptions() {
    return this.#subscriptions;
  }
}
