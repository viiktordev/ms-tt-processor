import { SQSEvent } from 'aws-lambda';

export const processor = async (event: SQSEvent): Promise<void> => {
  console.log(event);
};
