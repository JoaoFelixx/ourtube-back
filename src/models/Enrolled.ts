import { Schema, model } from 'mongoose';
import { EnrolledProps, SchemaExtends } from '../interfaces';

const Enrolled = new Schema<EnrolledProps>({
  _id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true,
    ref: 'users'
  },
  channel_id: {
    type: String,
    required: true,
    ref: 'channels'
  }
}, { timestamps: true, strictPopulate: false } as SchemaExtends)

model<EnrolledProps>('enrolled', Enrolled);