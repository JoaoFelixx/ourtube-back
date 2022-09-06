import { EnrolledProps } from '../../../../interfaces';
import { Enrolled, Channels } from '../../../../models';

export async function createSubscribe({ _id, channel_id, user_id }: EnrolledProps): Promise<Error | EnrolledProps> {
  try {
    const [channel, isAlreadySubscribed] = await Promise.all([
      Channels.findOne({ user_id }),
      Enrolled.findOne<EnrolledProps>({ channel_id, user_id })
    ])

    if (isAlreadySubscribed)
      return new Error('User is already subscribed at channel');

    if (!channel) {
      const result = await Enrolled.create<EnrolledProps>({ _id, channel_id, user_id });

      return result;
    }

    if (channel._id === channel_id)
      return new Error('Error, Cannot subscribe to the channel itself');

    const result = await Enrolled.create<EnrolledProps>({ _id, channel_id, user_id });

    return result;

  } catch (error) {
    return new Error('Error subscribing');
  }
}