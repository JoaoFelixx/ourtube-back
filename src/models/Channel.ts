import { Schema, model } from "mongoose";
import { Channel, SchemaExtends } from "../interfaces";

const Channels = new Schema<Channel>({
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
  banner_src: {
    type: String,
    required: false,
  },
  icon_src: {
    type: String,
    required: false,
  },
  user_id: {
    type: String,
    required: true,
    ref: 'users'
  }
}, { timestamps: true, strictPopulate: false } as SchemaExtends)

model<Channel>('channels', Channels);