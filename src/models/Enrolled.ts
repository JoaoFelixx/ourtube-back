import { Schema, model, Types } from 'mongoose';

const Enrolled = new Schema({
  id_user: {
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  },
  id_channel: {
    type: Types.ObjectId,
    required: true,
    ref: 'channels'
  }
}, { timestamps: true })

model('enrolled', Enrolled);