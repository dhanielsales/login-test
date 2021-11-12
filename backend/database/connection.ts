import { MongoClient } from 'mongodb';

import dbConfig from '../config/db.config';
import { Db } from '../model/db';

let connection;

export const getDatabaseConnector = () => {
  return async (): Promise<Db> => {
    if (!dbConfig) {
      throw new Error(`Failed to get configuration for env:${process.env.NODE_ENV}`);
    }

    const client = new MongoClient(dbConfig.url, dbConfig.options);
    connection = await client.connect();
    return connection;
  };
};
