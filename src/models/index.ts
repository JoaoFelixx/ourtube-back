import './User';
import './Photos';
import './Videos';
import './Channel';
import './Enrolled';
import { model } from 'mongoose';
import {
  User,
  Photo,
  Video,
  Channel,
  EnrolledProps,
} from '../interfaces';

const Users = model<User>('users');
const Photos = model<Photo>('photos');
const Videos = model<Video>('videos');
const Channels = model<Channel>('channels');
const Enrolled = model<EnrolledProps>('enrolled');

export { Users, Photos, Videos, Channels, Enrolled };