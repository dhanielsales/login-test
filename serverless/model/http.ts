import { NextApiRequest, NextApiResponse } from 'next';

import { Db } from './db';
export interface Request extends NextApiRequest {
  db?: Db;
  method: Methods;
}

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type RequestMethods = Methods[];

export type Response = NextApiResponse;

export type Handler = (req: Request, res: Response) => Promise<void>;
