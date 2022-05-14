import { Request, Response } from "express";
import { VideoService } from "../../services";

export async function getVideoByDescription(request: Request, response: Response) {
  try {
    const { description } = request.params as { description: string };

    if (!description)
      return response.sendStatus(404);

    const result = await VideoService.searchVideoByDescription(description)

    if (!result?.length)
      return response.sendStatus(204);

    return response.json(result);

  } catch (error) {
    response.sendStatus(409)
  }
}