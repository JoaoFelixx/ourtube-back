import { Users } from '../../../models';
import { User } from '../../../interfaces';

export async function authUser(email: string): Promise<Error | User> {
  try {
    const user = await Users.findOne({ email });

    if (!user)
      return new Error('User does not registered');

    return user;

  } catch (error) {
    return new Error('Error creating logging');
  }
}
