import { Video } from "../../../../interfaces";
import { Videos } from "../../../../models";

const REQUIRED_DATA = '_id description mimetype photo_id channel_id createdAt updatedAt';

export async function getVideoByDescription(description: string): Promise<Error | Video[]> {
  try {
    return await Videos.find<Video>({ description: { $regex: description, $options: 'i' } })
      .select(REQUIRED_DATA)
      .limit(5);

  } catch (error) {
    return new Error('Error getting video by description')
  }
}