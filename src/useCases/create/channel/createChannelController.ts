import { Request, Response } from 'express'
import { Channel } from '../../../interfaces';
import { decodeId } from '../../../utils';
import { createChannel } from './createChannel';
import { randomUUID as uuid } from 'crypto';

export async function createChannelController(request: Request, response: Response) {
  try {
    const result = await decodeId(request.headers.authorization);

    const { description, name } = request.body;

    if (result instanceof Error)
      return response.sendStatus(401);

    const channel: Channel = {
      _id: uuid(),
      name,
      user_id: result.user_id,
      description,
    }

    const createdChannel = await createChannel(channel);

    response.status(201).json(createdChannel);

  } catch (error) {
    response.sendStatus(400);
  }
}