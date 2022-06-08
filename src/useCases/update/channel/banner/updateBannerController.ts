import { Request, Response } from 'express'
import { randomUUID as uuid } from 'crypto';
import { Photo } from '../../../../interfaces';
import { updateBanner } from './updateBanner';

export async function updateBannerController(request: Request, response: Response) {
  try {
    const { path } = request.file as { path: string };
    const { channel_id } = request.params;

    const photo: Photo = {
      _id: uuid(),
      path,
      channel_id,
    }

    const result = await updateBanner(photo);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.status(202).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}