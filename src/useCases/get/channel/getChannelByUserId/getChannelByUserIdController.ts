import { Request, Response } from 'express';
import { decodeId } from '../../../../utils';
import { getChannelByUserId } from './getChannelByUserId';

export async function getChannelByUserIdController(request: Request, response: Response) {
  try {
    const user_id = decodeId(request.headers.authorization);

    if (!user_id)
      return response.sendStatus(401);

    const result = await getChannelByUserId(user_id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}