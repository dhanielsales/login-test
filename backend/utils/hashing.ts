import bcrypt from 'bcrypt';

export async function createHash(value: string): Promise<string> {
  return await bcrypt.hash(value, 12);
}

export async function compareHash(password: string, encryptedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, encryptedPassword);
}
