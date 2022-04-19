import { Schema, Types, model } from 'mongoose';

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
  id_channel: {
    type: Types.ObjectId,
    required: false,
    ref: 'channels'
  },
}, { timestamps: true });

model('videos', Videos);