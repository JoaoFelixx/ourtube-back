import { Channel } from '../../../../interfaces';
import { Channels } from '../../../../models';

export async function getChannelByName(name: string): Promise<Channel[] | Error> {
  try {
    return await Channels.find<Channel>({ name: { $regex: name, $options: 'i' } })
      .limit(5);

  } catch (error) {
    return new Error('Error getting channel by name')
  }
}