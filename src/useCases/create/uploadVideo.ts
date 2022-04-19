import { Request, Response } from "express";
import {  } from "../../services";

async function uploadVideo(request: Request, response: Response) {
  interface PropsUpload {
    path: string;
    mimetype: string;
  }

  try {

    if (!Array.isArray(request.files))
      return response.sendStatus(400).json('Send Video and/or preview');

    const video = request.files.reduce<PropsUpload | Object>((acc, current) => {

      if (current.mimetype.indexOf('video') === 0) {
        acc = {
          ...acc,
          video_src: current.path,
          mimetype: current.mimetype,
        }

        return acc
      }

      acc = {
        ...acc,
        preview_src: current.path,
        id_channel: request.body.id_channel
      }

      return acc

    }, {});

    video // it's ready

    response.sendStatus(200)
  } catch (err) {
    response.sendStatus(409);
  }
}

export default uploadVideo;