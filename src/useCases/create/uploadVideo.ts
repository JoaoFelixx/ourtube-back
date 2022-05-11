import { Request, Response } from "express";
import { VideoService, PhotoService } from "../../services";
import { VideosProps, PhotosProps } from '../../interfaces';
import { randomUUID as uuid } from "crypto";

async function uploadVideo(request: Request, response: Response) {
  try {

    if (!Array.isArray(request.files))
      return response.sendStatus(400).json('Send Video and/or preview');

    const [photo] = request.files.filter(({ mimetype }) => mimetype.indexOf('image') === 0);
    const [video] = request.files.filter(({ mimetype }) => mimetype.indexOf('video') === 0);

    if (!photo || !video)
      return response.status(400).json('Send video and preview photo');

    const photo_id = uuid();

    const photoForUpload: PhotosProps = {
      _id: photo_id,
      path: photo.path,
      channel_id: request.body.channel_id,
    }

    const videoForUpload: VideosProps = {
      _id: uuid(),
      photo_id,
      mimetype: video.mimetype,
      video_src: video.path,
      channel_id: request.body.channel_id,
      description: request.body.description
    }

    const [photoResult, videoResult] = await Promise.all([
      PhotoService.create(photoForUpload),
      VideoService.create(videoForUpload),
    ])

    const result = {
      video: videoResult,
      preview: photoResult,
    }

    response.status(201).json(result);

  } catch (err) {
    response.sendStatus(409);
  }
}

export default uploadVideo;