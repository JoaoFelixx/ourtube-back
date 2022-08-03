import { Request, Response } from 'express'
import { updateIcon } from './updateIcon';

export async function updateIconController(request: Request, response: Response) {
  try {
    const { filename } = request.file as { filename: string };
    const { channel_id } = request.params;

    const icon_src = process.env.URL_STATIC_MEDIAS + filename;

    const result = await updateIcon({ _id: channel_id, icon_src });

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.status(202).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}