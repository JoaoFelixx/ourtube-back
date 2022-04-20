import { Request, Response } from 'express';
import { VideosService } from '../../services';

async function getAllVideos(request: Request, response: Response) {
  try {
    const result = await VideosService.getAllVideos();

    if (!result.length)
      return response.sendStatus(204);

    return response.json(result)

  } catch (err) {
    response.sendStatus(409)
  }
}

export default getAllVideos;