import { Document } from 'mongoose';

interface UserDoc extends Document {
  email: string;
  password: string;
}

interface ChannelDoc extends Document {
  name: string;
  description: string;
  banner_id: string;
  cover_id: string;
  id_user: string;
}

interface EnrolledDoc extends Document {
  id_user: string;
  id_channel: string;
}

interface FilesDoc extends Document {
  name?: string;
  file_src: string;
  id_channel?: string;
  id_user?: string;
}

interface UserProps {
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

interface FilesProps {
  name?: string;
  file_src: string;
  id_channel?: string;
  id_user?: string;
}

export {
  UserDoc,
  FilesDoc,
  UserProps,
  FilesProps,
  ChannelDoc,
  EnrolledDoc,
  ChannelProps,
  EnrolledProps,
}