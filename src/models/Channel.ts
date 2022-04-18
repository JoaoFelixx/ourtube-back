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
  },
  cover_id: {
    type: Types.ObjectId,
    required: false,
  },
  user_id: {
    type: Types.ObjectId,
    required: false
  }
}, { timestamps: true })

model('channels', Channel);