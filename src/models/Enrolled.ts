import { Schema, model, Types } from 'mongoose';

const Enrolled = new Schema({
  id_user: {
    type: Types.ObjectId,
    required: true,
  },
  id_channel: {
    type: Types.ObjectId,
    required: true,
  }
}, { timestamps: true })

model('enrolled', Enrolled);