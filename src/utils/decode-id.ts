import jwt from 'jsonwebtoken';

export const decodeId = async (authorization: string | undefined): Promise<string | Error> => {
  try {
    if (!authorization)
      throw new Error()

    const token = authorization.replace('Bearer', '').trim();

    const { id } = await jwt.decode(token) as { id: string };

    return id;

  } catch (error) {
    return new Error('Unauthorized');
  }
}