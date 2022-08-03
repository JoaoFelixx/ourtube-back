import { Request, Response } from "express";
import { createReadStream } from 'fs';
import { getMediaById } from "./getMediaById";

export async function getMediaByIdController(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const result = await getMediaById(id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    if (!result)
      return response.sendStatus(204);

    if ('path' in result)
      return await createReadStream(result.path).pipe(response);

    await createReadStream(result.video_src).pipe(response);

  } catch (err) {
    return response.sendStatus(400)
  }
}