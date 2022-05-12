import { Request, Response } from 'express';
import { ChannelsService } from '../../services';

async function getChannelsData(request: Request, response: Response) {
  try {
    const result = await ChannelsService.getAllChannels();

    if (!result.length)
      return response.sendStatus(204);

    response.json(result);

  } catch (err) {
    response.sendStatus(409);
  }
}

export default getChannelsData;