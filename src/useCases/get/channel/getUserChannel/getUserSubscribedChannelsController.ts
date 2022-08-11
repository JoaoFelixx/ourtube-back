import { Request, Response } from 'express';
import { decodeId } from '../../../../utils';
import { getUserSubscribedChannels } from './getUserSubscribedChannels';

export async function getUserSubscribedChannelsController(request: Request, response: Response) {
  try {
    const IDs = await decodeId(request.headers.authorization);

    if (IDs instanceof Error) 
      return response.sendStatus(401);

    const { user_id } = IDs;

    const channels = await getUserSubscribedChannels(user_id);

    response.json(channels);

  } catch (error) {
    response.status(400).json('Error getting user data');
  }
}