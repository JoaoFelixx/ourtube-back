import { Request, Response } from 'express'
import { randomUUID as uuid } from 'crypto';
import { PhotosProps } from '../../interfaces';
import { ChannelsRepository, PhotoRepository } from '../../repositories';

async function updateChannelBanner(request: Request, response: Response) {
  try {
    const { path } = request.file as { path: string };
    const { channel_id } = request.params;

    const photo: PhotosProps = {
      _id: uuid(),
      path,
      channel_id,
    }

    const { id: banner_id } = await PhotoRepository.create(photo);

    const result = await ChannelsRepository.updateIconAndPhoto({ banner_id, channel_id });

    if (result instanceof Error) 
      return response.status(400).json(result.message);
      
    return response.status(202).json(result);

  } catch (error) {
    response.sendStatus(409);
  }
}

export default updateChannelBanner;