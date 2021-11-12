import databaseConnection from '../../../serverless/middleware/databaseConnection';
import { Handler } from '../../../serverless/model/http';
import { compareHash } from '../../../serverless/utils/hashing';

const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

const Login: Handler = async (request, response) => {
  if (request.method === 'POST') {
    try {
      const { email, password } = request.body;

      const mongoClient = request.db;

      const database = mongoClient.db(MONGODB_DATABASE_NAME);

      const userCollection = database.collection('users');

      const user = await userCollection.findOne({ email });

      if (user) {
        const passwordVerification = await compareHash(password, user.password);
        if (passwordVerification) {
          return response.status(200).send({ token: '123', user });
        }
      }

      return response.status(401).end();
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

export default databaseConnection(['POST'])(Login);
