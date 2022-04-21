import { Request, Response } from "express";
import { VideoService } from "../../services";
import { VideosProps } from '../../interfaces';

async function uploadVideo(request: Request, response: Response) {
  try {

    if (!Array.isArray(request.files))
      return response.sendStatus(400).json('Send Video and/or preview');

    const [photo] = request.files.filter(({ mimetype }) => !mimetype.indexOf('video'));
    const [video] = request.files.filter(({ mimetype }) => mimetype.indexOf('video') === 0);

    if (!photo || !video)
      return response.status(400).json('Send video and preview photo');

    const data: VideosProps = {
      mimetype: video.mimetype,
      video_src: video.path,
      preview_src: photo.path,
      channel_id: request.body.channel_id
    } 

    console.log(data);

    const result = await VideoService.create(data);

    response.status(201).json(result);

  } catch (err) {
    console.log(err)
    response.sendStatus(409);
  }
}

export default uploadVideo;