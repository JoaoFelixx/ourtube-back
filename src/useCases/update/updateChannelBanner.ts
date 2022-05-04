import { Request, Response } from 'express'
import { PhotosProps } from '../../interfaces';
import { ChannelsService, PhotoService } from '../../services';
import { randomUUID as uuid } from 'crypto';

async function updateChannelBanner(request: Request, response: Response) {
  try {
    const { path } = request.file as { path: string };
    const { channel_id } = request.params;

    const photo: PhotosProps = {
      _id: uuid(),
      path,
      channel_id,
    }

    const { id: banner_id } = await PhotoService.create(photo);

    const result = await ChannelsService.updateIconAndPhoto({ banner_id, channel_id });

    if (result instanceof Error) 
      return response.status(400).json(result.message);
      
    return response.status(202).json(result);

  } catch (error) {
    response.sendStatus(409);
  }
}

export default updateChannelBanner;