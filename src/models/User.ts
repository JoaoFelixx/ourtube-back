import { Schema, model } from "mongoose";
import { User } from '../interfaces';

const Users = new Schema({
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

model<User>('users', Users);