import { Schema, model, Types } from 'mongoose';

const Banner = new Schema({
  file_src: {
    type: String,
    required: true,
  },
  id_channel: {
    type: Types.ObjectId,
    required: false,
    ref: 'channels'
  },
}, { timestamps: true });

model('banners', Banner);