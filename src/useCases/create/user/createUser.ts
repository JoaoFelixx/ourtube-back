import { User } from "../../../interfaces";
import { Users } from "../../../models";

export async function createUser(user: User): Promise<Error | User> {
  const userIsAlreadyRegistered = await Users.findOne({ email: user.email });

  if (userIsAlreadyRegistered)
    return new Error('User is already registered');

  return await Users.create<User>(user);
}