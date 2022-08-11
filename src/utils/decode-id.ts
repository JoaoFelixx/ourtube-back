import jwt from 'jsonwebtoken';
import { Payload } from '../interfaces';

export const decodeId = async (authorization: string | undefined): Promise<Payload | Error> => {
  try {
    if (!authorization)
      throw new Error()

    const token = authorization.replace('Bearer', '').trim();

    const result = await jwt.decode(token) as Payload;

    return result;

  } catch (error) {
    return new Error('Unauthorized');
  }
}