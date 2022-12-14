import { Tweet, TweetEvent } from "../interfaces";
import { TweetRepository } from "../repositories";

export class TweetService {
  private tweetRepository: TweetRepository;

  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async handleTweetEvent(tweet: TweetEvent): Promise<Tweet> {
    return this.tweetRepository.create(tweet);
  }
}
