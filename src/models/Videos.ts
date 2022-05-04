import { Schema, model } from 'mongoose';
import { VideosProps, SchemaExtends } from '../interfaces';

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
  channel_id: {
    type: String,
    required: false,
    ref: 'channels'
  },
}, { timestamps: true, strictPopulate: false } as SchemaExtends);

model<VideosProps>('videos', Videos);