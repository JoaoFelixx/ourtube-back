import { Request, Response } from 'express';
import { getAllVideos } from './getAllVideos';

export async function getAllVideosController(request: Request, response: Response) {
  try {
    const result = await getAllVideos();

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.json(result)

  } catch (err) {
    response.sendStatus(400)
  }
}