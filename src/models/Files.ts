import { Schema, model, Types } from 'mongoose';
import { FilesDoc } from '../interfaces';

const Files = new Schema<FilesDoc>({
  name: {
    type: String,
    required: false,
  },
  file_src: {
    type: String,
    required: true,
  },
  id_channel: {
    type: Types.ObjectId,
    required: false,
  },
  id_user: {
    type: Types.ObjectId,
    required: false,
  }
}, { timestamps: true })

model('files', Files);