import { Request, Response } from "express";
import { getVideoByDescription } from "./getVideosByDescription";

export async function getVideoByDescriptionController(request: Request, response: Response) {
  try {
    const { description } = request.params as { description: string };

    const result = await getVideoByDescription(description)

    if (result instanceof Error)
      return response.status(400).json(result.message);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(400)
  }
}