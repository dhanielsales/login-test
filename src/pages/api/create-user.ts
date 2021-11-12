import databaseConnection from '../../../serverless/middleware/databaseConnection';
import { Handler } from '../../../serverless/model/http';
import { createHash } from '../../../serverless/utils/hashing';

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

      return response.status(200).send({ email, password, token, SECRET_KEY });
    } catch (err) {
      return response.status(500).send({
        error: {
          message: 'Internal server error',
          details: err?.message,
        },
      });
    }
  }
};

export default databaseConnection(['POST'])(CreateUser);
