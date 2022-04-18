import { Request, Response } from "express";
import { createReadStream } from 'fs';
import { FilesService } from "../../services";

async function getFile(request: Request, response: Response) {
  try {
    const result = await FilesService.get(request.params.id);

    if (!result?.file_src)
      return response.sendStatus(204);

    createReadStream(result?.file_src)
      .pipe(response)

  } catch (err) {
    return response.sendStatus(204)
  }
}

export default getFile;