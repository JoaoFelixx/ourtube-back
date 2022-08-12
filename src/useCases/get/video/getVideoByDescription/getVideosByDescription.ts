import { Video } from "../../../../interfaces";
import { Videos } from "../../../../models";

export async function getVideoByDescription(description: string): Promise<Error | Video[]> {
  try {
    return await Videos.find<Video>({ description: { $regex: description, $options: 'i' } })
      .limit(5)
      .populate('channel_id');

  } catch (error) {
    return new Error('Error getting video by description')
  }
}