import { Schema, Types, model } from 'mongoose';
import { VideosProps } from '../interfaces';

const Videos = new Schema<VideosProps>({
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
}, { timestamps: true });

model('videos', Videos);