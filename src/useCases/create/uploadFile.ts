import { Request, Response } from "express";

function uploadFile(request: Request, response: Response) {
  interface PropsUpload {
    path: string;
  }

  try {
    const { path } = <PropsUpload>request.file;

    response.status(201).json(path)

  } catch (err) {
    response.sendStatus(500);
  }
}

export default uploadFile;