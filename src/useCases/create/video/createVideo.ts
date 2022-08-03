import { Videos } from "../../../models";
import { Video } from "../../../interfaces";

export async function createVideo(video: Video): Promise<Video | Error> {
  try {
    const result = await Videos.create<Video>(video)

    return result;
  } catch (error) {
    return new Error('Error uploading video');
  }
}