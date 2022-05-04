import { Schema, model } from "mongoose";
import { UserProps } from '../interfaces';

const User = new Schema({
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

model<UserProps>('users', User);