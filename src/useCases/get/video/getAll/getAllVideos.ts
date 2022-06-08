import { Video } from "../../../../interfaces";
import { Videos } from "../../../../models";

const REQUIRED_DATA = '_id description mimetype photo_id channel_id createdAt updatedAt';

export async function getAllVideos(): Promise<Error | Video[]> {
  try {
    const allVideos = await Videos.find()
      .select(REQUIRED_DATA)
      .populate('channel_id');

    return allVideos;

  } catch (error) {
    return new Error('Error getting video')
  }
}