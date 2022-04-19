import { Schema, Types, model } from 'mongoose';

const Icon = new Schema({
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

model('Icons', Icon);