import { Schema, model, Types } from 'mongoose';
import { EnrolledProps, SchemaExtends } from '../interfaces';

const Enrolled = new Schema({
  user_id: {
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  },
  channel_id: {
    type: Types.ObjectId,
    required: true,
    ref: 'channels'
  }
}, { timestamps: true, strictPopulate: false  } as SchemaExtends)

model<EnrolledProps>('enrolled', Enrolled);