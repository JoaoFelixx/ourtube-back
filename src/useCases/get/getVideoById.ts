import { Request, Response } from "express";
import { createReadStream } from 'fs';
import { VideosService } from "../../services";

async function getFile(request: Request, response: Response) {
  try {
    const result = await VideosService.getVideoById(request.params.id);

    if (!result?.video_src)
      return response.sendStatus(204);

    createReadStream(result?.video_src)
      .pipe(response)

  } catch (err) {
    return response.sendStatus(409)
  }
}

export default getFile;