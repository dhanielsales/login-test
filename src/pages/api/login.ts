import databaseConnection from '../../../backend/middleware/databaseConnection';
import { Handler } from '../../../backend/model/http';
import { User } from '../../../backend/model/user';
import { authenticationJwt } from '../../../backend/utils/auth';
import { compareHash } from '../../../backend/utils/hashing';

const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

const Login: Handler = async (request, response) => {
  if (request.method === 'POST') {
    try {
      const { email, password } = request.body;

      const mongoClient = request.db;

      const database = mongoClient.db(MONGODB_DATABASE_NAME);

      const userCollection = database.collection('users');

      const user = await userCollection.findOne<User>({ email });

      if (user) {
        const passwordVerification = await compareHash(password, user.password);
        if (passwordVerification) {
          const token = authenticationJwt(user._id);
          return response.status(200).send({
            token,
            user: {
              id: user._id,
              email: user.email,
            },
          });
        }
      }

      return response.status(401).end();
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

export default databaseConnection(['POST'])(Login);
