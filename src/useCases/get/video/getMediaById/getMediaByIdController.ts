import { Request, Response } from "express";
import { createReadStream } from 'fs';
import { getMediaById } from "./getMediaById";

export async function getMediaByIdController(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const result = await getMediaById(id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    const { photo, video } = result;

    if (video?.video_src)
      return createReadStream(video?.video_src).pipe(response);

    if (photo?.path)
      return createReadStream(photo?.path).pipe(response);

    response.sendStatus(204);

  } catch (err) {
    return response.sendStatus(400)
  }
}