import { User } from '~/../backend/model/user';

import { client } from '../client';

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: User;
}

export async function signIn(data: SignInParams): Promise<SignInResponse> {
  try {
    const response = await client.post<SignInResponse>('/api/login', data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
}
