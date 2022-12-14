import { tweetTableName } from "../config";
import { DynamoIntegration } from "../integrations";
import { Tweet, TweetEvent } from "../interfaces";
import { v4 as uuid } from 'uuid';

export class TweetRepository {
  private db: DynamoIntegration;
  private table: string;

  constructor() {
    this.db = new DynamoIntegration();
    this.table = tweetTableName;
  }

  async create(tweet: TweetEvent): Promise<Tweet> {
    const now = new Date().toISOString();

    const newTweet = {
      id: uuid(),
      ...tweet,
      created_at: now,
      updated_at: now,
    };

    await this.db.add({
      TableName: this.table,
      Item: newTweet,
    });

    return newTweet;
  }
}
