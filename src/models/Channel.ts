import { Schema, model } from "mongoose";
import { Channel, SchemaExtends } from "../interfaces";

const Channels = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  banner_id: {
    type: String,
    required: false,
    ref: 'photos'
  },
  icon_id: {
    type: String,
    required: false,
    ref: 'photos'
  },
  user_id: {
    type: String,
    required: true,
    ref: 'users'
  }
}, { timestamps: true, strictPopulate: false } as SchemaExtends)

model<Channel>('channels', Channels);