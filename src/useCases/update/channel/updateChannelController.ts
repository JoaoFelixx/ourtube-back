import { Request, Response } from 'express';
import { Channel } from '../../../interfaces';
import { decodeId } from '../../../utils';
import { updateChannel } from './updateChannel';

export async function updateChannelController(request: Request, response: Response) {
  try {
    const payload = await decodeId(request.headers.authorization); 

    if (payload instanceof Error)
      return response.sendStatus(401);
    
    const channel: Partial<Channel> = Object.assign(request.body, request.params);

    if (channel.user_id !==  payload.user_id)
      return response.sendStatus(405);

    const result = await updateChannel(channel);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(202).json(result);

  } catch (error) {
    return response.sendStatus(400);
  }
}