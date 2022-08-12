import { SchemaOptions } from 'mongoose';

interface User {
  _id: string;
  email: string;
  password: string;
}

interface Payload {
  user_id: string;
  channel_id?: string;
}

interface Channel {
  _id?: string;
  name: string;
  user_id: string;
  icon_src?: string;
  banner_src?: string;
  description: string;
}

interface EnrolledProps {
  _id: string;
  user_id: string;
  channel_id: string;
}

interface Video {
  _id: string;
  mimetype: string;
  video_src: string;
  channel_id: string;
  preview_src: string;
  description: string;
}

interface SchemaExtends extends SchemaOptions {
  strictPopulate: boolean;
}

export type {
  User,
  Video,
  Channel,
  Payload,
  EnrolledProps,
  SchemaExtends,
}