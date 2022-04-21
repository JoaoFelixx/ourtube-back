import { Schema, model, Types } from "mongoose";
import { ChannelProps, SchemaExtends } from "../interfaces";

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
    ref: 'photos'
  },
  icon_id: {
    type: Types.ObjectId,
    required: false,
    ref: 'photos'
  },
  user_id: {
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  }
}, { timestamps: true, strictPopulate: false } as SchemaExtends)

model<ChannelProps>('channels', Channel);