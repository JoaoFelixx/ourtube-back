import { Request, Response } from 'express'
import ChannelsService from '../../services/ChannelsService';

async function createChannel(request: Request, response: Response) {
  try {
    const result = await ChannelsService.create(request.body);

    response.status(201).json(result)

  } catch (error) {
    response.sendStatus(409);
  }
}

export default createChannel;