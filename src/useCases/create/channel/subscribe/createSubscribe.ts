import { EnrolledProps } from '../../../../interfaces';
import { Enrolled, Channels } from '../../../../models';

export async function createSubscribe(subscribe: EnrolledProps): Promise<Error | EnrolledProps> {
  try {
    const channel = await Channels.findOne({ user_id: subscribe.user_id });

    if (!channel) {
      const result = await Enrolled.create<EnrolledProps>(subscribe);

      return result;
    }

    if (channel._id === subscribe.channel_id)
      return new Error('Error, Cannot subscribe to the channel itself');

    const result = await Enrolled.create<EnrolledProps>(subscribe);

    return result;

  } catch (error) {
    return new Error('Error subscribing');
  }
}