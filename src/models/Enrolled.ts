import { Schema, model, Types } from 'mongoose';
import { EnrolledProps } from '../interfaces';

const Enrolled = new Schema<EnrolledProps>({
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
}, { timestamps: true })

model('enrolled', Enrolled);