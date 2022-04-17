import { Request, Response } from "express";

function getFile(request: Request, response: Response) {
  try {

    
  } catch (err) {
    return response.sendStatus(204)
  }
}

export default getFile;