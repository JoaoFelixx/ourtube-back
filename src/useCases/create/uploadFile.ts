import { Request, Response } from "express";
import { FilesService } from "../../services";

async function uploadFile(request: Request, response: Response) {
  interface PropsUpload {
    path: string;
  }

  try {
    const { path } = <PropsUpload>request.file;
    
    const file = {
      file_src: path,
      id_user: request.body.id_user
    }

    const result = await FilesService.create(file);

    response.status(201).json(result)

  } catch (err) {
    response.sendStatus(500);
  }
}

export default uploadFile;