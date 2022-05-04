import 'dotenv/config'
import jwt from 'jsonwebtoken';

export const decodeId = (authorization: string | undefined): string | void => {
  if (!authorization) return

  const token = authorization.replace('Bearer', '').trim();

  const { id } = jwt.decode(token) as { id: string };

  return id;
}