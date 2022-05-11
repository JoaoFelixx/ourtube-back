import { Request, Response } from 'express';
import { ChannelsService } from '../../services';
import { decodeId } from '../../utils';

export async function getMyChannel(request: Request, response: Response) {
  try {
    const user_id = decodeId(request.headers.authorization);

    if (user_id)
      return response.sendStatus(401);

    

  } catch (error) {
    response.sendStatus(409);
  } 
}