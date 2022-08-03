import { Request, Response } from 'express'
import { Channel } from '../../../interfaces';
import { decodeId } from '../../../utils';
import { createChannel } from './createChannel';
import { randomUUID as uuid } from 'crypto';

export async function createChannelController(request: Request, response: Response) {
  try {
    const user_id = await decodeId(request.headers.authorization);

    const { description, name } = request.body;

    if (user_id instanceof Error)
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