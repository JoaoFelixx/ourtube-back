import { Request, Response } from 'express';
import { decodeId } from '../../utils';
import { ChannelsRepository } from '../../repositories';

export async function getChannelByUserId(request: Request, response: Response) {
  try {

    const user_id = decodeId(request.headers.authorization);

    if (!user_id)
      return response.sendStatus(401);

    const result = await ChannelsRepository.getChannelByUserId(user_id);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(409);
  } 
}