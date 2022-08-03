import './User';
import './Videos';
import './Channel';
import './Enrolled';
import { model } from 'mongoose';
import {
  User,
  Video,
  Channel,
  EnrolledProps,
} from '../interfaces';

const Users = model<User>('users');
const Videos = model<Video>('videos');
const Channels = model<Channel>('channels');
const Enrolled = model<EnrolledProps>('enrolled');

export { Users, Videos, Channels, Enrolled };