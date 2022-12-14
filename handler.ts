import { SQSEvent } from 'aws-lambda';
import { Tweet } from './src/interfaces';
import { TweetService } from './src/services/tweet.service';

const tweetService = new TweetService();

export const processor = async (event: SQSEvent): Promise<void> => {
  const tweets: Tweet[] = event.Records.map(item => JSON.parse(item.body));

  const tweetPromises = tweets.map(tweet => tweetService.handleTweetEvent(tweet));

  await Promise.all(tweetPromises);
};
