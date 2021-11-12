import { getDatabaseConnector } from '../database/connection';
import { Handler, Request, RequestMethods, Response } from '../model/http';

const connector = getDatabaseConnector();

export default (methods: RequestMethods) => {
  return (fn: Handler) => async (req: Request, res: Response): Promise<void> => {
    if (methods.includes(req.method)) {
      req.db = await connector();
      await fn(req, res);
      await req.db.close();
    } else {
      await fn(req, res);
    }
  };
};
