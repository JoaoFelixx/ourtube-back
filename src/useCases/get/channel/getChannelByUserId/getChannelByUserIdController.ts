import { Request, Response } from 'express';
import { decodeId } from '../../../../utils';
import { getChannelById } from './getChannelByUserId';

export async function getChannelByUserIdController(request: Request, response: Response) {
  try {
    const IDs = await decodeId(request.headers.authorization);

    if (IDs instanceof Error)
      return response.sendStatus(401);

    const { channel_id } = IDs;

    if (!channel_id)
      return response.sendStatus(204);

    const result = await getChannelById(channel_id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}