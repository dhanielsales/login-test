import databaseConnection from '../../../backend/middleware/databaseConnection';
import { Handler } from '../../../backend/model/http';
import { createHash } from '../../../backend/utils/hashing';

const SECRET_KEY = process.env.SECRET_KEY;
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

const CreateUser: Handler = async (request, response) => {
  if (request.method === 'POST') {
    try {
      const { email, password, token } = request.body;

      if (token !== SECRET_KEY) {
        return response.status(401).end();
      }

      const mongoClient = request.db;

      const database = mongoClient.db(MONGODB_DATABASE_NAME);

      const userCollection = database.collection('users');

      const hashedPassword = await createHash(password);

      await userCollection.insertOne({ email, password: hashedPassword });

      return response.status(201).end();
    } catch (err) {
      return response.status(500).send({
        error: {
          message: 'Internal server error',
          // details: err?.message,
        },
      });
    }
  } else {
    return response.status(404).end();
  }
};

export default databaseConnection(['POST'])(CreateUser);
