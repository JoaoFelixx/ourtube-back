import '../models/User';
import { model } from 'mongoose';
import { UserProps } from '../interfaces';

const Users = model('users');

class UserService {
  static async create(user: UserProps) {
    return await Users.create(user);
  }
}

export default UserService;