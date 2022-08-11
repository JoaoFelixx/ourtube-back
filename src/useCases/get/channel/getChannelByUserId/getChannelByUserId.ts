import { Channels } from "../../../../models";
import { Channel } from "../../../../interfaces";
import { client } from '../../../../db-redis';

export async function getChannelById(channel_id: string): Promise<Error | Channel | null> {
  try {
    const result = await client.get(channel_id);

    if (result) {
      const channel: Channel = JSON.parse(result);
      return channel;
    }

    const channel = await Channels.findOne<Channel>({ id: channel_id });

    if (channel)
      await client.set(channel_id, JSON.stringify(channel));

    return channel;

  } catch (error) {
    return new Error('Error getting channel');
  }
}