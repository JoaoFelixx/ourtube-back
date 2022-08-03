import { Channels } from "../../../../models";
import { Channel } from "../../../../interfaces";
import { client } from '../../../../db-redis';

export async function getChannelByUserId(user_id: string): Promise<Error | Channel | null> {
  try {
    const result = await client.get(user_id);

    if (result) {
      const channel: Channel = JSON.parse(result);
      return channel;
    }

    const channel = await Channels.findOne<Channel>({ user_id });

    if (channel)
      await client.set(user_id, JSON.stringify(channel));

    return channel;

  } catch (error) {
    return new Error('Error getting channel');
  }
}