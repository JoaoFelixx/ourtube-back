import { Enrolled, } from '../../../../models';
import { EnrolledProps } from '../../../../interfaces';

export async function getUserSubscribedChannels(user_id: string): Promise<EnrolledProps[]> {
  const result = await Enrolled.find<EnrolledProps>({ user_id })
    .populate('channel_id');

  return result;
}