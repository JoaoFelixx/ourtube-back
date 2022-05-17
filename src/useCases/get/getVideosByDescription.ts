import { Request, Response } from "express";
import { VideoRepository } from "../../repositories";

export async function getVideoByDescription(request: Request, response: Response) {
  try {
    const { description } = request.params as { description: string };

    if (!description)
      return response.sendStatus(404);

    const result = await VideoRepository.searchVideoByDescription(description)

    if (!result?.length)
      return response.sendStatus(204);

    return response.json(result);

  } catch (error) {
    response.sendStatus(409)
  }
}