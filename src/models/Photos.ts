import { Schema, Types, model } from 'mongoose';
import { PhotosProps, SchemaExtends } from '../interfaces';

const Photos = new Schema({
  path: {
    type: String,
    required: true,
  },
  channel_id: {
    type: Types.ObjectId,
    required: true,
    ref: 'channels'
  },
  
}, { timestamps: true, strictPopulate: false  } as SchemaExtends);

model<PhotosProps>('photos', Photos);