import { Request, Response } from 'express';
import { ChannelsService } from '../../services';

async function getChannelById(request: Request, response: Response) {
  try {
    const result = await ChannelsService.getChannelById(request.params.id);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(409);
  } 
}

export default getChannelById;