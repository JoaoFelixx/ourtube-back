import { Request, Response } from 'express'
import { decodeId } from '../../utils';
import { ChannelProps } from '../../interfaces';
import { ChannelsService } from '../../services';

async function createChannel(request: Request, response: Response) {
  try {
    const user_id = decodeId(request.headers.authorization);
    const { description, name } = request.body;

    if (!user_id)
      return response.sendStatus(401);

    const channel: ChannelProps = {
      name,
      user_id,
      description,
    }

    const result = await ChannelsService.create(channel);

    response.status(201).json(result);

  } catch (error) {
    response.sendStatus(409);
  }
}

export default createChannel;