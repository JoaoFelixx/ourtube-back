import { Channels } from "../../../../models";
import { Channel } from "../../../../interfaces";

export async function getChannelById(channel_id: string): Promise<Error | Channel | null> {
  try {
    const channel = await Channels.findOne<Channel>({ id: channel_id });

    return channel;

  } catch (error) {
    return new Error('Error getting channel');
  }
}