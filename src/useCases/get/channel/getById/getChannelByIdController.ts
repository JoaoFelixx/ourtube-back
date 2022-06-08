import { Request, Response } from 'express';
import { getChannelById } from './getChannelById';

export async function getChannelByIdController(request: Request, response: Response) {
  try {
    const { id } = request.params as { id: string };

    const result = await getChannelById(id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}