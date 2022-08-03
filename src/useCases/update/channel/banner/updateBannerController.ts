import { Request, Response } from 'express'
import { updateBanner } from './updateBanner';

export async function updateBannerController(request: Request, response: Response) {
  try {
    const { filename } = request.file as { filename: string };
    const { channel_id } = request.params;

    const banner_src = process.env.URL_STATIC_MEDIAS + filename;

    const result = await updateBanner({ _id: channel_id, banner_src });

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.status(202).json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}