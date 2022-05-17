import { Request, Response } from 'express';
import { ChannelsRepository } from '../../repositories';

export async function getChannelByName(request: Request, response: Response) {
  try {
    const { name } = request.params as { name: string };

    if (!name)
      return response.sendStatus(404);

    const result = await ChannelsRepository.searchChannelByName(name);

    if (!result.length)
      return response.sendStatus(202);

    response.json(result);

  } catch (error) {
    response.sendStatus(409);
  }
}