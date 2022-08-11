import { EnrolledProps } from '../../../../interfaces';
import { Enrolled, } from '../../../../models';

export async function getUserSubscribedChannels(user_id: string): Promise<EnrolledProps[]> {
  const result = await Enrolled.find<EnrolledProps>({ user_id });

  return result;
}