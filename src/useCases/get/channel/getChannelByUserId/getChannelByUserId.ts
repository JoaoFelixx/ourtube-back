import { Channels } from "../../../../models";
import { Channel } from "../../../../interfaces";

export async function getChannelByUserId(user_id: string): Promise<Error | Channel | null> {
  try {
    const channel = await Channels.findOne<Channel>({ user_id });

    return channel;

  } catch (error) {
    return new Error('Error getting channel');
  }
}