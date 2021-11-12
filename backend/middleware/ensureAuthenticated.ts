import { Handler, Request, RequestMethods, Response } from '../model/http';
import { verificationJwt } from '../utils/auth';

export default (methods: RequestMethods) => {
  return (fn: Handler) => async (req: Request, res: Response): Promise<void> => {
    if (methods.includes(req.method)) {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(400).json({
          error: {
            message: 'Bad Request',
            detail: 'Missing JWT token.',
          },
        });
      }

      const [, token] = authHeader.split(' ');

      const { userId, authenticated } = verificationJwt(token);

      if (!authenticated) {
        return res.status(400).json({
          error: {
            message: 'Unauthorazed',
            detail: 'Invalid JWT token.',
          },
        });
      }

      req.user = {
        _id: userId,
      };

      await fn(req, res);
    } else {
      await fn(req, res);
    }
  };
};
