import multer, { diskStorage } from "multer";
import { join, extname } from 'path';
import { randomUUID as uuid } from 'crypto';

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

      cb(null, filename)

    } catch (err) {
      return new Error();
    }
  },
});

export const middlewareMulter = multer({ storage });