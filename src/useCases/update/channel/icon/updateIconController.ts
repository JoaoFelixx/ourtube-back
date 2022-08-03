import { Request, Response } from 'express'
import { Photo } from '../../../../interfaces';
import { updateIcon } from './updateIcon';
import { randomUUID as uuid } from 'crypto';

export async function updateIconController(request: Request, response: Response) {
  try {
    const { path } = request.file as { path: string };
    const { channel_id } = request.params;

    const photo: Photo = {
      _id: uuid(),
      path,
      channel_id,
    }

    const result = await updateIcon(photo);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.status(202).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}