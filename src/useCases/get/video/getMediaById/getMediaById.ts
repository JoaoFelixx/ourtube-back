import { client } from "../../../../db-redis";
import { Photo, Video } from "../../../../interfaces";
import { Photos, Videos } from "../../../../models";

type Result = Video | Photo | null;

export async function getMediaById(_id: string): Promise<Result | Error> {
  try {
    const result = await client.get(_id);

    if (result) {
      const media: Result = JSON.parse(result);
      return media;
    }

    const media = await Promise.any([
      Photos.findById<Photo>(_id),
      Videos.findById<Video>(_id),
    ])

    return media

  } catch (error) {
    return new Error('Error getting media');
  }
}