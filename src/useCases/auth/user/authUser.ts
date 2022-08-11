import { Users, Channels } from '../../../models';
import { Channel, User } from '../../../interfaces';

type Result = [User, Channel | null];

export async function authUser(email: string): Promise<Error | Result> {
  try {
    const user = await Users.findOne({ email });

    if (!user)
      return new Error('User does not registered');

    const channel = await Channels.findOne({ user_id: user.id });

    return [user, channel];

  } catch (error) {
    return new Error('Error creating logging');
  }
}