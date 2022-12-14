import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

interface DbItem {
  TableName: string;
  Item: object
}

export class DynamoIntegration {
  private db: DocumentClient;

  constructor() {
    this.db = new DynamoDB.DocumentClient({
      convertEmptyValues: true,
      apiVersion: '2012-08-10'
    })
  }

  async add(item: DbItem){
    return this.db.put(item).promise();
  }
}
