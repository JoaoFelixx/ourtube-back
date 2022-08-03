import { Video } from "../../../../interfaces";
import { Videos } from "../../../../models";

export async function getAllVideos(): Promise<Error | Video[]> {
  try {
    const allVideos = await Videos.find()
      .populate('channel_id');

    return allVideos;

  } catch (error) {
    return new Error('Error getting video')
  }
}