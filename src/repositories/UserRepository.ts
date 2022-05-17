import '../models/User';
import { model } from 'mongoose';
import { UserDoc, UserProps } from '../interfaces';

const Users = model('users');

export class UserRepository {
  static async create(user: UserProps): Promise<Error | UserDoc> {
    const userIsAlreadyRegistered = await Users.findOne({ email: user.email }) as UserDoc;

    if (userIsAlreadyRegistered)
      return new Error('User is already registered');

    return await Users.create(user) as UserDoc;
  }

  static async auth(email: string): Promise<Error | UserDoc> {
    const user = await Users.findOne({ email }) as UserDoc;

    if (!user)
      return new Error('User does not registered');

    return user;
  }
}