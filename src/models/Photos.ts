import { Schema, model } from 'mongoose';
import { PhotosProps, SchemaExtends } from '../interfaces';

const Photos = new Schema({
  _id: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true,
  },
  channel_id: {
    type: String,
    required: true,
    ref: 'channels'
  },

}, { timestamps: true, strictPopulate: false } as SchemaExtends);

model<PhotosProps>('photos', Photos);