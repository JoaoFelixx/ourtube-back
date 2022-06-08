import { Channel } from "../../../../interfaces";
import { Channels } from "../../../../models";

export async function getChannelById(_id: string): Promise<Channel | Error | null> {
  try {
    const channel = await Channels.findById<Channel>(_id);

    return channel;

  } catch (error) {
    return new Error('Error getting channel')
  }
}