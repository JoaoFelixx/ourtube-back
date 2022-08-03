import { Request, Response } from 'express'
import { Photo } from '../../../../interfaces';
import { updateBanner } from './updateBanner';
import { randomUUID as uuid } from 'crypto';

export async function updateBannerController(request: Request, response: Response) {
  try {
    const { path } = request.file as { path: string };
    const { channel_id } = request.params;

    const banner: Photo = {
      _id: uuid(),
      path,
      channel_id,
    }

    const result = await updateBanner(banner);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.status(202).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}