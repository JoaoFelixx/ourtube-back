import { Channels } from '../../../models';
import { Channel } from '../../../interfaces';

export async function updateChannel(channel: Partial<Channel>): Promise<Channel | Error> {
  try {
    const hasChannel = await Channels.findOne({ _id: channel._id });

    if (!hasChannel)
      return new Error('Channel does not exists');

    const channelUpdated = Object.assign(hasChannel, channel);

    await channelUpdated.save();

    return channelUpdated;

  } catch (error) {
    return new Error('Error updating channel');
  }
}