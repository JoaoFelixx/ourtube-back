import { Request, Response } from 'express';
import { getAllChannels } from './getAllChannels';

export async function getAllChannelsController(request: Request, response: Response) {
  try {
    const result = await getAllChannels();

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.json(result);

  } catch (err) {
    response.sendStatus(400);
  }
}