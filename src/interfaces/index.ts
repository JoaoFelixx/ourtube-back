import { Document, Types } from 'mongoose';

interface UserProps {
  email: string;
  password: string;
}

interface UserDoc extends Document {
  email: string;
  password: string;
}

interface ChannelProps {
  name: string;
  description: string;
  banner_id: string;
  cover_id: string;
  id_user: string;
}

interface EnrolledProps {
  id_user: string;
  id_channel: string;
}

interface VideosProps {
  video_src: string;
  preview_src: string;
  mimetype: string;
  id_channel?: Types.ObjectId;
}

interface VideosDoc extends Document {
  video_src: string;
  view_src: string;
  mimetype: string;
  id_channel: string;
}

export {
  UserDoc,
  VideosDoc,
  UserProps,
  VideosProps,
  ChannelProps,
  EnrolledProps,
}