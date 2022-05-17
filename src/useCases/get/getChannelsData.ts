import { Request, Response } from 'express';
import { ChannelsRepository } from '../../repositories';

async function getChannelsData(request: Request, response: Response) {
  try {
    const result = await ChannelsRepository.getAllChannels();

    if (!result.length)
      return response.sendStatus(204);

    response.json(result);

  } catch (err) {
    response.sendStatus(409);
  }
}

export default getChannelsData;