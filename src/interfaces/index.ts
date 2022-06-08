import { SchemaOptions } from 'mongoose';

interface User {
  _id: string;
  email: string;
  password: string;
}

interface Photo {
  _id: string;
  path: string;
  channel_id: string;
}

interface Channel {
  _id?: string;
  name: string;
  description: string;
  banner_id?: string;
  icon_id?: string;
  user_id: string;
}

interface EnrolledProps {
  _id: string;
  user_id: string;
  channel_id: string;
}

interface Video {
  _id: string;
  video_src: string;
  photo_id: string;
  mimetype: string;
  channel_id: string;
  description: string;
}

interface SchemaExtends extends SchemaOptions {
  strictPopulate: boolean;
}

export type {
  User,
  Photo,
  Video,
  Channel,
  EnrolledProps,
  SchemaExtends,
}