import { Document, Types } from 'mongoose';

interface UserProps {
  email: string;
  password: string;
}

interface PhotosProps {
  path: string;
  channel_id?: Types.ObjectId;
}

interface ChannelProps {
  name: string;
  description: string;
  banner_id?: Types.ObjectId;
  icon_id?: Types.ObjectId;
  user_id?: Types.ObjectId;
}

interface EnrolledProps {
  user_id?: Types.ObjectId;
  channel_id?: Types.ObjectId;
}

interface VideosProps {
  video_src: string;
  mimetype: string;
  preview_src: string;
  channel_id?: Types.ObjectId;
}

interface PhotosDoc extends Document{
  path: string;
  channel_id: Types.ObjectId;
}

interface ChannelDoc extends Document{
  name: string;
  description: string;
  banner_id?: Types.ObjectId;
  icon_id?: Types.ObjectId;
  user_id?: Types.ObjectId;
}

interface UserDoc extends Document {
  email: string;
  password: string;
}

interface VideosDoc extends Document {
  video_src: string;
  view_src: string;
  mimetype: string;
  channel_id?: Types.ObjectId;
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
}