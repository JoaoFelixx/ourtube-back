import { Schema, model, Types } from "mongoose";

const Channel = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  banner_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'files'
  },
  cover_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'files'
  },
  user_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'users'
  }
}, { timestamps: true })

model('channels', Channel);