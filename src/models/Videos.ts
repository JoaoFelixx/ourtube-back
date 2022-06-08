import { Schema, model } from 'mongoose';
import { Video, SchemaExtends } from '../interfaces';

const Videos = new Schema({
  _id: {
    type: String,
    required: true
  },
  video_src: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  photo_id: {
    type: String,
    required: true,
    ref: 'photos',
  },
  description: {
    type: String,
    required: true,
  },
  channel_id: {
    type: String,
    required: false,
    ref: 'channels'
  },
}, { timestamps: true, strictPopulate: false } as SchemaExtends);

model<Video>('videos', Videos);