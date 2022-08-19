import { Enrolled, Channels } from "../../../../models";
import { Channel, EnrolledProps } from "../../../../interfaces";
//import { client } from '../../../../db-redis';

interface ChannelAndEnrolled extends Channel {
  enrolled: EnrolledProps[];
}

interface ChannelOptions {
  toObject: () => Channel;
}

export async function getChannelById(_id: string): Promise<ChannelAndEnrolled | Error | null> {
  try {
    /* const result = await client.get(_id);

    if (result) {
      const channel: Channel = JSON.parse(result);
      
      return channel;
    }*/

    const channel = await Channels.findOne<Channel & ChannelOptions>({ _id });

    if (!channel)
      return new Error('Channel does not exists');

    const enrolled = await Enrolled.find<EnrolledProps>({ channel_id: _id })

    const channelWithEnrolled: ChannelAndEnrolled = {
      ...channel.toObject(),
      enrolled: [...enrolled]
    }

    /* if (channel)
      await client.set(_id, JSON.stringify(channel)); */

    return channelWithEnrolled;

  } catch (error) {
    return new Error('Error getting channel');
  }
}