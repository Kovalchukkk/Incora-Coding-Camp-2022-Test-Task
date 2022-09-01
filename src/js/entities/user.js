import Subscription from './subscription';

export default class User {
  // private attribute
  #subscriptions = [];

  subscribe(streamingService) {
    if (
      this.#subscriptions.find(
        subscription =>
          subscription.streamingService.name === streamingService.name
      )
    ) {
      return `You have already subscribed to ${streamingService.name}`;
    }
    const subscription = new Subscription(streamingService);
    this.#subscriptions.push(subscription);
    return subscription;
  }

  // getter for private attribute #subscriptions
  get subscriptions() {
    return this.#subscriptions;
  }
}
