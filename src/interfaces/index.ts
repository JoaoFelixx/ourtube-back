import { Document, SchemaOptions } from 'mongoose';

interface UserProps {
  _id: string;
  email: string;
  password: string;
}

interface SchemaExtends extends SchemaOptions {
  strictPopulate: boolean;
}

interface PhotosProps {
  _id: string;
  path: string;
  channel_id: string;
}

interface ChannelProps {
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

interface VideosProps {
  _id: string;
  video_src: string;
  photo_id: string;
  mimetype: string;
  channel_id: string;
  description: string;
}

interface PhotosDoc extends Document {
  path: string;
  channel_id: string;
}

interface ChannelDoc extends Document {
  name: string;
  description: string;
  banner_id: string;
  icon_id: string;
  user_id: string;
}

interface UserDoc extends Document {
  email: string;
  password: string;
}

interface VideosDoc extends Document {
  video_src: string;
  mimetype: string;
  channel_id: string;
  description: string;
}

export {
  UserDoc,
  PhotosDoc,
  UserProps,
  VideosDoc,
  ChannelDoc,
  PhotosProps,
  VideosProps,
  ChannelProps,
  EnrolledProps,
  SchemaExtends,
}