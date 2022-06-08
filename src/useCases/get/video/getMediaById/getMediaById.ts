import { Photo, Video } from "../../../../interfaces";
import { Photos, Videos } from "../../../../models";

interface Result {
  photo: Photo | null;
  video: Video | null;
}

export async function getMediaById(id: string): Promise<Result | Error> {
  try {
    const [photo, video] = await Promise.all([
      Photos.findById(id),
      Videos.findById(id),
    ])

    return { photo, video }

  } catch (error) {
    return new Error('Error getting media');
  }
}