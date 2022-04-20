import { Schema, model, Types } from "mongoose";
import { ChannelProps } from "../interfaces";

const Channel = new Schema<ChannelProps>({
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
    ref: 'banners'
  },
  icon_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'icon'
  },
  user_id: {
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  }
}, { timestamps: true })

model('channels', Channel);