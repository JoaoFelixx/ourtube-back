import { decodeId } from '../../../../utils';
import { EnrolledProps } from '../../../../interfaces';
import { createSubscribe } from './createSubscribe';
import { Request, Response } from 'express';
import { randomUUID as uuid } from 'crypto';

export async function createSubscribeController(request: Request, response: Response) {
  try {
    const IDs = await decodeId(request.headers.authorization);
    const { channel_id } = request.body;

    if (IDs instanceof Error) 
      return response.status(400).json(IDs.message);

    const { user_id } = IDs;

    const subscribe: EnrolledProps = {
      _id: uuid(),
      user_id,
      channel_id,
    }

    const result = await createSubscribe(subscribe);

    if (result instanceof Error) 
      return response.status(400).json(result.message);

    response.status(201).json(result);

  } catch (error) {
    response.status(400).json('Error subscribing');
  }
}