import { Request, Response } from 'express';
import { getChannelByName } from './getChannelByName';

export async function getChannelByNameController(request: Request, response: Response) {
  try {
    const { name } = request.params as { name: string };

    const result = await getChannelByName(name);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.json(result);

  } catch (error) {
    response.status(400).json('Error getting channels');
  }
}