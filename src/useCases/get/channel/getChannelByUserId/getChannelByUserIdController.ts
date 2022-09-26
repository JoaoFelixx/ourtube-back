import { Request, Response } from 'express';
import { decodeId } from '../../../../utils';
import { getChannelByUserId } from './getChannelByUserId';

export async function getChannelByUserIdController(request: Request, response: Response) {
  try {
    const IDs = await decodeId(request.headers.authorization);

    if (IDs instanceof Error)
      return response.sendStatus(401);

    const { user_id } = IDs;

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