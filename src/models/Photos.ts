import { Schema, Types, model } from 'mongoose';
import { PhotosProps } from '../interfaces';

const Photos = new Schema<PhotosProps>({
  path: {
    type: String,
    required: true,
  },
  channel_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'channels'
  },
  
}, { timestamps: true });

model('photos', Photos);