import multer, { diskStorage, FileFilterCallback } from "multer";
import { randomUUID as uuid } from 'crypto';
import { join, extname } from 'path';
import { Request } from "express";

export const fileFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
) => {
  try {
    const images = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
    const videos = ['video/mp4', 'video/mpeg', 'video/ogg'];

    const filesWithPermission = [...images, ...videos];

    if (!filesWithPermission.includes(file.mimetype))
      callback(null, false);

    callback(null, true);
  } catch (error) {
    return new Error()
  }
}

const storage = diskStorage({
  destination: function (req, file, cb) {
    try {
      const destiny = join(__dirname, '..', 'public', 'files');

      cb(null, destiny);
    } catch (err) {
      return new Error();
    }
  },

  filename: function (req, file, cb) {
    try {
      const uniqueSuffix = Date.now() + '-' + uuid();

      const filename = `${uniqueSuffix + extname(file.originalname.toString())}`;

      cb(null, filename);
    } catch (err) {
      return new Error();
    }
  }
});

export const middlewareMulter = multer({ storage, fileFilter });