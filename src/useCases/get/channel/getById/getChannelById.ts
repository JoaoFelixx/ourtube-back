import { Enrolled, Channels } from "../../../../models";
import { Channel, EnrolledProps } from "../../../../interfaces";

interface ChannelAndEnrolled extends Channel {
  enrolled: EnrolledProps[];
}

interface ChannelOptions {
  toObject: () => Channel;
}

export async function getChannelById(_id: string): Promise<ChannelAndEnrolled | Error | null> {
  try {
    const channel = await Channels.findOne<Channel & ChannelOptions>({ _id });

    if (!channel)
      return new Error('Channel does not exists');

    const enrolled = await Enrolled.find<EnrolledProps>({ channel_id: _id })

    const channelWithEnrolled: ChannelAndEnrolled = {
      ...channel.toObject(),
      enrolled: [...enrolled]
    }

    return channelWithEnrolled;

  } catch (error) {
    return new Error('Error getting channel');
  }
}