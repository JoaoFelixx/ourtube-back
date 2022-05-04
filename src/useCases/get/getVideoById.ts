import { Request, Response } from "express";
import { createReadStream } from 'fs';
import { VideoService, PhotoService } from "../../services";

async function getFile(request: Request, response: Response) {
  try {
    const [video, photo] = await Promise.all([
      VideoService.getVideoById(request.params.id),
      PhotoService.getPhotoById(request.params.id)
    ])

    if (video?.video_src) 
      return createReadStream(video?.video_src).pipe(response);
      
    if (photo?.path) 
      return createReadStream(photo?.path).pipe(response);
    
    response.sendStatus(204);

  } catch (err) {
    return response.sendStatus(409)
  }
}

export default getFile;