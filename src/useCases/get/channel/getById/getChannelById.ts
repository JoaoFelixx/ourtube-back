import { Channels } from "../../../../models";
import { Channel } from "../../../../interfaces";
import { client } from '../../../../db-redis';

export async function getChannelById(_id: string): Promise<Channel | Error | null> {
  try {
    const result = await client.get(_id);

    if (result) {
      const channel: Channel = JSON.parse(result);
      
      return channel;
    }

    const channel = await Channels.findById<Channel>(_id);

    if (channel)
      await client.set(_id, JSON.stringify(channel));

    return channel;

  } catch (error) {
    return new Error('Error getting channel')
  }
}