import { Schema, Types, model } from 'mongoose';
import { VideosProps, SchemaExtends } from '../interfaces';

const Videos = new Schema({
  video_src: {
    type: String,
    required: true,
  },
  preview_src: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  channel_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'channels'
  },
}, { timestamps: true, strictPopulate: false } as SchemaExtends);

model<VideosProps>('videos', Videos);