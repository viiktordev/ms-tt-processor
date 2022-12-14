export interface TweetEvent {
  tweetId: string;
  referencedTweetId: string;
  authorId: string;
  imgUrl: string;
}

export interface Tweet {
  id: string;
  tweetId: string;
  referencedTweetId: string;
  authorId: string;
  imgUrl: string;
  created_at: string;
  updated_at: string;
}
