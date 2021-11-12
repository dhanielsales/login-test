import { sign, verify } from 'jsonwebtoken';

import authConfig from '../config/auth.config';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

interface VerificationJwtResponse {
  userId?: string;
  authenticated: boolean;
}

export function authenticationJwt(userId: string): string {
  const { secret, expiresIn } = authConfig.jwt;

  const token = sign({}, secret, {
    subject: String(userId),
    expiresIn,
  });

  return token;
}

export function verificationJwt(token: string): VerificationJwtResponse {
  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);
    const { sub } = decoded as TokenPayload;

    return {
      authenticated: true,
      userId: sub,
    };
  } catch (err) {
    const errorData: VerificationJwtResponse = {
      authenticated: false,
    };

    return errorData;
  }
}
