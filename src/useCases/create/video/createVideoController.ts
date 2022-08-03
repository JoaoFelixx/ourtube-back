import { Request, Response } from "express";
import { Video } from '../../../interfaces';
import { createVideo } from './createVideo';
import { randomUUID as uuid } from "crypto";

export async function createVideoController(request: Request, response: Response) {
  try {
    if (!Array.isArray(request.files))
      return response.sendStatus(400).json('Send Video and/or preview');

    const [photo] = request.files.filter(({ mimetype }) => mimetype.indexOf('image') === 0);
    const [video] = request.files.filter(({ mimetype }) => mimetype.indexOf('video') === 0);

    if (!photo || !video)
      return response.status(400).json('Send video and preview photo');

    const videoForUpload: Video = {
      _id: uuid(),
      preview_src: process.env.URL_STATIC_MEDIAS + photo.filename,
      mimetype: video.mimetype,
      video_src: process.env.URL_STATIC_MEDIAS + video.filename,
      channel_id: request.body.channel_id,
      description: request.body.description
    }

    const result = await createVideo(videoForUpload);

    if (result instanceof Error)
      return response.status(400).json(result.message)

    response.status(201).json(result);

  } catch (err) {
    response.sendStatus(400);
  }
}