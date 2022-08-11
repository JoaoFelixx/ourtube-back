import jwt from 'jsonwebtoken';
import { Payload } from '../interfaces';
import { promisify } from 'util';

export const decodeId = async (authorization: string | undefined): Promise<Payload | Error> => {
  try {
    if (!authorization)
      throw new Error()

    const token = authorization.replace('Bearer', '').trim();

    const result = await promisify(jwt.decode)(token, {}) as Payload;

    return result;

  } catch (error) {
    return new Error('Unauthorized');
  }
}