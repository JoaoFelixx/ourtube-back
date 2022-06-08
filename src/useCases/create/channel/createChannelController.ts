import { Request, Response } from 'express'
import { decodeId } from '../../../utils';
import { Channel } from '../../../interfaces';
import { createChannel} from './createChannel';
import { randomUUID as uuid } from 'crypto';

export async function createChannelController(request: Request, response: Response) {
  try {
    const user_id = decodeId(request.headers.authorization);

    const { description, name } = request.body;

    if (!user_id)
      return response.sendStatus(401);

    const channel: Channel = {
      _id: uuid(),
      name,
      user_id,
      description,
    }

    const result = await createChannel(channel);

    response.status(201).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}