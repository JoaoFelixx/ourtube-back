import { Request, Response } from "express";
import { createReadStream } from 'fs';
import { VideoService } from "../../services";

async function getFile(request: Request, response: Response) {
  try {
    const result = await VideoService.getVideoById(request.params.id);

    if (!result?.video_src)
      return response.sendStatus(204);

    createReadStream(result?.video_src)
      .pipe(response)

  } catch (err) {
    return response.sendStatus(409)
  }
}

export default getFile;