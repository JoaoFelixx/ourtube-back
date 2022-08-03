import { Request, Response } from 'express';
import { decodeId } from '../../../../utils';
import { getChannelById } from './getChannelByUserId';

export async function getChannelByUserIdController(request: Request, response: Response) {
  try {
    const company_id = await decodeId(request.headers.authorization);

    if (company_id instanceof Error)
      return response.sendStatus(401);

    const result = await getChannelById(company_id);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    if (!result)
      return response.sendStatus(204);

    response.json(result);

  } catch (error) {
    response.sendStatus(400);
  }
}